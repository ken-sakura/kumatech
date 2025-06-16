// app/layout.tsx
'use client'; // useStateを使うため、'use client' ディレクティブを追加

import type { Metadata } from "next"; // Metadataはサーバーコンポーネント用なので、クライアントコンポーネントでは使用しない
import { Inter } from "next/font/google";
import "@/globals.css";
import Sidebar from "@/components/Sidebar";
import { useState } from 'react'; // useStateをインポート

const inter = Inter({ subsets: ["latin"] });

// Metadataはサーバーコンポーネントでしかエクスポートできないため、
// ルートレイアウトをクライアントコンポーネントにする場合は、
// 別のmetadata.tsファイルに記述するか、ルートlayout.tsxをサーバーコンポーネントのままにして、
// その中でクライアントコンポーネントのラッパーを使う形にします。
// ここでは簡易的に削除しますが、本番では適切な方法を選択してください。
// export const metadata: Metadata = {
//   title: "My Next.js Wiki",
//   description: "A static wiki site built with Next.js",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // サイドバーの開閉状態を管理

  return (
    <html lang="ja" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-300`}>
        <div className="flex">
          {/* PC表示では常に表示、SP表示では開閉状態に応じて表示 */}
          <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-200 ease-in-out z-40`}>
            <Sidebar />
          </div>

          {/* SP用のハンバーガーボタン */}
          <button
            className="md:hidden fixed top-4 left-4 z-50 p-2 text-white bg-gray-700 rounded-md"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? '✕' : '☰'} {/* 開閉アイコン */}
          </button>

          {/* サイドバーが開いているときにメインコンテンツを覆うオーバーレイ */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}

          <main className="flex-1 p-8 bg-gray-900 md:ml-0 ml-16"> {/* SP時はボタン分の余白を確保 */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
