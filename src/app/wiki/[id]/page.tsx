import { getArticleData } from '@/lib/articles';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Sidebar from '@/app/components/Sidebar'; // default importに修正済みのはず
import articles from '@/data/articles.json';

// Propsの型をここで定義します
type Props = {
  params: { id: string };
};

/**
 * ビルド時に静的なHTMLページを生成するためのパス一覧を作成します。
 */
export async function generateStaticParams() {
  const allArticles = articles.categories.flatMap(category => category.articles);
  return allArticles.map((article) => ({
    id: article.id,
  }));
}

/**
 * ページごとのメタデータ（タイトルなど）を動的に生成します。
 * 定義したProps型をここで使用します。
 */
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
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
 * こちらも同じProps型を使用します。
 */
export default async function ArticlePage({ params }: Props) {
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
