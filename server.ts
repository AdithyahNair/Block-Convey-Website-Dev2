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
  image: "https://blockconvey.com/images/logo.png",
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
    image: "https://blockconvey.com/images/how-aigov.png",
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
        const html = createBaseTemplate(blogData);
        res.send(html);
        return;
      }
    }

    // Handle other pages
    const meta = pageMeta[req.path] || defaultMeta;
    const html = createBaseTemplate(meta);
    res.send(html);
  } catch (error) {
    console.error("Error handling request:", error, {
      path: req.path,
      method: req.method,
      headers: req.headers,
    });
    // Send the template with default meta tags in case of error
    const html = createBaseTemplate(defaultMeta);
    res.status(500).send(html);
  }
});

// Start the server
expressApp.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function createBaseTemplate(meta: MetaTags): string {
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

  // Read the index.html to get the latest script and style tags
  const indexPath = path.join(process.cwd(), "dist/index.html");
  let scriptTags = "";
  let styleTags = "";

  if (fs.existsSync(indexPath)) {
    const indexHtml = fs.readFileSync(indexPath, "utf-8");
    const scriptMatches =
      indexHtml.match(/<script[^>]*src="[^"]*"[^>]*><\/script>/g) || [];
    const styleMatches =
      indexHtml.match(/<link[^>]*rel="stylesheet"[^>]*>/g) || [];
    const modulePreloads =
      indexHtml.match(/<link[^>]*rel="modulepreload"[^>]*>/g) || [];

    scriptTags = [...scriptMatches].join("\n    ");
    styleTags = [...styleMatches, ...modulePreloads].join("\n    ");
  }

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/images/tab.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${sanitizedMeta.title}</title>
    <meta name="description" content="${sanitizedMeta.description}" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${sanitizedMeta.url}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${sanitizedMeta.url}" />
    <meta property="og:title" content="${sanitizedMeta.title}" />
    <meta property="og:description" content="${sanitizedMeta.description}" />
    <meta property="og:image" content="${sanitizedMeta.image}" />
    <meta property="og:image:alt" content="${sanitizedMeta.title}" />
    <meta property="og:site_name" content="Block Convey" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@blockconvey" />
    <meta name="twitter:title" content="${sanitizedMeta.title}" />
    <meta name="twitter:description" content="${sanitizedMeta.description}" />
    <meta name="twitter:image" content="${sanitizedMeta.image}" />
    <meta name="twitter:image:alt" content="${sanitizedMeta.title}" />

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-JJXKF0V72K"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-JJXKF0V72K');
    </script>

    <!-- Styles and Scripts -->
    ${styleTags}
    ${scriptTags}
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;
}
