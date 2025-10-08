"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import Link from "next/link";
import { BlogPost } from "../../types/blog";
import { ArrowRight, Search, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";
import { MainLayout } from "../../components/layout/MainLayout";

// Helper function to create mock timestamp
const createMockTimestamp = (date: string) =>
  ({
    toDate: () => new Date(date + "T12:00:00"), // Add time to avoid timezone issues
    getTime: () => new Date(date + "T12:00:00").getTime(),
  } as unknown as Timestamp);

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchFocused, setSearchFocused] = useState(false);

  // Static blog posts data
  const staticBlogs: BlogPost[] = [
    {
      id: "ai-model-auditing-prism",
      title: "AI Model Auditing Made Easy with PRISM",
      summary:
        "Learn how PRISM simplifies AI model auditing with automation, compliance alignment, bias detection, and audit-ready reports. Make AI governance faster and easier.",
      slug: "ai-model-auditing-prism",
      author: "Block Convey",
      createdAt: createMockTimestamp("2025-10-08"),
      updatedAt: createMockTimestamp("2025-10-08"),
      imageUrl: "/images/ai-model-auditing.png",
      tags: [
        "AI Auditing",
        "PRISM",
        "Compliance",
        "Bias Detection",
        "Automation",
      ],
      categories: ["AI Auditing"],
      published: true,
      content: "",
      contentSection: [],
    },
    {
      id: "ai-governance-why-it-matters",
      title: "What Is AI Governance and Why It Matters",
      summary:
        "AI governance ensures compliance, transparency, and responsible innovation. Learn why it matters in 2025 and how Block Convey's PRISM helps businesses build trust and reduce AI risks.",
      slug: "ai-governance-why-it-matters",
      author: "Block Convey",
      createdAt: createMockTimestamp("2025-08-28"),
      updatedAt: createMockTimestamp("2025-08-28"),
      imageUrl: "/images/ai-governance-matters.png",
      tags: ["AI Governance", "Compliance", "Risk Management"],
      categories: ["AI Governance"],
      published: true,
      content: "",
      contentSection: [],
    },
    {
      id: "ai-governance-challenges-prism",
      title: "Top AI Governance Challenges and How PRISM Solves Them",
      summary:
        "Discover the biggest AI governance challenges businesses face today—bias, compliance, transparency, accountability—and learn how PRISM helps solve them with automation and real-time monitoring.",
      slug: "ai-governance-challenges-prism",
      author: "Block Convey",
      createdAt: createMockTimestamp("2025-10-08"),
      updatedAt: createMockTimestamp("2025-10-08"),
      imageUrl: "/images/ai-governance-challenges.png",
      tags: [
        "AI Governance",
        "AI Challenges",
        "Compliance",
        "PRISM",
        "Transparency",
      ],
      categories: ["AI Governance"],
      published: true,
      content: "",
      contentSection: [],
    },
    {
      id: "ai-compliance-frameworks-guide",
      title:
        "A Complete Guide to AI Compliance Frameworks (ISO 42001, NIST, GDPR, etc.)",
      summary:
        "Learn about key AI compliance frameworks like ISO 42001, NIST, and GDPR. Discover how Block Convey's PRISM helps businesses meet global AI compliance standards with confidence.",
      slug: "ai-compliance-frameworks-guide",
      author: "Block Convey",
      createdAt: createMockTimestamp("2025-08-27"),
      updatedAt: createMockTimestamp("2025-08-27"),
      imageUrl: "/images/compliance-guide.png",
      tags: ["AI Compliance", "ISO 42001", "NIST", "GDPR"],
      categories: ["AI Compliance"],
      published: true,
      content: "",
      contentSection: [],
    },
    {
      id: "trustworthy-ai-systems-prism",
      title: "How PRISM Helps You Build Trustworthy AI Systems",
      summary:
        "Learn how PRISM helps organizations build ethical, transparent, and compliant AI systems. Discover how PRISM ensures fairness, accountability, and trust in AI.",
      slug: "trustworthy-ai-systems-prism",
      author: "Block Convey",
      createdAt: createMockTimestamp("2025-08-26"),
      updatedAt: createMockTimestamp("2025-08-26"),
      imageUrl: "/images/trustworthy-systems.png",
      tags: ["PRISM", "Trustworthy AI", "Ethical AI"],
      categories: ["PRISM"],
      published: true,
      content: "",
      contentSection: [],
    },
    {
      id: "responsible-ai-explainability",
      title: "The Role of Explainability in Responsible AI",
      summary:
        "Learn why explainability is essential for responsible AI. Discover how PRISM enhances transparency, fairness, and accountability in AI systems.",
      slug: "responsible-ai-explainability",
      author: "Block Convey",
      createdAt: createMockTimestamp("2025-08-25"),
      updatedAt: createMockTimestamp("2025-08-25"),
      imageUrl: "/images/role-explainability.png",
      tags: ["Explainability", "Responsible AI", "Transparency"],
      categories: ["Responsible AI"],
      published: true,
      content: "",
      contentSection: [],
    },
    {
      id: "ai-risk-management-frameworks",
      title: "AI Risk Management Frameworks: Tools, Standards, and Strategy",
      summary:
        "Learn about AI risk management frameworks, key tools, global standards like ISO 42001 & NIST, and how PRISM helps organizations manage AI risks responsibly.",
      slug: "ai-risk-management-frameworks",
      author: "Block Convey",
      createdAt: createMockTimestamp("2025-09-15"),
      updatedAt: createMockTimestamp("2025-09-15"),
      imageUrl: "/images/ai-risk-assessment-frameworks.png",
      tags: [
        "AI Risk Management",
        "NIST AI RMF",
        "ISO 42001",
        "EU AI Act",
        "PRISM",
      ],
      categories: ["AI Risk Management"],
      published: true,
      content: "",
      contentSection: [],
    },
    {
      id: "automate-ai-compliance-documentation",
      title: "How to Automate AI Compliance Documentation with PRISM",
      summary:
        "Learn how PRISM helps automate AI compliance documentation, streamline audits, align with global standards like ISO 42001 & NIST, and reduce compliance risks.",
      slug: "automate-ai-compliance-documentation",
      author: "Block Convey",
      createdAt: createMockTimestamp("2025-09-15"),
      updatedAt: createMockTimestamp("2025-09-15"),
      imageUrl: "/images/how-to-automate.png",
      tags: [
        "AI Compliance Automation",
        "PRISM",
        "Automated Documentation",
        "ISO 42001",
        "Compliance Workflows",
      ],
      categories: ["AI Compliance"],
      published: true,
      content: "",
      contentSection: [],
    },
    {
      id: "prism-vs-traditional-ai-risk-tools",
      title: "PRISM vs Traditional Risk Assessment Tools for AI",
      summary:
        "Discover how PRISM compares to traditional AI risk assessment tools. Learn which approach is best for compliance, governance, and trustworthy AI development.",
      slug: "prism-vs-traditional-ai-risk-tools",
      author: "Block Convey",
      createdAt: createMockTimestamp("2025-09-15"),
      updatedAt: createMockTimestamp("2025-09-15"),
      imageUrl: "/images/prism-vs-traditional.png",
      tags: [
        "PRISM vs Traditional",
        "AI Risk Assessment",
        "Traditional AI Tools",
        "PRISM Comparison",
        "AI Governance",
      ],
      categories: ["AI Risk Assessment"],
      published: true,
      content: "",
      contentSection: [],
    },
    {
      id: "startsups-iso-42001",
      title: "How Startups Can Achieve ISO 42001 Compliance Quickly with PRISM",
      summary:
        "Discover how startups can streamline ISO 42001 compliance using PRISM. Learn why AI governance matters and how PRISM accelerates readiness with automation and audit-ready reporting.",
      slug: "startsups-iso-42001",
      author: "Block Convey",
      createdAt: createMockTimestamp("2025-09-16"),
      updatedAt: createMockTimestamp("2025-09-16"),
      imageUrl: "/images/startups-iso-42001.png",
      tags: [
        "ISO 42001",
        "Startup Compliance",
        "AI Governance",
        "PRISM",
        "AI Management System",
      ],
      categories: ["ISO 42001"],
      published: true,
      content: "",
      contentSection: [],
    },
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsQuery = query(
          collection(db, "blogs"),
          where("published", "==", true),
          orderBy("createdAt", "desc")
        );

        const querySnapshot = await getDocs(blogsQuery);
        const firebaseBlogs: BlogPost[] = [];

        querySnapshot.forEach((doc) => {
          firebaseBlogs.push({
            id: doc.id,
            ...doc.data(),
          } as BlogPost);
        });

        // Combine Firebase blogs with static blogs and sort by date
        const allBlogs = [...staticBlogs, ...firebaseBlogs].sort((a, b) => {
          const dateA = a.createdAt.toDate();
          const dateB = b.createdAt.toDate();
          return dateB.getTime() - dateA.getTime();
        });

        // Debug: Log all blog dates to see what's happening
        console.log(
          "All blogs with dates:",
          allBlogs.map((blog) => ({
            title: blog.title,
            date: blog.createdAt.toDate().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
          }))
        );

        setBlogs(allBlogs);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        // Even if Firebase fails, show static blogs
        setBlogs(staticBlogs);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogs.forEach((blog) => {
      blog.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTag = selectedTag ? blog.tags.includes(selectedTag) : true;

      return matchesSearch && matchesTag;
    });
  }, [blogs, searchQuery, selectedTag]);

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand mx-auto mb-4"></div>
            <p className="text-gray-600">Loading blogs...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-brand-lightest to-white pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  AI Governance <span className="text-brand">Insights</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Stay informed with the latest developments in AI governance,
                  compliance, and best practices from our team of experts.
                </p>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-8">
                  <div
                    className={`relative transition-all duration-300 ${
                      searchFocused ? "scale-105" : ""
                    }`}
                  >
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search blogs by title, content, or tags..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent text-lg shadow-sm"
                    />
                  </div>
                </div>

                {/* Tags Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <button
                    onClick={() => setSelectedTag(null)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedTag === null
                        ? "bg-brand text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    All Posts
                  </button>
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedTag === tag
                          ? "bg-brand text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="pt-8 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {filteredBlogs.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-gray-600 text-lg">
                    No blogs found matching your criteria.
                  </p>
                </div>
              ) : (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {filteredBlogs.map((blog, index) => (
                    <motion.article
                      key={blog.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-brand-light"
                    >
                      <Link href={`/blogs/${blog.slug}`} className="block">
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              e.currentTarget.src = blog.imageUrl;
                            }}
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{blog.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {new Date(
                                  blog.createdAt.toDate()
                                ).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </span>
                            </div>
                          </div>
                          <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand transition-colors line-clamp-2">
                            {blog.title}
                          </h2>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {blog.summary}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {blog.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-brand-lightest text-brand text-xs font-medium rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center text-brand font-medium group-hover:gap-2 transition-all duration-200">
                            <span>Read More</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </MainLayout>
  );
}
