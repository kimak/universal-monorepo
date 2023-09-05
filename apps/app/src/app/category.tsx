import { useQuery } from '@tanstack/react-query';
import { fetchCategory } from '@universal-monorepo/api';
import { Box, Text } from '@universal-monorepo/ui';
import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView } from 'react-native';
import { CategoryList } from '../components/CategoryList';

export default function CategoryScreen() {
  const params = useLocalSearchParams();
  const { id } = params;
  const { data } = useQuery({
    queryKey: ['category'],
    queryFn: () => (id ? fetchCategory(id as string) : undefined),
  });
  return (
    <ScrollView>
      <Box padding="m" backgroundColor="background">
        <Text variant="title">{data?.Nom}</Text>
        <Text>{data?.Description}</Text>
        <Box width={180} height={120} borderRadius={10}>
          <Image
            source={{ uri: data?.Image }}
            style={{
              width: 180,
              height: 120,
            }}
            resizeMode="contain"
          />
        </Box>
        <Box flex={1}>
          {data?.['Sous-categories'] ? (
            <CategoryList list={data?.['Sous-categories']} />
          ) : undefined}
        </Box>
      </Box>
    </ScrollView>
  );
}
