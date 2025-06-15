import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const articlesDirectory = path.join(process.cwd()) // ルートディレクトリからのパスにする

// ファイルパスを直接受け取って記事データを返す新しい関数
export async function getArticleDataByPath(filePath) {
  const fullPath = path.join(articlesDirectory, filePath)
  
  // ファイルが存在するかチェック
  if (!fs.existsSync(fullPath)) {
    console.error(`Error: File not found at ${fullPath}`);
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // gray-matterでメタデータをパース
  const matterResult = matter(fileContents)

  // remarkでMarkdownをHTMLに変換
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // データを結合して返す
  return {
    ...matterResult.data,
    contentHtml,
  }
}
