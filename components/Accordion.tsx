'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PostEntry } from '@/lib/posts';

interface AccordionProps {
  category: string;
  posts: PostEntry[];
  basePath: string;
}

export default function Accordion({ category, posts, basePath }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-text-main p-2 rounded-md hover:bg-gray-700 transition-colors"
      >
        <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
        <ChevronRight
          className={`w-5 h-5 transition-transform ${
            isOpen ? 'rotate-90' : ''
          }`}
        />
      </button>
      {isOpen && (
        <ul className="mt-2 pl-4 border-l-2 border-border-color">
          {posts.map(({ slug, title }) => (
            <li key={slug.join('/')}>
              <Link
                href={`${basePath}/wiki/${slug.join('/')}`}
                className="block text-text-muted hover:text-text-main py-1.5 px-2 rounded-md transition-colors hover:bg-gray-700/50"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
