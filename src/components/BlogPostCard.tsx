"use client";

import React from 'react';
import Link from 'next/link';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

interface BlogPost {
  id: number;
  title: string;
  theme: string;
  excerpt: string;
  imageUrl: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({post}) => {
  return (
    <Card className="bg-card text-card-foreground shadow-md overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
        <CardDescription>{post.theme}</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <img src={post.imageUrl} alt={post.title} className="rounded-md mb-4" />
        <p>{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 flex justify-end">
        <Link href={`/post/${post.id}`}>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/80">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
