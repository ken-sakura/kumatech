import Layout from '../../components/Layout';
import { getAllArticlePaths, getArticleData, getNavigationData } from '../../lib/articles';
import Head from 'next/head';

export async function getStaticPaths() {
  const paths = getAllArticlePaths();
  return {
    paths,
    fallback: false, 
  };
}

export async function getStaticProps({ params }) {
  const articleData = await getArticleData(params.slug);
  const navigation = getNavigationData();
  
  if (!articleData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articleData,
      navigation,
    },
  };
}

export default function Article({ articleData, navigation }) {
  return (
    <Layout navigation={navigation}>
      <Head>
        <title>{articleData.title} - Next.js Wiki</title>
      </Head>
      <article>
        {/* ▼▼▼ prose-invertを追加して、記事本文をダークテーマ対応に ▼▼▼ */}
        <div className="prose prose-invert prose-blue lg:prose-lg max-w-none">
          <h1>{articleData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
        </div>
      </article>
    </Layout>
  );
}

