"use client"; // stateを管理するため、ファイルの先頭に追加

import { useState } from "react"; // useStateフックをインポート
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = { ... } はこのまま残して問題ありません。

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // サイドバーの開閉状態を管理するstate
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="ja" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-300`}>
        {/* ハンバーガーメニュー (モバイルでのみ表示) */}
        <button
          // md以上の画面サイズで非表示 (md:hidden)
          className="md:hidden fixed top-4 left-4 z-30 p-2 text-white bg-gray-800 rounded-md"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          aria-label="メニューを開閉"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div className="flex">
          {/* Sidebarに状態とそれを更新する関数を渡す */}
          <Sidebar isOpen={isSidebarOpen} setOpen={setSidebarOpen} />
          {/* サイドバー表示時にコンテンツを覆うオーバーレイ */}
          {isSidebarOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black opacity-50 z-10"
              onClick={() => setSidebarOpen(false)}
            ></div>
          )}
          {/* メインコンテンツ */}
          <main className="flex-1 p-8 md:ml-64 w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
