import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import articlesData from '../data/articles.json';

const articlesDirectory = path.join(process.cwd(), 'src/articles'); // 'src' ディレクトリを追加

// すべての記事IDのリストを取得
export function getAllArticleIds() {
  const allArticles = articlesData.categories.flatMap(category => category.articles);
  return allArticles.map(article => ({
    id: article.id,
  }));
}

// IDに基づいて記事データを取得
export async function getArticleData(id: string) {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  
  // ファイルが存在するかチェック
  if (!fs.existsSync(fullPath)) {
    console.error(`File not found: ${fullPath}`); // デバッグ用にログを追加
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // gray-matterを使ってメタデータを解析
  const matterResult = matter(fileContents);

  // remarkを使ってマークダウンをHTMLに変換
  const processedContent = await remark()
    .use(html, { sanitize: false }) // sanitizeオプションを追加
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  
  // JSONデータから記事のタイトルを取得
  const articleInfo = articlesData.categories
    .flatMap(c => c.articles)
    .find(a => a.id === id);

  return {
    id,
    contentHtml,
    title: articleInfo?.title || 'Untitled', // JSONからタイトルを取得
    ...matterResult.data,
  };
}

