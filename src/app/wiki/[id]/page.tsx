import { getArticleData, getAllArticleIds } from '@/lib/articles';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// ページのPropsの型を定義
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// ビルド時に静的なパスを生成するための関数
export async function generateStaticParams() {
  const articles = await getAllArticles(); // すべての記事データを取得
  
  return articles.map((article) => ({
    id: article.id,
  }));
}

// 記事ページコンポーネント
// 引数で型を分解せず、propsオブジェクトとして受け取る
export default async function ArticlePage(props: Props) {
  const { params } = props; // 関数内で分解する
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
// こちらも同様にpropsオブジェクトとして受け取る
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
