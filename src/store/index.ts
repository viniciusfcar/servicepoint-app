import AsyncStorage from "@react-native-async-storage/async-storage";
import storage from 'redux-persist/lib/storage'
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
