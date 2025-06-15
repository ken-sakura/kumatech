export default function HomePage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Welcome to Tech Wiki!</h1>
      <p>
        このサイトは、Next.jsとMarkdownを利用して構築された技術情報の共有Wikiです。
      </p>
      <p>
        左のサイドバーから閲覧したい記事を選択してください。
        記事はすべて `posts` ディレクトリ内のMarkdownファイルから自動的に生成されます。
      </p>
      <h2>記事の追加方法</h2>
      <ol>
        <li>`posts` フォルダ内にカテゴリ用の新しいフォルダを作成します。（例: `react`）</li>
        <li>作成したフォルダ内に、記事となるMarkdownファイル（`.md`）を追加します。</li>
        <li>ファイルの上部にメタデータ（front-matter）を追加します。</li>
      </ol>
      <pre>
        <code>
          ---<br/>
          title: '記事のタイトル'<br/>
          date: '2025-06-15'<br/>
          ---<br/>
          <br/>
          ## ここから本文<br/>
          Markdownで自由に記述できます...
        </code>
      </pre>
    </article>
  );
}
