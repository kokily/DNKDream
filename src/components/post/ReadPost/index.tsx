import Link from 'next/link';
import Markdown from '@/components/common/Markdown';
import Modal from '@/components/common/Modal';
import PostButtons from './PostButtons';
import PostTitle from './PostTitle';
import useReadPost from './useReadPost';
import CommentsList from './CommentsList';
import { CategoryLink, PostContent, PostHeader } from './styles';

export default function ReadPost() {
  const readPostHooks = useReadPost();
  const { post, comments } = readPostHooks;

  return post ? (
    <>
      <PostHeader>
        <Link href={`/category/${post.category}`} passHref>
          <CategoryLink>카테고리 &gt; {post.category}</CategoryLink>
        </Link>

        <PostTitle
          post={post}
          onTagPost={readPostHooks.onTagPost}
          onSharePost={readPostHooks.onSharePost}
        />
      </PostHeader>

      <PostContent>
        <Markdown markdown={post.body} />
      </PostContent>

      <PostButtons
        onBack={readPostHooks.onBack}
        onEditPost={readPostHooks.onUpdatePost}
        onRemoveClick={readPostHooks.onRemovePostClick}
        isAdmin={readPostHooks.isAdmin}
      />

      <CommentsList comments={comments} postId={post.id} />

      <Modal
        visible={readPostHooks.removeModal}
        title="포스트 삭제"
        content="삭제하시겠어요?"
        onCancel={readPostHooks.onCancel}
        onConfirm={readPostHooks.onConfirm}
      />
    </>
  ) : null;
}
