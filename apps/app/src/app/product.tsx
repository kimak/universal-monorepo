import { useQuery } from '@tanstack/react-query';
import { fetchProduct } from '@universal-monorepo/api';
import { Box, Text } from '@universal-monorepo/ui';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'react-native';

export default function ProductScreen() {
  const params = useLocalSearchParams();
  const { id } = params;
  const { data } = useQuery({
    queryKey: ['product'],
    queryFn: () => (id ? fetchProduct(id as string) : undefined),
  });
  return (
    <Box padding="m">
      <Box
        width={268}
        height={268}
        margin="s"
        backgroundColor="secondary"
        borderRadius={10}
      >
        <Image
          source={{ uri: data?.Image }}
          style={{
            width: 268,
            height: 268,
          }}
          resizeMode="contain"
        />
      </Box>
      <Text variant="label">{data?.['B2C - Prix TTC']} €</Text>
      <Text variant="label" color="gray">
        {data && Math.round(data?.['Unité prix B2C'] * 100) / 100} € /{' '}
        {data?.['Unité de vente']}
      </Text>
      <Text variant="title">{data?.['Nom du produit']}</Text>
      <Text>{data?.Description}</Text>
    </Box>
  );
}
