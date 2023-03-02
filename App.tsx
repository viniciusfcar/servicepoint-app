import { StatusBar } from "expo-status-bar";
import React from "react";
import { store, persistor } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as StoreProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import Routes from "./src/routes";

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;


