import axios from 'axios';
import { useQuery } from 'react-query';

async function listCategoriesAPI() {
  const response = await axios.get<string[]>('/api/posts/categories');
  return response.data;
}

export default function useLeftSide() {
  const { data } = useQuery('categories', () => listCategoriesAPI(), {
    enabled: true,
  });

  return {
    categories: data,
  };
}
