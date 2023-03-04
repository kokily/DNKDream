import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import PageTemplate from '@/components/common/PageTemplate';
import About from '@/components/about/About';

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="비개발자의 개발 블로그 - D&K Dreams Blog"
        description="D&K dreams blog 관리자 소개"
        canonical="https://dnkdream.com/about"
      />

      <PageTemplate right={false}>
        <About />
      </PageTemplate>
    </>
  );
};

export default AboutPage;
