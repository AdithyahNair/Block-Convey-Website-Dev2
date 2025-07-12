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
    type?: string;
    keywords?: string;
  };
}

// Default/fallback meta config
const DEFAULT_META = {
  title: "Block Convey - AI Governance Platform",
  description:
    "Block Convey is a leading AI governance platform that ensures transparent, fair, and compliant AI systems for enterprises.",
  image: "https://blockconvey.com/images/business-value.png",
  imageAlt: "Block Convey AI Governance Platform",
  type: "website",
  keywords: "AI governance, compliance, fintech, machine learning",
};

const metaConfig: MetaTagsConfig = {
  "/": {
    title: "Block Convey - The Fastest Path to AI Compliance",
    description:
      "Block Convey is a leading AI governance platform that ensures transparent, fair, and compliant AI systems for enterprises. Audit-ready for ISO, EU AI Act, and NIST.",
    image: "https://blockconvey.com/images/business-value.png",
    imageAlt: "Block Convey AI Governance Platform",
    type: "website",
    keywords:
      "AI governance, AI compliance, ISO 42001, EU AI Act, NIST, fintech",
  },
  "/features": {
    title: "Block Convey Features - AI Governance Solutions",
    description:
      "Discover Block Convey's comprehensive features for AI governance, risk management, and compliance automation.",
    image: "/images/how-aigov.png",
    imageAlt: "Block Convey Features Overview",
    type: "website",
    keywords:
      "AI features, governance tools, risk management, compliance automation",
  },
  "/pricing": {
    title: "Block Convey Pricing - AI Governance Solutions",
    description:
      "Flexible pricing plans for AI governance, risk management, and compliance. Choose the plan that best fits your organization's needs.",
    image: "/images/businessSection.png",
    imageAlt: "Block Convey Pricing Plans",
    type: "website",
    keywords: "AI governance pricing, compliance plans, enterprise AI tools",
  },
  "/who-we-serve": {
    title: "Block Convey - Industries We Serve",
    description:
      "Tailored AI governance solutions for financial institutions, fintech startups, insurtech companies, and specialized service providers.",
    image: "/images/business-value.png",
    imageAlt: "Block Convey Industries",
    type: "website",
    keywords:
      "fintech AI, banking AI, insurtech, financial services AI governance",
  },
  "/resources": {
    title: "Block Convey Resources - AI Governance Insights",
    description:
      "Access comprehensive resources, tools, and insights about AI governance, Synthetic Data Generation technology, and regulatory compliance.",
    image: "/images/how-aigov.png",
    imageAlt: "Block Convey Resources",
    type: "website",
    keywords: "AI governance resources, compliance tools",
  },
  "/company": {
    title: "About Block Convey - Our Mission & Vision",
    description:
      "Learn about Block Convey's mission to revolutionize AI governance through innovative Synthetic Data Generation technology and compliance solutions.",
    image: "/images/business-value.png",
    imageAlt: "About Block Convey",
    type: "website",
    keywords: "Block Convey team, AI governance company, Fintech AI",
  },
  "/blogs": {
    title: "Block Convey Blog - AI Governance Insights & Updates",
    description:
      "Explore the latest insights, trends, and best practices in AI governance, Synthetic Data Generation technology, and regulatory compliance.",
    image: "/images/business-value.png",
    imageAlt: "Block Convey Blog",
    type: "website",
    keywords: "AI governance blog, compliance insights",
  },
  "/prism": {
    title: "PRISM - Predictive Risk and Intelligence Surveillance Monitor",
    description:
      "Experience the power of transparent AI governance with PRISM. Transform your AI journey with explainability tools, bias detection, and performance evaluation.",
    image: "/images/business-value.png",
    imageAlt: "PRISM AI Governance Platform",
    type: "website",
    keywords:
      "PRISM, AI monitoring, explainable AI, bias detection, AI transparency",
  },
};

// Helper function to set meta tag
const setMetaTag = (property: string, content: string) => {
  let element =
    document.querySelector(`meta[property="${property}"]`) ||
    document.querySelector(`meta[name="${property}"]`);

  if (element) {
    element.setAttribute("content", content);
  } else {
    // Create new meta tag if it doesn't exist
    element = document.createElement("meta");
    if (property.startsWith("og:") || property.startsWith("twitter:")) {
      element.setAttribute("property", property);
    } else {
      element.setAttribute("name", property);
    }
    element.setAttribute("content", content);
    document.head.appendChild(element);
  }
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
            image: blogData.imageUrl || DEFAULT_META.image, // ✅ Uses Firebase imageUrl
            imageAlt: blogData.title || DEFAULT_META.imageAlt,
            type: "article", // Better for blog posts
            keywords: blogData.tags?.join(", ") || DEFAULT_META.keywords,
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

        // Update document title
        document.title = config.title;

        // Update standard meta tags
        setMetaTag("description", config.description);
        setMetaTag("keywords", config.keywords || "");

        // Update OpenGraph tags
        setMetaTag("og:title", config.title);
        setMetaTag("og:description", config.description);
        setMetaTag("og:image", imageUrl);
        setMetaTag("og:image:alt", config.imageAlt);
        setMetaTag("og:url", `${baseUrl}${path}`);
        setMetaTag("og:type", config.type || "website");
        setMetaTag("og:site_name", "Block Convey");

        // Update Twitter Card tags
        setMetaTag("twitter:card", "summary_large_image");
        setMetaTag("twitter:title", config.title);
        setMetaTag("twitter:description", config.description);
        setMetaTag("twitter:image", imageUrl);
        setMetaTag("twitter:image:alt", config.imageAlt);

        // Additional blog-specific meta tags
        if (blogData && path.startsWith("/blogs/")) {
          setMetaTag("article:author", blogData.author);
          setMetaTag(
            "article:published_time",
            blogData.createdAt.toDate().toISOString()
          );
          setMetaTag("article:section", "AI Governance"); // Category for all blog posts

          // Clean up existing article:tag meta tags first
          const existingTags = document.querySelectorAll(
            'meta[property="article:tag"]'
          );
          existingTags.forEach((tag) => tag.remove());

          // Add new article:tag meta tags
          if (blogData.tags && blogData.tags.length > 0) {
            blogData.tags.forEach((tag) => {
              const tagElement = document.createElement("meta");
              tagElement.setAttribute("property", "article:tag");
              tagElement.setAttribute("content", tag);
              document.head.appendChild(tagElement);
            });
          }

          // Add blog-specific structured data
          const blogStructuredData = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blogData.title,
            description: blogData.summary,
            image: blogData.imageUrl,
            author: {
              "@type": "Person",
              name: blogData.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Block Convey",
              logo: {
                "@type": "ImageObject",
                url: `${baseUrl}/images/logo.png`,
              },
            },
            datePublished: blogData.createdAt.toDate().toISOString(),
            dateModified:
              blogData.updatedAt?.toDate().toISOString() ||
              blogData.createdAt.toDate().toISOString(),
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}${path}`,
            },
            keywords: blogData.tags?.join(", "),
          };

          // Remove existing blog structured data
          const existingBlogData = document.querySelector(
            "#blog-structured-data"
          );
          if (existingBlogData) existingBlogData.remove();

          // Add new blog structured data
          const blogScript = document.createElement("script");
          blogScript.id = "blog-structured-data";
          blogScript.type = "application/ld+json";
          blogScript.textContent = JSON.stringify(blogStructuredData);
          document.head.appendChild(blogScript);
        }
      } catch (error) {
        console.error("Error updating meta tags:", error);
        // Use default meta tags as fallback
        const imageUrl = `${baseUrl}${DEFAULT_META.image}`;

        document.title = DEFAULT_META.title;
        setMetaTag("description", DEFAULT_META.description);
        setMetaTag("og:title", DEFAULT_META.title);
        setMetaTag("og:description", DEFAULT_META.description);
        setMetaTag("og:image", imageUrl);
        setMetaTag("og:image:alt", DEFAULT_META.imageAlt);
        setMetaTag("og:url", `${baseUrl}${path}`);
        setMetaTag("twitter:title", DEFAULT_META.title);
        setMetaTag("twitter:description", DEFAULT_META.description);
        setMetaTag("twitter:image", imageUrl);
        setMetaTag("twitter:image:alt", DEFAULT_META.imageAlt);
      }
    };

    updateMetaTags();

    // Clean up article tags when leaving blog pages
    return () => {
      if (!path.startsWith("/blogs/")) {
        const articleTags = document.querySelectorAll(
          'meta[property^="article:"]'
        );
        articleTags.forEach((tag) => tag.remove());
      }
    };
  }, [path, blogData]);

  return null;
};
