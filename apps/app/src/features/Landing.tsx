import { useQuery } from '@tanstack/react-query';
import { fetchLanding } from '@universal-monorepo/api';
import { CategoryList } from '../components/CategoryList';

export const Landing = () => {
  const { data: landing } = useQuery({
    queryKey: ['landing'],
    queryFn: fetchLanding,
  });

  return landing ? <CategoryList list={landing} /> : undefined;
};
