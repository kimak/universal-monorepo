import { Box } from '@universal-monorepo/ui';
import { ReactNode } from 'react';
import { ScrollView } from 'react-native';

export const Carousel = ({ children }: { children: ReactNode }) => (
  <ScrollView horizontal>{children}</ScrollView>
);
