import type { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import db from '@/libs/database';
import PageTemplate from '@/components/common/PageTemplate';
import AllPosts from '@/components/posts/AllPosts';

interface Props {
  description: string[];
}

const IndexPage: NextPage<Props> = ({ description }) => {
  return (
    <>
      <NextSeo
        description={description ? description.toString() : undefined}
        canonical="https://dnkdream.com"
      />
      <PageTemplate right={true}>
        <AllPosts />
      </PageTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const posts = await db.post.findMany({
    take: 20,
    orderBy: {
      createdAt: 'desc',
    },
  });
  const description = posts.map((post) => {
    return post.body
      .replace(/ /gi, '')
      .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
      .substring(0, 50);
  });

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
      description: JSON.parse(JSON.stringify(description)),
    },
  };
};

export default IndexPage;
