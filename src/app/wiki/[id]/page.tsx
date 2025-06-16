import { getArticleData } from '@/lib/articles';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Sidebar from '@/app/components/Sidebar'; // 修正1: default import にする
import articles from '@/data/articles.json';

// 修正3: Propsの型をここで定義する
type Props = {
  params: { id: string };
};

/**
 * ビルド時に静的なHTMLページを生成するためのパス一覧を作成します。
 */
export async function generateStaticParams() {
  // 修正2: カテゴリ内の全記事をflatMapで1つの配列にしてからmapする
  const allArticles = articles.categories.flatMap(category => category.articles);
  return allArticles.map((article) => ({
    id: article.id,
  }));
}

/**
 * ページごとのメタデータ（タイトルなど）を動的に生成します。
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> { // 修正3: Props型を適用
  const articleData = await getArticleData(params.id);

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
export default async function ArticlePage({ params }: Props) { // 修正3: Props型を適用
  const articleData = await getArticleData(params.id);

  if (!articleData) {
    notFound();
  }

return (
    <main className="flex-1 p-8">
      <article className="prose dark:prose-invert max-w-none">
        <h1>{articleData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
      </article>
    </main>
  );
