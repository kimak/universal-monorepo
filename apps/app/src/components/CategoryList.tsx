import { Box, Text, Carousel } from '@universal-monorepo/ui';
import { Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Category } from '@universal-monorepo/api';

export const CategoryList = ({ list }: { list: Category[] }) => {
  return list?.map((category) => (
    <Box flex={1} key={category.ID} margin="s">
      <Text variant="title">{category.Nom}</Text>
      <Text>{category.Description}</Text>
      <Carousel>
        {category.Produits.map((product) => (
          <Link
            href={{ pathname: 'product', params: { id: product.ID } }}
            asChild
            key={product.ID}
          >
            <TouchableOpacity>
              <Box
                width={220}
                margin="s"
                flex={1}
                backgroundColor="secondary"
                borderRadius={10}
              >
                <Image
                  key={product.ID}
                  source={{ uri: product.Image }}
                  style={{ flex: 1, minHeight: 100 }}
                  resizeMode="contain"
                />
              </Box>
              <Box width={220}>
                <Text paddingHorizontal="s" numberOfLines={2} variant="label">
                  {product['Nom du produit']}
                </Text>
                <Text paddingHorizontal="s" variant="label">
                  {product['B2C - Prix TTC']} €
                </Text>
                <Text paddingHorizontal="s" variant="label" color="gray">
                  {Math.round(product['Unité prix B2C'] * 100) / 100} € /{' '}
                  {product['Unité de vente']}
                </Text>
              </Box>
            </TouchableOpacity>
          </Link>
        ))}
      </Carousel>
    </Box>
  ));
};
