import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Wiki",
  description: "A tech wiki built with Next.js and Markdown.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="flex">
          {/* TODO: モバイル対応でハンバーガーメニューにする */}
          <Sidebar />
          <main className="flex-1 p-8 md:p-12 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
