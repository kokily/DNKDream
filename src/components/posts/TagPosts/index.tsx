import Link from 'next/link';
import PostCard from '../PostCard';
import { Container, TagBox, Tag } from '../styles';
import useTagPosts from './useTagPosts';

export default function TagPosts() {
  const tagPostsHooks = useTagPosts();

  return (
    <Container>
      {tagPostsHooks.tag && (
        <TagBox>
          <Link href="/" passHref={true}>
            <Tag>#{tagPostsHooks.tag}</Tag>
          </Link>
        </TagBox>
      )}

      {tagPostsHooks.posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onReadPost={tagPostsHooks.onReadPost}
          onTagPost={tagPostsHooks.onTagPost}
        />
      ))}

      <div ref={tagPostsHooks.setTarget} />
    </Container>
  );
}
