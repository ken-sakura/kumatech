import React from 'react';
import Link from 'next/link';
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import blogPosts from '@/data/blog-posts.json';
import fs from 'fs/promises';
import path from 'path';

interface PostProps {
  post: {
    id: number;
    title: string;
    theme: string;
    excerpt: string;
    imageUrl: string;
  };
}

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

async function getPost(id: string) {
  return blogPosts.find((post) => post.id === parseInt(id));
}

async function getPostContent(id: string): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'posts', `${id}.html`);
    const fileContent = await fs.readFile(filePath, 'utf8');
    return fileContent;
  } catch (error) {
    console.error("Failed to read HTML file:", error);
    return '<p>Error loading post content.</p>';
  }
}

const Post: React.FC<PostProps> = async ({post}) => {
  if (!post) {
    return <div>Post not found</div>;
  }

  const postContent = await getPostContent(post.id.toString());

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
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="bg-card rounded-md shadow-md p-6 markdown-body" dangerouslySetInnerHTML={{__html: postContent}} />
        </section>
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </main>
    </div>
  );
};

const Page: React.FC<PageProps> = async ({params}) => {
  const {id} = params;
  const post = await getPost(id);
  if (!post) {
    return <div>Post not found</div>;
  }
  return <Post post={post} />;
}

export default Page;
