import express, { Request, Response } from "express";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import path from "path";
import fs from "fs";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase only if we have the required config
let app;
let db;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

const expressApp = express();
const PORT = process.env.PORT || 8080; // GAE uses port 8080 by default

// Interface for meta tags
interface MetaTags {
  title: string;
  description: string;
  image: string;
  url: string;
}

// Function to get blog data
async function getBlogBySlug(slug: string): Promise<MetaTags | null> {
  try {
    const blogsQuery = query(
      collection(db, "blogs"),
      where("slug", "==", slug),
      where("published", "==", true)
    );
    const querySnapshot = await getDocs(blogsQuery);
    if (!querySnapshot.empty) {
      const blogData = querySnapshot.docs[0].data();
      return {
        title: blogData.title,
        description: blogData.summary,
        image: blogData.imageUrl || defaultMeta.image,
        url: `https://blockconvey.com/blogs/${slug}`,
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

// Default meta tags
const defaultMeta: MetaTags = {
  title: "Block Convey - The Fastest Path to AI Compliance",
  description:
    "Block Convey helps organizations achieve AI compliance through automated governance, risk management, and regulatory compliance solutions.",
  image: "https://blockconvey.com/images/tab.png",
  url: "https://blockconvey.com",
};

// Page-specific meta tags
const pageMeta: Record<string, MetaTags> = {
  "/": defaultMeta,
  "/solutions": {
    title: "AI Compliance Solutions - Block Convey",
    description:
      "Discover our comprehensive AI compliance solutions for automated governance, risk management, and regulatory compliance.",
    image: "https://blockconvey.com/images/business-value.png",
    url: "https://blockconvey.com/solutions",
  },
  "/who-we-serve": {
    title: "AI Compliance for Financial Institutions - Block Convey",
    description:
      "Tailored AI compliance solutions for financial institutions, fintech startups, and insurtech companies.",
    image: "https://blockconvey.com/images/businessSection.png",
    url: "https://blockconvey.com/who-we-serve",
  },
  "/prism": {
    title: "PRISM - AI Governance Platform - Block Convey",
    description:
      "PRISM: The comprehensive AI governance platform for transparent, compliant, and ethical AI systems.",
    image: "https://blockconvey.com/images/prism-logo.png",
    url: "https://blockconvey.com/prism",
  },
  "/resources": {
    title: "AI Compliance Resources - Block Convey",
    description:
      "Expert resources, insights, and tools for AI governance and compliance.",
    image: "https://blockconvey.com/images/business-value.png",
    url: "https://blockconvey.com/resources",
  },
};

// Function to safely read the template file
function readTemplate(): string {
  try {
    // In App Engine, the working directory is where your app.yaml is located
    const indexPath = path.join(process.cwd(), "dist/index.html");
    if (!fs.existsSync(indexPath)) {
      console.error("Template file not found at:", indexPath);
      return "<!DOCTYPE html><html><head></head><body><div id='root'></div></body></html>";
    }
    return fs.readFileSync(indexPath, "utf-8");
  } catch (error) {
    console.error("Error reading template file:", error);
    return "<!DOCTYPE html><html><head></head><body><div id='root'></div></body></html>";
  }
}

// Read the index.html template
let template: string;
try {
  template = readTemplate();
} catch (error) {
  console.error("Failed to read template on startup:", error);
  template =
    "<!DOCTYPE html><html><head></head><body><div id='root'></div></body></html>";
}

// Function to inject meta tags
function injectMetaTags(html: string, meta: MetaTags): string {
  const sanitizedMeta = {
    title: meta.title.replace(/[<>"'&]/g, (char) => {
      const entities: { [key: string]: string } = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "&": "&amp;",
      };
      return entities[char];
    }),
    description: meta.description.replace(/[<>"'&]/g, (char) => {
      const entities: { [key: string]: string } = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "&": "&amp;",
      };
      return entities[char];
    }),
    image: meta.image,
    url: meta.url,
  };

  return html.replace(
    "<head>",
    `<head>
    <meta property="og:title" content="${sanitizedMeta.title}" />
    <meta property="og:description" content="${sanitizedMeta.description}" />
    <meta property="og:image" content="${sanitizedMeta.image}" />
    <meta property="og:url" content="${sanitizedMeta.url}" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="${sanitizedMeta.title}" />
    <meta property="twitter:description" content="${sanitizedMeta.description}" />
    <meta property="twitter:image" content="${sanitizedMeta.image}" />`
  );
}

// Health check endpoint for App Engine
expressApp.get("/_ah/health", (req: Request, res: Response) => {
  res.status(200).send("OK");
});

// Serve static files from the dist directory
expressApp.use(express.static(path.join(process.cwd(), "dist")));

// Handle all routes
expressApp.get("*", async (req: Request, res: Response) => {
  try {
    // Check if it's a blog post
    if (req.path.startsWith("/blogs/")) {
      const slug = req.path.replace("/blogs/", "");
      const blogData = await getBlogBySlug(slug);

      if (blogData) {
        const html = injectMetaTags(template, blogData);
        res.send(html);
        return;
      }
    }

    // Handle other pages
    const meta = pageMeta[req.path] || defaultMeta;
    const html = injectMetaTags(template, meta);
    res.send(html);
  } catch (error) {
    console.error("Error handling request:", error, {
      path: req.path,
      method: req.method,
      headers: req.headers,
    });
    // Send the template with default meta tags in case of error
    const html = injectMetaTags(template, defaultMeta);
    res.status(500).send(html);
  }
});

// Start the server
expressApp.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
