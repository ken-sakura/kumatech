import { getSortedPostsData } from '@/lib/posts';
import Accordion from './Accordion';
import Link from 'next/link';

// GitHub Pagesのリポジトリ名を設定します (next.config.mjsと合わせる)
const repo = 'tech-wiki';
const basePath = process.env.GITHUB_ACTIONS ? `/${repo}` : '';

export default function Sidebar() {
  const categories = getSortedPostsData();

  return (
    <aside className="w-64 bg-sidebar p-6 h-screen sticky top-0 overflow-y-auto">
      <div className="mb-8">
        <Link href={`${basePath}/`} className="text-2xl font-bold text-white">
          Tech Wiki
        </Link>
      </div>
      <nav>
        {Object.entries(categories).map(([category, posts]) => (
          <Accordion key={category} category={category} posts={posts} basePath={basePath} />
        ))}
      </nav>
    </aside>
  );
}
