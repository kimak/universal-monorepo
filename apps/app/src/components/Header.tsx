import { Box } from '@universal-monorepo/ui';
import { Logo } from './Logo';

export const Header = () => (
  <Box flexDirection="row">
    <Box flex={1} height={75} backgroundColor="primary" />
    <Logo width={75} height={75} style={{ position: 'absolute', left: 0 }} />
  </Box>
);
