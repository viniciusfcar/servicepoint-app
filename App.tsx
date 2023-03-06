import { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { store, persistor } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as StoreProvider } from "react-redux";
import {
  Provider as PaperProvider,
  configureFonts,
  DefaultTheme,
} from "react-native-paper";
import { ThemeProvider } from "styled-components";
import { useFonts } from "expo-font";
import { fonts } from "./src/constants/fonts";
import theme from "./src/styles/theme";
import Routes from "./src/routes";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts(fonts);

  const fontConfig = {
    ...DefaultTheme,
    //@ts-ignore
    fonts: configureFonts(theme.default),
  };

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen?.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayout}>
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <PaperProvider theme={fontConfig}>
              <Routes />
            </PaperProvider>
          </ThemeProvider>
        </PersistGate>
      </StoreProvider>
    </GestureHandlerRootView>
  );
};

export default App;
