import Link from 'next/link';
import articlesData from '@/data/articles.json';

export default function Home() {
  const { categories } = articlesData;

  return (
    // テキストカラーをダークモード用に調整
    <div>
      <h1 className="text-4xl font-bold mb-8 text-white">Wikiへようこそ</h1>
      <p className="mb-8 text-lg text-gray-400">左のサイドバーから記事を選択してください。</p>
      
      <div className="space-y-8">
        {categories.map((category) => (
          <section key={category.title}>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-700 text-white">{category.title}</h2>
            <ul className="list-disc list-inside space-y-2">
              {category.articles.map((article) => (
                <li key={article.id}>
                  <Link href={`/wiki/${article.id}`} className="text-blue-400 hover:underline">
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

