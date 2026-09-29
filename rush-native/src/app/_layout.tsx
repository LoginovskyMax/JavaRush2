import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { Provider } from 'react-redux';

import { store, persistor } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
             <Stack     
        screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
          <Stack.Screen name='Home'/>
          <Stack.Screen name='Explore'/>
          <Stack.Screen name='About'/>
       </Stack>
      <AnimatedSplashOverlay />
    </ThemeProvider>
    </PersistGate>
    </Provider>
  );
}
