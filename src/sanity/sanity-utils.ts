// Sanity utility functions have been removed
// This file is no longer needed since Sanity is not being used

import { Blog } from "@/types/blog";

// Mock function for getPosts (replace with your actual data source)
export async function getPosts(): Promise<Blog[]> {
  // TODO: Replace with your actual data fetching (API, database, etc.)
  return [];
}

// Mock function for getPost (replace with your actual data source)
export async function getPost(slug: string): Promise<Blog | null> {
  // TODO: Replace with your actual data fetching (API, database, etc.)
  return null;
}

// Mock function for getPostsByTag (replace with your actual data source)
export async function getPostsByTag(tag: string): Promise<Blog[]> {
  // TODO: Replace with your actual data fetching (API, database, etc.)
  return [];
}

// Mock function for getPostsByAuthor (replace with your actual data source)
export async function getPostsByAuthor(author: string): Promise<Blog[]> {
  // TODO: Replace with your actual data fetching (API, database, etc.)
  return [];
}

// Mock image builder function (replace with your actual image URL logic)
export function imageBuilder(source: any) {
  return {
    url: () => {
      if (source?.url) {
        return source.url;
      }
      return '/images/placeholder.jpg';
    }
  };
}