import type { PostType } from 'types';
import { RiShareForwardBoxFill } from 'react-icons/ri';
import Skeleton from '@/components/common/Skeleton';
import formatDate from '@/libs/utils/formatDate';
import {
  Container,
  Share,
  SubTitle,
  TagBox,
  ThumbnailBox,
  Title,
} from './styles';

interface Props {
  post: PostType;
  onTagPost: (tag: string) => void;
  onSharePost: () => void;
}

export default function PostTitle({ post, onTagPost, onSharePost }: Props) {
  return (
    <Container>
      <Title>{post.title}</Title>
      <SubTitle>
        <p>{formatDate(post.createdAt.toString())} 작성</p>
        <Share onClick={onSharePost}>
          <RiShareForwardBoxFill size={18} color={'#208774'} />
        </Share>
      </SubTitle>

      <TagBox>
        {post.tags.map((tag, i) => (
          <div key={i} className="tag" onClick={() => onTagPost(tag)}>
            #{tag}
          </div>
        ))}
      </TagBox>

      <ThumbnailBox>
        {post.thumbnail ? (
          <img loading="lazy" src={post.thumbnail} alt="썸네일" />
        ) : (
          <Skeleton width={650} height={420} />
        )}
      </ThumbnailBox>
    </Container>
  );
}
