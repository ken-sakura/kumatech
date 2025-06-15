import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

// getStaticProps runs at build time on the server-side.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <Head>
        <title>My Wiki</title>
      </Head>
      <header>
        <h1 style={{ fontSize: '2.5rem', borderBottom: '1px solid #eaeaea', paddingBottom: '0.5rem' }}>
          My Wiki
        </h1>
      </header>
      <main>
        <h2 style={{ fontSize: '1.8rem', marginTop: '2rem' }}>All Articles</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {allPostsData.map(({ id, title }) => (
            <li key={id} style={{ marginBottom: '1rem' }}>
              <Link href={`/wiki/${id}`}>
                <span style={{ fontSize: '1.2rem', color: '#0070f3', textDecoration: 'none', cursor: 'pointer' }}>
                  {title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

