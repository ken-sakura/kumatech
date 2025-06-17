import { getAllArticles, getArticleData } from '@/lib/articles'; // 修正: getArticleData と getAllArticles をインポート
import { notFound } from 'next/navigation';
import { FC } from 'react';

type Props = {
  params: {
    id: string;
  };
};

// 修正: getAllArticles を使ってIDのリストを生成
export const generateStaticParams = async () => {
  const articles = getAllArticles(); // articles.jsonから全記事情報を取得
  return articles.map((article) => ({
    id: article.id,
  }));
};

const ArticlePage: FC<Props> = async ({ params }) => {
  // 修正: getArticleData を呼び出す
  const article = await getArticleData(params.id);

  if (!article) {
    notFound();
  }

  return (
    // prose-invert でダークモードに対応し、max-w-none で最大幅の制限を解除
    <article className="prose prose-invert max-w-none">
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
    </article>
  );
};

export default ArticlePage;
