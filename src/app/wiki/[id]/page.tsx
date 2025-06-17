import { getArticle, getArticleIds } from '@/lib/articles';
import { notFound } from 'next/navigation';
import { FC } from 'react';

type Props = {
  params: {
    id: string;
  };
};

// generateStaticParams を使用する場合、戻り値の型を定義する必要があります
export const generateStaticParams = async (): Promise<{ id: string }[]> => {
  return getArticleIds();
};

const ArticlePage: FC<Props> = async ({ params }) => {
  const article = await getArticle(params.id);

  if (!article) {
    notFound();
  }

  return (
    <article className="prose prose-invert max-w-none">
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
    </article>
  );
};

export default ArticlePage;
