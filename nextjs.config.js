/** @type {import('next').NextConfig} */

// GitHub Pagesのリポジトリ名を設定します
// 例: https://<USERNAME>.github.io/<REPO_NAME> の <REPO_NAME> の部分
const repo = 'my-wiki'; // ⬅️ ここをあなたのリポジトリ名に変更してください

const nextConfig = {
  // 静的サイトとして出力する設定
  output: 'export',

  // GitHub Pagesのリポジトリ名に基づいたサブパスを設定
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,

  // next/image を静的エクスポートに対応させる設定
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

