import Link from 'next/link';
import articlesData from '../../data/articles.json';

// サイドバーコンポーネント
export default function Sidebar() {
  const { categories } = articlesData;

  return (
    <aside className="w-64 h-screen bg-gray-800 p-4 border-r border-gray-700">
      <h2 className="text-xl font-bold mb-4 text-white">
        <Link href="/" className="hover:underline">Wiki</Link>
      </h2>
      <nav>
        <ul>
          {categories.map((category) => (
            <li key={category.title} className="mb-4">
              <h3 className="font-semibold text-gray-300">{category.title}</h3>
              <ul className="ml-4 mt-2 border-l border-gray-600">
                {category.articles.map((article) => (
                  <li key={article.id}>
                    <Link
                      href={`/wiki/${article.id}`}
                      className="block px-3 py-1 text-gray-400 hover:bg-gray-700 rounded-md"
                    >
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

