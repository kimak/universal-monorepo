import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { APIProvider } from '@universal-monorepo/api';
import { UIThemeProvider } from '@universal-monorepo/ui';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    GaretHeavy: require('../assets/fonts/Garet-Heavy.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <UIThemeProvider>
        <APIProvider>
          <Stack
            screenOptions={{
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => router.back()}
                  style={{ paddingLeft: 10 }}
                >
                  <Ionicons name="arrow-back-sharp" size={32} />
                </TouchableOpacity>
              ),
            }}
          >
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="category"
              options={{
                headerShown: true,
                title: '',
              }}
            />
            <Stack.Screen
              name="product"
              options={{ presentation: 'modal', title: '' }}
            />
          </Stack>
        </APIProvider>
      </UIThemeProvider>
    </ThemeProvider>
  );
}
