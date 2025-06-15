import '../styles/globals.css'
import Sidebar from '../components/Sidebar'

// サイトのメタデータ
export const metadata = {
  title: 'KumaTech',
  description: 'Next.jsやReactに関する技術情報をまとめたWikiサイト',
  // ★★★ ここから追加 ★★★
  icons: {
    icon: '/favicon.ico', // Webサイトのルートにあるfavicon.icoを指定
  },
  // ★★★ ここまで追加 ★★★
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div className="flex">
          <Sidebar />
          <main className="flex-grow p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
