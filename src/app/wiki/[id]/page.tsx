import { getArticleData } from '@/lib/articles';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Sidebar } from '@/app/components/Sidebar';
import articles from '@/data/articles.json'; // 記事リストを直接インポート

// ページのPropsの型を定義
// このページでは params のみを使用します
type Props = {
  params: { id: string };
};

/**
 * ビルド時に静的なHTMLページを生成するためのパス一覧を作成します。
 * 例: /wiki/getting-started, /wiki/routing などのページが生成されます。
 */
export async function generateStaticParams() {
  // articles.json の各記事から id を持つオブジェクトの配列を作成
  // 例: [ { id: 'getting-started' }, { id: 'routing' } ]
  return articles.map((article) => ({
    id: article.id,
  }));
}

/**
 * ページごとのメタデータ（タイトルなど）を動的に生成します。
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const articleData = await getArticleData(params.id);

  if (!articleData) {
    return {
      title: '記事が見つかりません',
    };
  }

  return {
    title: articleData.title, // ブラウザのタブに表示されるタイトル
  };
}

/**
 * 記事ページ本体のコンポーネントです。
 */
export default async function ArticlePage({ params }: Props) {
  const articleData = await getArticleData(params.id);

  // URLに対応する記事データが見つからない場合、404ページを表示
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
