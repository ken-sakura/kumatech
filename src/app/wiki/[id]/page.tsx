import { getArticleData } from '@/lib/articles';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Sidebar from '@/app/components/Sidebar';
import articles from '@/data/articles.json';

/**
 * ビルド時に静的なHTMLページを生成するためのパス一覧を作成します。
 */
export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

/**
 * ページごとのメタデータ（タイトルなど）を動的に生成します。
 * Propsの型を関数の引数で直接定義します。
 */
export async function generateMetadata(
  { params }
): Promise<Metadata>  {
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
 * こちらもPropsの型を直接定義します。
 */
export default async function ArticlePage({ params }) {
  const articleData = await getArticleData(params.id);

  if (!articleData) {
    notFound();
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <article className="prose dark:prose-invert max-w-none">
          <h1>{articleData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
        </article>
      </main>
    </div>
  );
}
