import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import db from '@/libs/database';
import PageTemplate from '@/components/common/PageTemplate';
import RightSide from '@/components/common/RightSide';
import TagPosts from '@/components/posts/TagPosts';

interface Props {
  description: string[];
}

const TagPostsPage: NextPage<Props> = ({ description }) => {
  const router = useRouter();
  const { tag }: { tag?: string } = router.query;

  return (
    <>
      <NextSeo
        title={`${tag} 태그 선택 - D&K Dreams Blog`}
        description={description ? description.toString() : undefined}
        canonical={`https://dnkdream.com/tag/${tag}`}
      />

      <PageTemplate right={<RightSide />}>
        <TagPosts />
      </PageTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const tag = params.tag as string;
  const posts = await db.post.findMany({
    where: {
      tags: {
        has: tag,
      },
    },
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

export default TagPostsPage;
