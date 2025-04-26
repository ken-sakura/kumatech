"use client";

import React from 'react';
import {Header} from '@/components/Header';
import {BlogPostCard} from '@/components/BlogPostCard';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const blogPosts = [
  {
    id: 1,
    title: 'Introduction to React Hooks',
    theme: 'React',
    excerpt: 'Learn how to use React hooks to manage state and side effects in your functional components.',
    imageUrl: 'https://picsum.photos/id/237/400/300',
  },
  {
    id: 2,
    title: 'Mastering TypeScript',
    theme: 'TypeScript',
    excerpt: 'Explore the advanced features of TypeScript and improve your code quality.',
    imageUrl: 'https://picsum.photos/id/238/400/300',
  },
  {
    id: 3,
    title: 'Getting Started with Next.js',
    theme: 'Next.js',
    excerpt: 'A beginner-friendly guide to building server-rendered React apps with Next.js.',
    imageUrl: 'https://picsum.photos/id/239/400/300',
  },
  {
    id: 4,
    title: 'Advanced JavaScript Concepts',
    theme: 'JavaScript',
    excerpt: 'Delve into the intricacies of JavaScript, including closures, prototypes, and asynchronous programming.',
    imageUrl: 'https://picsum.photos/id/240/400/300',
  },
];

const CategoryPage: React.FC<CategoryPageProps> = ({params}) => {
  const {category} = params;

  const filteredPosts = category === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.theme.toLowerCase() === category.toLowerCase());

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section>
          <h2 className="text-3xl font-semibold mb-4">
            Category: {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CategoryPage;
