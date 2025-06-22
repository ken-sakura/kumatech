// kumatech/src/lib/articles.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import articlesData from '../data/articles.json'; // 相対パスのままでOK

const articlesRootDirectory = path.join(process.cwd(), 'src', 'articles');

export function getAllArticleIds() {
  const allArticleIds: { id: string }[] = [];
  articlesData.categories.forEach(category => {
    category.articles.forEach(article => {
      allArticleIds.push({ id: article.id });
    });
  });
  return allArticleIds;
}

export async function getArticleData(id: string) {
  // idは "nextjs/getting-started" のような形式で渡されることを想定
  // idをパスとして直接使用して、fullPathを構築する
  const fullPath = path.join(articlesRootDirectory, `${id}.md`); // ここで id をそのままパスの一部として使う

  if (!fs.existsSync(fullPath)) {
    console.error(`File not found: ${fullPath}`);
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  
  const articleInfo = articlesData.categories
    .flatMap(c => c.articles)
    .find(a => a.id === id);

  return {
    id,
    contentHtml,
    title: articleInfo?.title || 'Untitled',
    ...matterResult.data,
  };
}
