import Layout from '../components/Layout';
import Link from 'next/link';
import { getNavigationData } from '../lib/articles';

export async function getStaticProps() {
  const navigation = getNavigationData();
  return {
    props: {
      navigation,
    },
  };
}

export default function Home({ navigation }) {
  return (
    <Layout navigation={navigation}>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1>Wikiへようこそ</h1>
        <p>
          このサイトはNext.jsで構築された静的Wikiです。左のサイドバーから記事を選択してください。
        </p>
      </div>

      <div className="mt-12 space-y-10">
        {navigation.map(theme => (
          <section key={theme.themeId}>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4 dark:border-gray-600">{theme.theme}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {theme.articles.map(article => (
                <Link href={`/${theme.themeId}/${article.slug}`} key={article.slug} legacyBehavior>
                  <a className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{article.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{article.description}</p>
                  </a>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
}

