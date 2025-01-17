import React, { FC } from "react";
import { notFound } from "next/navigation";
import BlogList from "@/components/blogs/BlogList";
import BlogHero from "@/components/blogs/BlogHero";
import { getClient } from "@/lib/apollo-server";
import { getAllBlogPosts } from "@/query/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Insights about my personal and dev life, and in the betweens",
  twitter: {
    card: "summary_large_image",
  },
};

const POSTS_PER_PAGE = 5;

const Blogs: FC = async () => {
  const { data, error } = await getClient().query({
    query: getAllBlogPosts,
    variables: {
      pagination: {
        page: 1,
        pageSize: POSTS_PER_PAGE,
      },
    },
  });

  if (!data || error) {
    notFound();
  }

  return (
    <main>
      <BlogHero />
      <BlogList page={"1"} data={data} error={error} />
    </main>
  );
};
export default Blogs;
