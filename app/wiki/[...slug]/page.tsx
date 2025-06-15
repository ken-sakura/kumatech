import { getPostData, getAllPostSlugs } from '@/lib/posts';
import type { Metadata } from 'next';

type Props = {
  params: {
    slug: string[];
  };
};

// メタデータを動的に生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postData = await getPostData(params.slug);
  return {
    title: postData.title,
  };
}

// 記事ページ
export default async function PostPage({ params }: Props) {
  const postData = await getPostData(params.slug);
  
  return (
    <article className="prose prose-invert max-w-none">
      <h1>{postData.title}</h1>
      <div className="text-text-muted mb-8">
        {postData.date && <p>Last updated: {postData.date}</p>}
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}

// ビルド時に静的に生成するパスのリストを返す
export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}
