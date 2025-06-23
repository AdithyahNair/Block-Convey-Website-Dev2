import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { db } from "../../firebase";
import { BlogPost } from "../../types/blog";

interface MetaTagsConfig {
  [key: string]: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
}

// Default/fallback meta config
const DEFAULT_META = {
  title: "Block Convey - AI Governance Platform",
  description:
    "Block Convey is a leading AI governance platform that ensures transparent, fair, and compliant AI systems for enterprises.",
  image: "/images/business-value.png",
  imageAlt: "Block Convey AI Governance Platform",
};

const metaConfig: MetaTagsConfig = {
  "/": {
    title: "Block Convey - AI Governance Platform",
    description:
      "Block Convey is a leading AI governance platform that ensures transparent, fair, and compliant AI systems for enterprises.",
    image: "/images/business-value.png",
    imageAlt: "Block Convey AI Governance Platform",
  },
  "/features": {
    title: "Block Convey Features - AI Governance Solutions",
    description:
      "Discover Block Convey's comprehensive features for AI governance, risk management, and compliance automation.",
    image: "/images/how-aigov.png",
    imageAlt: "Block Convey Features Overview",
  },
  "/pricing": {
    title: "Block Convey Pricing - AI Governance Solutions",
    description:
      "Flexible pricing plans for AI governance, risk management, and compliance. Choose the plan that best fits your organization's needs.",
    image: "/images/businessSection.png",
    imageAlt: "Block Convey Pricing Plans",
  },
  "/who-we-serve": {
    title: "Block Convey - Industries We Serve",
    description:
      "Tailored AI governance solutions for financial institutions, fintech startups, insurtech companies, and specialized service providers.",
    image: "/images/business-value.png",
    imageAlt: "Block Convey Industries",
  },
  "/resources": {
    title: "Block Convey Resources - AI Governance Insights",
    description:
      "Access comprehensive resources, tools, and insights about AI governance, blockchain technology, and regulatory compliance.",
    image: "/images/how-aigov.png",
    imageAlt: "Block Convey Resources",
  },
  "/company": {
    title: "About Block Convey - Our Mission & Vision",
    description:
      "Learn about Block Convey's mission to revolutionize AI governance through innovative blockchain technology and compliance solutions.",
    image: "/images/business-value.png",
    imageAlt: "About Block Convey",
  },
  "/blogs": {
    title: "Block Convey Blog - AI Governance Insights & Updates",
    description:
      "Explore the latest insights, trends, and best practices in AI governance, blockchain technology, and regulatory compliance.",
    image: "/images/business-value.png",
    imageAlt: "Block Convey Blog",
  },
};

export const DynamicMetaTags: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  const [blogData, setBlogData] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      // Check if we're on a blog detail page
      const blogMatch = path.match(/^\/blogs\/([^/]+)$/);
      if (blogMatch) {
        const slug = blogMatch[1];
        try {
          const blogsQuery = query(
            collection(db, "blogs"),
            where("slug", "==", slug),
            where("published", "==", true),
            limit(1)
          );

          const querySnapshot = await getDocs(blogsQuery);
          if (!querySnapshot.empty) {
            const blogDoc = querySnapshot.docs[0];
            setBlogData({
              id: blogDoc.id,
              ...blogDoc.data(),
            } as BlogPost);
          }
        } catch (err) {
          console.error("Error fetching blog for meta tags:", err);
          setBlogData(null);
        }
      } else {
        setBlogData(null);
      }
    };

    fetchBlogData();
  }, [path]);

  useEffect(() => {
    const updateMetaTags = () => {
      const baseUrl = "https://blockconvey.com";
      let config;

      try {
        // If we're on a blog detail page and have blog data
        if (blogData && path.startsWith("/blogs/")) {
          config = {
            title: `${blogData.title} - Block Convey Blog`,
            description: blogData.summary || DEFAULT_META.description,
            image: blogData.imageUrl || DEFAULT_META.image,
            imageAlt: blogData.title || DEFAULT_META.imageAlt,
          };
        } else {
          // For non-blog pages or blog list page
          const exactPath = Object.keys(metaConfig).find((p) => path === p);
          config = exactPath ? metaConfig[exactPath] : DEFAULT_META;
        }

        // Ensure we have valid image URL
        const imageUrl = config.image.startsWith("http")
          ? config.image
          : `${baseUrl}${config.image}`;

        // Update OpenGraph tags
        document
          .querySelector('meta[property="og:title"]')
          ?.setAttribute("content", config.title);
        document
          .querySelector('meta[property="og:description"]')
          ?.setAttribute("content", config.description);
        document
          .querySelector('meta[property="og:image"]')
          ?.setAttribute("content", imageUrl);
        document
          .querySelector('meta[property="og:image:alt"]')
          ?.setAttribute("content", config.imageAlt);
        document
          .querySelector('meta[property="og:url"]')
          ?.setAttribute("content", `${baseUrl}${path}`);

        // Update Twitter Card tags
        document
          .querySelector('meta[name="twitter:title"]')
          ?.setAttribute("content", config.title);
        document
          .querySelector('meta[name="twitter:description"]')
          ?.setAttribute("content", config.description);
        document
          .querySelector('meta[name="twitter:image"]')
          ?.setAttribute("content", imageUrl);
        document
          .querySelector('meta[name="twitter:image:alt"]')
          ?.setAttribute("content", config.imageAlt);

        // Update regular meta tags
        document.title = config.title;
      } catch (error) {
        console.error("Error updating meta tags:", error);
        // Use default meta tags as fallback
        const imageUrl = `${baseUrl}${DEFAULT_META.image}`;

        document
          .querySelector('meta[property="og:title"]')
          ?.setAttribute("content", DEFAULT_META.title);
        document
          .querySelector('meta[property="og:description"]')
          ?.setAttribute("content", DEFAULT_META.description);
        document
          .querySelector('meta[property="og:image"]')
          ?.setAttribute("content", imageUrl);
        document
          .querySelector('meta[property="og:image:alt"]')
          ?.setAttribute("content", DEFAULT_META.imageAlt);
        document
          .querySelector('meta[property="og:url"]')
          ?.setAttribute("content", `${baseUrl}${path}`);

        document
          .querySelector('meta[name="twitter:title"]')
          ?.setAttribute("content", DEFAULT_META.title);
        document
          .querySelector('meta[name="twitter:description"]')
          ?.setAttribute("content", DEFAULT_META.description);
        document
          .querySelector('meta[name="twitter:image"]')
          ?.setAttribute("content", imageUrl);
        document
          .querySelector('meta[name="twitter:image:alt"]')
          ?.setAttribute("content", DEFAULT_META.imageAlt);

        document.title = DEFAULT_META.title;
      }
    };

    updateMetaTags();
  }, [path, blogData]);

  return null;
};
