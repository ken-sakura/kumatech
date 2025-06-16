import { getArticleData } from '@/lib/articles';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
// { Sidebar } のように波括弧で囲み、名前付きインポートに修正
import { Sidebar } from '@/app/components/Sidebar'; 
import articles from '@/data/articles.json';

// ページのPropsの型をNext.jsの標準的な形式に修正
type PageProps = {
  params: { id: string };
};

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
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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
export default async function ArticlePage({ params }: PageProps) {
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
