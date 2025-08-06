import React from "react";
import type { Metadata } from "next";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import BlogDetailClient from "./BlogDetailClient";
import { BlogPost } from "../../../types/blog";

// Dynamic metadata generation for blog posts
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;

  try {
    // Fetch blog data from Firebase
    const blogsQuery = query(
      collection(db, "blogs"),
      where("slug", "==", resolvedParams.slug),
      where("published", "==", true)
    );

    const querySnapshot = await getDocs(blogsQuery);

    if (querySnapshot.empty) {
      return {
        title: "Blog Not Found - Block Convey",
        description: "The requested blog post was not found.",
      };
    }

    const blogData = querySnapshot.docs[0].data() as BlogPost;
    const blog = {
      ...blogData,
      id: querySnapshot.docs[0].id,
    };

    const publishedDate = blog.createdAt
      ? blog.createdAt.toDate().toISOString()
      : new Date().toISOString();

    return {
      title: `${blog.title} - Block Convey`,
      description: blog.summary,
      keywords: blog.tags,
      authors: [{ name: blog.author }],
      alternates: {
        canonical: `https://blockconvey.com/blogs/${blog.slug}`,
      },
      openGraph: {
        title: blog.title,
        description: blog.summary,
        url: `https://blockconvey.com/blogs/${blog.slug}`,
        siteName: "Block Convey",
        images: [
          {
            url:
              blog.imageUrl ||
              "https://blockconvey.com/images/business-value.png",
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
        locale: "en_US",
        type: "article",
        publishedTime: publishedDate,
        authors: [blog.author],
        tags: blog.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.summary,
        images: [
          blog.imageUrl || "https://blockconvey.com/images/business-value.png",
        ],
        creator: "@blockconvey",
      },
    };
  } catch (error) {
    console.error("Error generating metadata for blog:", error);
    return {
      title: "Blog - Block Convey",
      description:
        "AI governance insights and best practices from Block Convey.",
    };
  }
}

// Generate static params for all published blog posts - SERVER COMPONENT
export async function generateStaticParams() {
  try {
    const blogsQuery = query(
      collection(db, "blogs"),
      where("published", "==", true)
    );

    const querySnapshot = await getDocs(blogsQuery);
    const slugs: { slug: string }[] = [];

    querySnapshot.forEach((doc) => {
      const blogData = doc.data();
      if (blogData.slug) {
        slugs.push({ slug: blogData.slug });
      }
    });

    return slugs;
  } catch (error) {
    console.error("Error generating static params for blogs:", error);
    return [];
  }
}

// SERVER COMPONENT - wraps the client component
export default async function BlogDetailPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return <BlogDetailClient slug={resolvedParams.slug} />;
}
