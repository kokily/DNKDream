import PostCard from '../PostCard';
import { Container } from '../styles';
import useAllPosts from './useAllPosts';

export default function AllPosts() {
  const allPostsHooks = useAllPosts();

  return (
    <Container>
      {allPostsHooks.posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onReadPost={allPostsHooks.onReadPost}
          onTagPost={allPostsHooks.onTagPost}
        />
      ))}

      <div ref={allPostsHooks.setTarget} />
    </Container>
  );
}
