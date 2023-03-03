import React from "react";
import { store, persistor } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as StoreProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components";
import { colors } from "./src/styles/colors";
import Routes from "./src/routes";

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={colors}>
          <PaperProvider>
            <Routes />
          </PaperProvider>
        </ThemeProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
