---
title: 'ページとルーティング'
---

Next.jsはファイルシステムベースのルーティングを採用しています。

## ページの作成

`pages` ディレクトリ内に`.js`, `.jsx`, `.ts`, `.tsx` ファイルを作成すると、そのファイル名が自動的にURLパスになります。

- `pages/index.js` → `/`
- `pages/about.js` → `/about`
- `pages/posts/first-post.js` → `/posts/first-post`

## 動的ルーティング

角括弧 `[]` を使って動的なルートを作成できます。

例えば、`pages/posts/[id].js` を作成すると、`/posts/1` や `/posts/abc` のようなパスにマッチします。

```javascript
// pages/posts/[id].js
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
};

export default Post;

