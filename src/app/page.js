import Link from 'next/link'
import navigation from '../../data/navigation.json'

export default function Home() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-6">KumaTechへようこそ！</h1>
      <p className="text-lg mb-8">
        このサイトは、Next.jsやReactに関する技術情報をまとめたWikiサイトです。
      </p>
      <div className="space-y-8">
        {navigation.map((theme) => (
          <div key={theme.themeId}>
            <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4">
              {theme.theme}
            </h2>
            {Array.isArray(theme.articles) && (
              <ul className="space-y-3">
                {theme.articles.map((page) => (
                  <li key={page.slug} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow dark:border-gray-700 dark:hover:bg-gray-800">
                    <Link href={`/${theme.themeId}/${page.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                      <span className="font-semibold text-lg">{page.title}</span>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      {page.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
