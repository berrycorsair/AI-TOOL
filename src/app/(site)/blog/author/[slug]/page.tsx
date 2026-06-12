import BlogGridContainer from "@/components/Blog/BlogGridContainer";
import Breadcrumb from "@/components/Breadcrumb";
import React from "react";

// Mock function to get posts by author (replace with your actual data source)
async function getPostsByAuthor(slug: string) {
  // TODO: Replace with your actual data fetching (API, database, etc.)
  // This is a temporary mock implementation
  return [];
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { slug } = params;

  return {
    title: `Author: ${slug} | Blog`,
    description: `Author: ${slug} | Blog`,
  };
}

const AuthorPage = async (props: Props) => {
  const params = await props.params;
  const { slug } = params;

  const posts = await getPostsByAuthor(slug);
  const author: any = posts[0]?.author || { name: "Author" };

  return (
    <>
      <Breadcrumb pageTitle={author.name} />

      <section className="pb-17.5 pt-20 lg:pb-22.5 lg:pt-25 xl:pb-27.5">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <BlogGridContainer blogs={posts} />
        </div>
      </section>
    </>
  );
};

export default AuthorPage;