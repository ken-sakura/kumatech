// kumatech/src/app/components/Sidebar.tsx

import Link from 'next/link';
import articlesData from '../../data/articles.json';

// 親コンポーネントから渡されるPropsの型を定義
type SidebarProps = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

export default function Sidebar({ isOpen, setOpen }: SidebarProps) {
  const { categories } = articlesData;

  // リンククリック時にモバイルならサイドバーを閉じる関数
  const handleLinkClick = () => {
    // 画面幅が768px未満の場合のみサイドバーを閉じる
    if (window.innerWidth < 768) {
      setOpen(false);
    }
  };

  return (
    <aside
      className={`
        w-64 h-screen bg-gray-800 p-4 border-r border-gray-700
        fixed top-0 left-0 z-20 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        
        pt-20
      `}
    >
      <h2 className="text-xl font-bold mb-4 text-white">
        <Link href="/" onClick={handleLinkClick} className="hover:underline">
          Wiki
        </Link>
      </h2>
      <nav>
        <ul>
          {categories.map((category) => (
            <li key={category.title} className="mb-4">
              <h3 className="font-semibold text-gray-300">{category.title}</h3>
              <ul className="ml-4 mt-2 border-l border-gray-600">
                {category.articles.map((article) => {
                  // article.idが "category/slug" 形式であることを想定
                  const [categoryName, slug] = article.id.split('/');
                  return (
                    <li key={article.id}>
                      {/* ここでhrefのパスを修正するよ！ */}
                      <Link
                        href={`/wiki/${categoryName}/${slug}`}
                        onClick={handleLinkClick} // onClickイベントを追加
                        className="block px-3 py-1 text-gray-400 hover:text-white"
                      >
                        {article.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
