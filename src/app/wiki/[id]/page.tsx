import { getArticleData } from '@/lib/articles';
import { notFound } from 'next/navigation';
import { Sidebar } from '@/app/components/Sidebar';

// articles.json を直接インポートします
import articles from '@/data/articles.json';

// ▼▼▼ この関数をファイルに追記してください ▼▼▼
// ビルド時に静的なパス（ページ）を生成するための関数
export async function generateStaticParams() {
  // articles.json の各記事から id を持つオブジェクトの配列を作成します
  // 例: [ { id: 'getting-started' }, { id: 'routing' }, ... ]
  return articles.map((article) => ({
    id: article.id,
  }));
}
// ▲▲▲ ここまでを追記 ▲▲▲

export default async function WikiPage({ params }: { params: { id: string } }) {
  // 以下のコードは既存のままでOKです
  const article = await getArticleData(params.id);

  if (!article) {
    return notFound();
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <article className="prose dark:prose-invert">
          <h1>{article.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
        </article>
      </main>
    </div>
  );
}
