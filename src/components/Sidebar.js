"use client" // ★★★ これを一番上に追加！ ★★★

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // useRouterからusePathnameに変更
import navigation from '../../data/navigation.json'

export default function Sidebar() {
  const pathname = usePathname() // 現在のパスを取得
  const [openSectionId, setOpenSectionId] = useState(null)

  useEffect(() => {
    // パスから現在のthemeIdを推測する
    const currentThemeId = pathname.split('/')[1]
    if (currentThemeId) {
      setOpenSectionId(currentThemeId)
    }
  }, [pathname])

  const handleToggle = (id) => {
    setOpenSectionId((prevId) => (prevId === id ? null : id))
  }

  return (
    <aside className="hidden md:block md:w-64 md:flex-shrink-0 h-screen bg-gray-50 dark:bg-gray-800">
      <div className="flex flex-col h-full py-4 pl-8 pr-4">
        <nav className="space-y-4">
          <div className="pb-2 border-b">
            <Link href="/" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/' ? 'text-white bg-gray-900' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
              ホーム
            </Link>
          </div>
          {Array.isArray(navigation) && navigation.map((theme) => {
            const isOpen = openSectionId === theme.themeId
            return (
              <div key={theme.themeId}>
                <button onClick={() => handleToggle(theme.themeId)} className="w-full flex justify-between items-center text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider text-left focus:outline-none">
                  <span>{theme.theme}</span>
                  <span className="text-lg">{isOpen ? '-' : '+'}</span>
                </button>
                {isOpen && Array.isArray(theme.articles) && (
                  <ul className="mt-2 space-y-1 pl-2">
                    {theme.articles.map((page) => (
                      <li key={page.slug}>
                        <Link href={`/${theme.themeId}/${page.slug}`} className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === `/${theme.themeId}/${page.slug}` ? 'text-white bg-gray-900' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                          {page.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
