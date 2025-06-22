/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静的サイトとして出力する設定
  output: 'export',

  // GitHub Pagesのリポジトリ名に合わせてパスを設定
  basePath: '/kumatech', 
  assetPrefix: '/kumatech/',

  // 静的エクスポート時に画像最適化を無効にする
  images: {
    unoptimized: true,
  },
    trailingSlash: true,
};

export default nextConfig;
