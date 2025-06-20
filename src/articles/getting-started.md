---
author: 'Tech Writer'
---

# next js初期設定まとめ

## create-next-app での初期設定

`create-next-app` を実行する際に、いくつかの初期設定を選択できます。

### プロジェクト名の設定

```bash
npx create-next-app <プロジェクト名>
# または yarn create next-app <プロジェクト名>
# または pnpm create next-app <プロジェクト名>
```
`<プロジェクト名>` の部分に、作成したいプロジェクトのフォルダ名を指定します。

### TypeScript の使用
プロンプトで TypeScript を使用するかどうか聞かれます。
* **Yes:** TypeScript がプロジェクトに設定され、`.ts` や `.tsx` ファイルが使用できるようになります。型安全な開発を行いたい場合はこちらを選びます。
* **No:** JavaScript のみを使用します。

### ESLint の設定
JavaScript/TypeScript のコードの品質を保つための ESLint を設定するかどうか聞かれます。
* **Yes:** ESLint が設定され、一般的なルールが適用されます。
* **No:** ESLint は設定されません。

### Tailwind CSS の設定
ユーティリティファーストなCSSフレームワークである Tailwind CSS を設定するかどうか聞かれます。
* **Yes:** Tailwind CSS がプロジェクトにインストールされ、基本的な設定が行われます。
* **No:** Tailwind CSS は設定されません。

### `src` ディレクトリの使用
コンポーネントやページなどのソースコードを `src` ディレクトリにまとめるかどうか聞かれます。
* **Yes:** `src` ディレクトリが作成され、その中に `pages` や `components` などのフォルダが配置されます。
* **No:** `pages` や `components` などのフォルダがプロジェクトのルート直下に作成されます。

### App Router の使用 (Next.js 13 以降)
Next.js 13で導入された新しい `app` ディレクトリを使用するかどうか聞かれます。
* **Yes:** 新しい `app` ディレクトリが作成され、より柔軟なルーティングやデータフェッチ機能を利用できます。
* **No:** 従来の `pages` ディレクトリを使用します。

これらの選択によって、プロジェクトの基本的な構成や使用するツールが初期設定されます。

## プロジェクト作成後の初期設定 (必要に応じて)

`create-next-app` 完了後、必要に応じて以下の初期設定を行うことがあります。

### 依存関係の追加
プロジェクトに必要なライブラリやパッケージをインストールします。例えば、状態管理ライブラリ (Redux, Zustand など)、UIライブラリ (Material UI, Chakra UI など)、HTTPクライアント (axios, swr など) です。
```bash
npm install <パッケージ名>
# または yarn add <パッケージ名>
# または pnpm add <パッケージ名>
```

### 環境変数の設定
APIキーや外部サービスのエンドポイントなどの環境変数を設定します。Next.js では、`.env.local` ファイルを作成し、そこに環境変数を記述します。
```
API_KEY=your_api_key
BASE_URL=[https://example.com/api](https://example.com/api)
```
Next.js では、これらの環境変数は `process.env.<変数名>` でアクセスできます。セキュリティ上の理由から、クライアントサイドに公開したくない環境変数には `NEXT_PUBLIC_` プレフィックスを付けないようにします。

### グローバルスタイルの設定
`styles/globals.css` ファイルを編集して、アプリケーション全体の基本的なスタイルを設定します。フォントのインポートや共通のレイアウトスタイルなどを記述します。

### カスタムAppコンポーネント (`pages/_app.js` または `app/layout.js`)
アプリケーション全体に共通の処理やレイアウトを適用するために、`_app.js` (pages router) または `layout.js` (app router) を編集します。例えば、グローバルなレイアウトコンポーネントの適用、状態管理のProviderの追加、永続的なUI要素の配置などを行います。

### カスタムDocumentコンポーネント (`pages/_document.js`)
`<head>` タグの内容（title, meta タグ、link タグなど）や `<body>` タグの構造をカスタマイズする必要がある場合に、`_document.js` を編集します。ただし、通常はデフォルトの設定で十分な場合が多いです。

### Next.js 設定ファイル (`next.config.js`)
Next.js の動作を細かく設定する必要がある場合に `next.config.js` を編集します。例えば、カスタムルーティング、リダイレクト、HTTPヘッダー、外部APIのプロキシ設定、ビルド時の設定などを変更できます。

### TypeScript 設定ファイル (`tsconfig.json`) (TypeScript を選択した場合)
TypeScript のコンパイラオプションを設定します。strict モードの有効化、ターゲットの ECMAScript バージョン、モジュール解決の戦略などを調整できます。

### ESLint 設定ファイル (`.eslintrc.json`) (ESLint を選択した場合)
ESLint のルールをカスタマイズします。使用するルールセットの変更、特定のルールの有効/無効化、カスタムルールの追加などを行います。

### Prettier 設定ファイル (`.prettierrc.js` など)
コードの自動整形ツールである Prettier を使用する場合、設定ファイルを作成してコードスタイルを定義します。

これらの初期設定は、プロジェクトの要件や使用するライブラリによって異なります。まずは `create-next-app` で基本的なプロジェクトを作成し、必要に応じてこれらの設定を追加・変更していくのが一般的な流れです。
```
