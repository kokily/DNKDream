import Link from 'next/link';
import useCategoriesPosts from './useCategoriesPosts';
import { Container, CategoryBox, CategoryLink } from '../styles';
import PostCard from '../PostCard';

export default function CategoriesPosts() {
  const postsHooks = useCategoriesPosts();

  return (
    <Container>
      <CategoryBox>
        <Link href="/">
          <CategoryLink>카테고리 &gt; {postsHooks.category}</CategoryLink>
        </Link>
        <span>❌</span>
      </CategoryBox>

      {postsHooks.posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onReadPost={postsHooks.onReadPost}
          onTagPost={postsHooks.onTagPost}
        />
      ))}

      <div ref={postsHooks.setTarget} />
    </Container>
  );
}
