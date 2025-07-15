import React from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../src/firebase";
import BlogDetailPage from "../../../src/pages/BlogDetailPage";

// Generate static params for all published blog posts
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
    // Return empty array to prevent build failure
    return [];
  }
}

export default async function BlogDetailPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await the params in Next.js 15 but don't use the slug since BlogDetailPage handles it
  await params;
  return <BlogDetailPage />;
}
