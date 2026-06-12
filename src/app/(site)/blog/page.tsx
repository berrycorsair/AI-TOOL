import BlogGridContainer from "@/components/Blog/BlogGridContainer";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

// Mock function to get posts (replace with your actual data source)
async function getPosts() {
  // TODO: Replace with your actual data fetching (API, database, etc.)
  // This is a temporary mock implementation
  return [];
}

export const metadata: Metadata = {
  title: "Blog | AI Tool - Next.js Template for AI Tools",
  description: "This is Blog page for AI Tool",
  // other metadata
};

export default async function BlogPage() {
  // Since Sanity is removed, we'll use the mock getPosts function
  // or replace with your actual data source
  const posts = await getPosts();

  return (
    <>
      <Breadcrumb pageTitle='Blog Grid' />

      <section className='pt-20 pb-17.5 lg:pt-25 lg:pb-22.5 xl:pb-27.5'>
        <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
          <BlogGridContainer blogs={posts} />
        </div>
      </section>
    </>
  );
}