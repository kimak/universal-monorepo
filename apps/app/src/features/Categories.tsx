import { useQuery } from '@tanstack/react-query';
import { Box, Carousel } from '@universal-monorepo/ui';
import { Image, TouchableOpacity, Text } from 'react-native';
import { fetchCategories } from '@universal-monorepo/api';
import { Link } from 'expo-router';

export const Categories = () => {
  const {
    isLoading,
    error,
    data: categories,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
  return (
    <Box flexDirection="row" paddingVertical="s" backgroundColor="secondary">
      <Carousel>
        {categories?.map((category) => (
          <Link
            href={{ pathname: 'category', params: { id: category.ID } }}
            asChild
            key={category.ID}
          >
            <TouchableOpacity>
              <Box alignItems="center" marginBottom="m">
                <Image
                  source={{ uri: category.Image }}
                  style={{
                    width: 130,
                    height: 80,
                    borderRadius: 20,
                    marginHorizontal: 5,
                  }}
                />
                <Text>{category.Nom}</Text>
              </Box>
            </TouchableOpacity>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
};
