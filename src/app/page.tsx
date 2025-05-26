import React from 'react';
import {Header} from '@/components/Header';
import {BlogPostCard} from '@/components/BlogPostCard';
import Link from 'next/link';
import blogPosts from '@/data/blog-posts.json';

const categories = ['All', 'vim','nodejs','nextjs'];

const MAX_POSTS = 24;

export default function Home() {
  const selectedCategory = 'All';

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.theme === selectedCategory);

  const displayedPosts = filteredPosts.slice(0, MAX_POSTS);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Categories</h2>
          <div className="flex space-x-4">
            {categories.map((category) => (
              <Link key={category} href={`/category/${category}`}>
                <button
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  {category}
                </button>
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-semibold mb-4">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

