import Head from 'next/head';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';

// Returns a list of possible values for slug
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, // Any paths not returned by getStaticPaths will result in a 404 page.
  };
}

// Fetches necessary data for the post with the given slug
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 style={{ fontSize: '2.5rem' }}>{postData.title}</h1>
        {/* Safely render HTML converted from Markdown */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <hr style={{ margin: '2rem 0' }} />
      <Link href="/">
        <span style={{ color: '#0070f3', cursor: 'pointer' }}>← Back to home</span>
      </Link>
    </div>
  );
}

