import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
  id: string;
  slug: string[];
  contentHtml: string;
  [key: string]: any;
}

export interface PostEntry {
    id: string;
    slug: string[];
    title: string;
    category: string;
}

// カテゴリと記事のリストを取得
export function getSortedPostsData() {
  const categories: { [key: string]: PostEntry[] } = {};

  const traverseDirectory = (dir: string, currentPath: string[] = []) => {
    const fileNames = fs.readdirSync(dir);
    for (const fileName of fileNames) {
      const fullPath = path.join(dir, fileName);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverseDirectory(fullPath, [...currentPath, fileName]);
      } else if (fileName.endsWith('.md')) {
        const id = fileName.replace(/\.md$/, '');
        const slug = [...currentPath, id];
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        
        const category = currentPath.length > 0 ? currentPath[0] : 'Uncategorized';
        if (!categories[category]) {
          categories[category] = [];
        }

        categories[category].push({
          id,
          slug,
          title: matterResult.data.title || id,
          category: category
        });
      }
    }
  };

  traverseDirectory(postsDirectory);
  return categories;
}

// 静的生成のためのパスリストを取得
export function getAllPostSlugs() {
  const slugs: { params: { slug: string[] } }[] = [];

  const traverseDirectory = (dir: string, currentPath: string[] = []) => {
    const fileNames = fs.readdirSync(dir);
    for (const fileName of fileNames) {
      const fullPath = path.join(dir, fileName);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverseDirectory(fullPath, [...currentPath, fileName]);
      } else if (fileName.endsWith('.md')) {
        const id = fileName.replace(/\.md$/, '');
        slugs.push({
          params: {
            slug: [...currentPath, id],
          },
        });
      }
    }
  };

  traverseDirectory(postsDirectory);
  return slugs;
}

// slugに基づいて記事データを取得
export async function getPostData(slug: string[]): Promise<PostData> {
  const fullPath = path.join(postsDirectory, ...slug) + '.md';
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id: slug[slug.length - 1],
    slug,
    contentHtml,
    ...matterResult.data,
  };
}
