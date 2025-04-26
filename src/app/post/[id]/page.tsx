"use client";

import React from 'react';
import Link from 'next/link';
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import blogPosts from '@/data/blog-posts.json';

interface PostProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

const Post: React.FC<PostProps> = ({params}) => {
  const {id} = params;

  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  // Dummy content - replace with actual data fetching
  const postContent = `
  # ${post.title}

  ${post.excerpt}

  ## Theme

  ${post.theme}
  `;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-secondary text-secondary-foreground py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Tech Blueprints
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Blueprint Detail</h1>
          <div className="bg-card rounded-md shadow-md p-6 markdown-body">
            <div dangerouslySetInnerHTML={{__html: convertMarkdownToHTML(postContent)}} />
          </div>
        </section>
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </main>
    </div>
  );
};

// Basic Markdown to HTML conversion - replace with a proper library for production
function convertMarkdownToHTML(markdown: string): string {
  const html = markdown
    .replace(/### (.*)/g, '<h3>$1</h3>')
    .replace(/## (.*)/g, '<h2>$1</h2>')
    .replace(/# (.*)/g, '<h1>$1</h1>')
    .replace(/\*\*(.*)\*\*/g, '<b>$1</b>')
    .replace(/\*(.*)\*/g, '<i>$1</i>')
    .replace(/`(.*)`/g, '<code>$1</code>')
    .replace(/`{3}([\s\S]*?)`{3}/g, '<pre><code>$1</code></pre>')
    .replace(/\n/g, '<br />');
  return html;
}

export default Post;

