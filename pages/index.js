import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

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
    <div className="container">
      <Head>
        <title>My Next.js Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <h1>My Wiki</h1>
      </header>

      <main>
        <h2 className="subtitle">All Articles</h2>
        <ul className="post-list">
          {allPostsData.map(({ id, title, date }) => (
            <li key={id} className="post-item">
              <Link href={`/wiki/${id}`}>
                <a className="post-link">{title}</a>
              </Link>
              <br />
              <small className="post-date">{date}</small>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

