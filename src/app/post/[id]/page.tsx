"use client";

import React from 'react';
import Link from 'next/link';
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

interface PostProps {
  params: {
    id: string;
  };
}

const Post: React.FC<PostProps> = ({params}) => {
  const {id} = params;

  // Dummy content - replace with actual data fetching
  const postContent = `
  # React Hooks: A Deep Dive

  React Hooks have revolutionized how we write React components, 
  allowing us to use state and other React features in functional components. 
  This guide provides an in-depth look at some of the most commonly used hooks.

  ## useState

  The useState hook allows you to add state to your functional components. 
  Here's a basic example:

  \`\`\`javascript
  import React, { useState } from 'react';

  function Example() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  \`\`\`

  ## useEffect

  The useEffect hook lets you perform side effects in functional components:

  \`\`\`javascript
  import React, { useState, useEffect } from 'react';

  function Example() {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      }
      fetchData();
    }, []); // The empty array ensures this effect runs only once

    return (
      <div>
        {data ? <p>Data: {JSON.stringify(data)}</p> : <p>Loading...</p>}
      </div>
    );
  }
  \`\`\`

  ## Conclusion

  React Hooks provide a powerful and elegant way to manage state and side effects in your functional components. Experiment and explore to unlock their full potential!
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
