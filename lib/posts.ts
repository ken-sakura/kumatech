import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// 'posts' ディレクトリへのパス
const postsDirectory = path.join(process.cwd(), 'posts');

// すべての投稿のslug（URLパス）を取得する
export function getAllPostSlugs() {
  const allPostSlugs: { params: { slug: string[] } }[] = [];
  const dirents = fs.readdirSync(postsDirectory, { withFileTypes: true });

  // postsディレクトリ内のファイルやディレクトリを再帰的に探索
  function getSlugs(directoryPath: string, parentSlugs: string[] = []) {
    const dirents = fs.readdirSync(directoryPath, { withFileTypes: true });
    for (const dirent of dirents) {
      const fullPath = path.join(directoryPath, dirent.name);
      if (dirent.isDirectory()) {
        getSlugs(fullPath, [...parentSlugs, dirent.name]);
      } else if (dirent.isFile() && dirent.name.endsWith('.md')) {
        const slug = [...parentSlugs, dirent.name.replace(/\.md$/, '')];
        allPostSlugs.push({ params: { slug } });
      }
    }
  }

  getSlugs(postsDirectory);
  return allPostSlugs;
}

// slugに基づいて投稿データを取得する
export async function getPostData(slug: string[]) {
  // --- ▼ 修正点 ▼ ---
  // slug配列から正しいファイルパスを生成します。
  // 修正前は不正なパスを生成していました。
  // 例: slugが ['getting-started', 'introduction'] の場合、
  // 正しいパスは 'posts/getting-started/introduction.md' となります。
  const fullPath = path.join(postsDirectory, ...slug) + '.md';
  // --- ▲ 修正点 ▲ ---

  // ファイルが存在しない場合はエラーを投げる
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found for slug: ${slug.join('/')}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // gray-matterを使ってメタデータをパース
  const matterResult = matter(fileContents);

  // remarkを使ってMarkdownをHTMLに変換
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // データをslugとHTMLコンテンツと結合して返す
  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}