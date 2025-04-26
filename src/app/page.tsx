"use client";

import React from 'react';
import {Header} from '@/components/Header';
import {BlogPostCard} from '@/components/BlogPostCard';

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

const categories = ['All', 'React', 'TypeScript', 'Next.js', 'JavaScript'];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Categories</h2>
          <div className="flex space-x-4">
            {categories.map((category) => (
              <button key={category} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground">
                {category}
              </button>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-semibold mb-4">Latest Blueprints</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
