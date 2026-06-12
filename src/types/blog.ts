// Sanity types have been removed
// Updated to use plain TypeScript types

export type Author = {
  name: string;
  image: string;
  bio?: string;
  slug?: any;
  _id?: number | string;
  _ref?: number | string;
};

// Custom content block type to replace PortableTextBlock
export type ContentBlock = {
  _type?: string;
  children?: Array<{
    _type?: string;
    text?: string;
    marks?: string[];
  }>;
  style?: string;
  [key: string]: any;
};

export type Blog = {
  _id: number;
  title: string;
  slug: any;
  metadata?: string;
  body?: ContentBlock[];  // Replaced PortableTextBlock with ContentBlock
  mainImage?: any;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
};