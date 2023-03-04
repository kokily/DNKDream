import type { GetServerSideProps, NextPage } from 'next';
import type { PostType } from 'types';
import { NextSeo } from 'next-seo';
import PageTemplate from '@/components/common/PageTemplate';
import db from '@/libs/database';
import PostToc from '@/components/post/PostToc';
import ReadPost from '@/components/post/ReadPost';

interface Props {
  post: PostType;
  description: string[];
}

const ReadPostPage: NextPage<Props> = ({ post, description }) => {
  return (
    <>
      <NextSeo
        title={`${post.title} - D&K Dreams Blog`}
        description={description ? description.toString() : undefined}
        canonical={`https://dnkdream.com/${post.id}`}
        openGraph={{
          type: 'website',
          locale: 'ko_KR',
          url: `https://dnkdream.com/${post.id}`,
          title: post.title,
          siteName: 'D&K Dreams Blog',
          images: [
            {
              url: post.thumbnail,
              width: 285,
              height: 167,
              alt: 'Image',
            },
          ],
        }}
      />
      <PageTemplate right={post && <PostToc html={post.body} />}>
        <ReadPost />
      </PageTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params.id as string;
  const post = await db.post.findUnique({
    where: {
      id,
    },
  });
  const description = post?.body
    .replace(/ /gi, '')
    .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
    .substring(0, 50);

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
      description: JSON.parse(JSON.stringify(description)),
    },
  };
};

export default ReadPostPage;
