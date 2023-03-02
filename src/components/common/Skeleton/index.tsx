import { SkeletonContainer } from './styles';

interface Props {
  width: number;
  height: number;
}

export default function Skeleton({ width, height }: Props) {
  return <SkeletonContainer width={width} height={height} />;
}
