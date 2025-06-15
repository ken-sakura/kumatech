/** @type {import('next').NextConfig} */

// GitHub Pagesのリポジトリ名を設定します
const repo = 'tech-wiki'; 

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  // 静的サイトとして出力する
  output: 'export',
  // GitHub Pages用の設定
  assetPrefix: assetPrefix,
  basePath: basePath,
  // 画像の最適化を無効にする (静的エクスポートのため)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
