import { ThemeProvider, createTheme } from '@shopify/restyle';
import { Platform } from 'react-native';

const theme = createTheme({
  colors: {
    primary: '#FAD5B3',
    secondary: '#FEF4EC',
    tertiary: '#9CA9E7',
    background: '#FFFFFF',
    local: '#4A844A',
    highlight: '#FB9C69',
    gray: '#cccccc',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    title: {
      fontFamily: 'GaretHeavy',
      fontWeight: 'bold',
      fontSize: 34,
    },
    label: {
      fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica',
      fontWeight: 'bold',
      fontSize: 14,
    },
    defaults: {
      fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica',
      fontSize: 16,
    },
  },
});

export type Theme = typeof theme;
export default theme;

export const UIThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
