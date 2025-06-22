// kumatech/src/app/wiki/[category]/[slug]/page.tsx

import { getArticleData } from '@/lib/articles';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
// Sidebarはもうこのページでは直接使わないから削除してもOKだけど、今回はそのままにしとくね。
// import Sidebar from '@/app/components/Sidebar'; 
import articles from '@/data/articles.json';

// Propsの型を新しいパラメーターに合わせて定義するよ！
type Props = {
  params: { 
    category: string; // カテゴリ名を受け取る
    slug: string;     // 記事のID（スラッグ）を受け取る
  };
};

/**
 * ビルド時に静的なHTMLページを生成するためのパス一覧を作成します。
 */
export async function generateStaticParams() {
  const paramsList: { category: string; slug: string }[] = [];

  articles.categories.forEach(categoryData => {
    // category.titleから安全なURLセグメント（スラッグ）を生成することもできるけど、
    // 今回はarticles.jsonのidを解析する形でいくね。
    // articles.jsonのidが "categoryName/articleId" 形式であることを前提とする。
    categoryData.articles.forEach(article => {
      const parts = article.id.split('/');
      if (parts.length === 2) {
        paramsList.push({ category: parts[0], slug: parts[1] });
      } else {
        console.warn(`Unexpected article ID format: ${article.id}. Skipping static param generation for this article.`);
      }
    });
  });

  return paramsList;
}

/**
 * ページごとのメタデータ（タイトルなど）を動的に生成します。
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // getArticleDataには、categoryとslugを結合したIDを渡す必要があるよ
  const articleId = `${params.category}/${params.slug}`;
  const articleData = await getArticleData(articleId);

  if (!articleData) {
    return {
      title: '記事が見つかりません',
    };
  }

  return {
    title: articleData.title,
  };
}

/**
 * 記事ページ本体のコンポーネントです。
 */
export default async function ArticlePage({ params }: Props) {
  // getArticleDataには、categoryとslugを結合したIDを渡す必要があるよ
  const articleId = `${params.category}/${params.slug}`;
  const articleData = await getArticleData(articleId);

  if (!articleData) {
    notFound();
  }

  return (
    <div className="flex">
      <main className="flex-1 p-8">
        <article className="prose dark:prose-invert max-w-prose mx-auto">
          <h1>{articleData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
        </article>
      </main>
    </div>
  );
}
