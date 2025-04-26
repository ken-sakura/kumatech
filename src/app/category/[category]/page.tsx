"use client";

import React from 'react';
import {Header} from '@/components/Header';
import {BlogPostCard} from '@/components/BlogPostCard';
import blogPosts from '@/data/blog-posts.json';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

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
