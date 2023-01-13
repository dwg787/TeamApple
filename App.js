import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';
// import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Root from './navigation/Root';
// import { LightTheme } from './themeManager/theme';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';
const queryClient = new QueryClient();
export default function App() {
  const isDark = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* <ThemeProvider theme={isDark ? DarkTheme : LightTheme}> */}
        <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
          <Root />
        </NavigationContainer>
        {/* </ThemeProvider> */}
      </QueryClientProvider>
    </Provider>
  );
}