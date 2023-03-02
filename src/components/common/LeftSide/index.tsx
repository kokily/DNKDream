import { Container, Title, CategoryItem } from './styles';
import useLeftSide from './useLeftSide';
import ActiveLink from '@/components/common/ActiveLink';

export default function LeftSide() {
  const { categories } = useLeftSide();

  return (
    <Container>
      <div>
        <Title>카테고리</Title>

        {categories &&
          categories.length > 0 &&
          categories.map((category) => (
            <ActiveLink
              key={category}
              href={`/category/${category}`}
              activeClassName="active"
            >
              <CategoryItem>{category}</CategoryItem>
            </ActiveLink>
          ))}
      </div>
    </Container>
  );
}
