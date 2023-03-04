import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import PageTemplate from '@/components/common/PageTemplate';
import RightSide from '@/components/common/RightSide';
import db from '@/libs/database';
import CategoriesPosts from '@/components/posts/CategoriesPosts';

interface Props {
  description: string[];
}

const CategoriesPage: NextPage<Props> = ({ description }) => {
  const router = useRouter();
  const { category }: { category?: string } = router.query;

  return (
    <>
      <NextSeo
        title={`${category} 카테고리 - D&K Dreams Blog`}
        description={description ? description.toString() : undefined}
        canonical={`https://dnkdream.com/category/${category}`}
      />

      <PageTemplate right={<RightSide />}>
        <CategoriesPosts />
      </PageTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const category = params.category as string;
  const posts = await db.post.findMany({
    where: {
      category,
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

export default CategoriesPage;
