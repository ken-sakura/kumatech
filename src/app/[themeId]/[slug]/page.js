import { getArticleDataByPath } from '../../../lib/articles'
import navigation from '../../../../data/navigation.json' // パス階層に注意
import { notFound } from 'next/navigation'

// 記事のタイトルを動的に設定する
export async function generateMetadata({ params }) {
  const page = findPage(params.themeId, params.slug)
  return {
    title: page?.title || '記事',
  }
}

// ビルド時にページのパスを生成する
export async function generateStaticParams() {
  const paths = []
  navigation.forEach((theme) => {
    if (Array.isArray(theme.articles)) {
      theme.articles.forEach((page) => {
        paths.push({
          themeId: theme.themeId,
          slug: page.slug,
        })
      })
    }
  })
  return paths
}

// ページ本体
export default async function ArticlePage({ params }) {
  const page = findPage(params.themeId, params.slug)

  if (!page || !page.filePath) {
    notFound() // ページが見つからなかったら404
  }

  const articleData = await getArticleDataByPath(page.filePath)

  if (!articleData) {
    notFound() // 記事データが読み込めなかったら404
  }

  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">{articleData.title}</h1>
      <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </article>
  )
}

// ヘルパー関数: navigation.jsonから該当ページを探す
function findPage(themeId, slug) {
  const theme = navigation.find((t) => t.themeId === themeId)
  return theme?.articles?.find((p) => p.slug === slug)
}
