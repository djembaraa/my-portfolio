import { groq } from "next-sanity";

export interface Project {
  _id: string;
  title: string;
  description: string;
  image: any;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  slug: string;
}

export const featuredProjectsQuery = groq`*[_type == "project" && featured == true] | order(_createdAt desc)[0...3] {
  _id,
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
  "slug": slug.current
}`;

export const allProjectsQuery = groq`*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
  "slug": slug.current
}`;
