import { getArticleData, getAllArticleIds } from '@/lib/articles';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// ページコンポーネントのpropsの型を定義
type Props = {
  params: { id: string };
};

// 静的パスを生成
export async function generateStaticParams() {
  const paths = getAllArticleIds();
  return paths;
}

// 記事ページコンポーネント
export default async function ArticlePage({ params }: Props) {
  const articleData = await getArticleData(params.id);

  if (!articleData) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{articleData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </article>
  );
}

// メタデータを生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
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
