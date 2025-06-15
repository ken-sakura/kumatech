import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar({ navigation }) {
  const router = useRouter();
  const { themeId, slug } = router.query;

  return (
    <aside className="w-64 lg:w-72 h-screen sticky top-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-6 hidden md:block">
      <Link href="/" legacyBehavior>
        <a className="text-2xl font-bold text-gray-900 dark:text-white mb-8 block">Wikiサイト</a>
      </Link>
      <nav>
        <ul>
          {navigation.map((navItem) => (
            <li key={navItem.themeId} className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">{navItem.theme}</h2>
              <ul>
                {navItem.articles.map((article) => {
                  const isActive = themeId === navItem.themeId && slug === article.slug;
                  return (
                    <li key={article.slug}>
                      <Link href={`/${navItem.themeId}/${article.slug}`} legacyBehavior>
                        <a className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                            isActive
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-semibold'
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          {article.title}
                        </a>
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

