import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import highlight from 'remark-highlight.js';

const articlesDirectory = path.join(process.cwd(), 'articles');
const navigationPath = path.join(process.cwd(), 'data/navigation.json');

// Get all navigation data from JSON
export function getNavigationData() {
  const fileContents = fs.readFileSync(navigationPath, 'utf8');
  return JSON.parse(fileContents);
}

// Get all possible paths for [theme]/[slug]
export function getAllArticlePaths() {
  const navigation = getNavigationData();
  const paths = [];
  navigation.forEach(theme => {
    theme.articles.forEach(article => {
      paths.push({
        params: {
          themeId: theme.themeId,
          slug: article.slug,
        },
      });
    });
  });
  return paths;
}

// Get data for a single article by slug
export async function getArticleData(slug) {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  // Handle file not found case
  if (!fs.existsSync(fullPath)) {
      return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(highlight)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}

