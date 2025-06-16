import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next.js Wiki",
  description: "A static wiki site built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html>に'dark'クラスを追加して、サイト全体でダークモードをデフォルトにする
    <html lang="ja" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-300`}>
        <div className="flex"> 
          <Sidebar />
          {/* メインコンテンツ部分の背景とパディングを調整 */}
          <main className="flex-1 p-8 bg-gray-900">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

