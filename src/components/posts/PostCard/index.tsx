import type { PostType } from 'types';
import Skeleton from '@/components/common/Skeleton';
import Image from 'next/image';
import {
  CardContainer,
  CardTag,
  CardTagBox,
  DateBox,
  Thumbnail,
} from '../styles';
import formatDate from '@/libs/utils/formatDate';

interface Props {
  post: PostType;
  onReadPost: (id: string) => void;
  onTagPost: (tag: string) => void;
}

export default function PostCard({ post, onReadPost, onTagPost }: Props) {
  return (
    <CardContainer>
      <Thumbnail onClick={() => onReadPost(post.id)}>
        {post.thumbnail ? (
          <Image
            src={post.thumbnail}
            alt="Thumbnail"
            width={650}
            height={360}
          />
        ) : (
          <Skeleton width={650} height={360} />
        )}
      </Thumbnail>

      <h2 onClick={() => onReadPost(post.id)}>
        {post.title}
        {post.comments && post.comments.length > 0 && (
          <small>[ {post.comments.length} ]</small>
        )}
      </h2>

      <CardTagBox>
        {post.tags.map((tag) => (
          <CardTag key={tag} onClick={() => onTagPost(tag)}>
            #{tag}
          </CardTag>
        ))}
      </CardTagBox>

      <DateBox>{formatDate(post.createdAt.toString())} 작성</DateBox>
    </CardContainer>
  );
}
