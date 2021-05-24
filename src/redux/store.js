import { combineReducers } from "redux";
import clientsReducer from "./clients/clientsReducer";
import productsReducer from "./products/productsReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
];

const persistConfig = {
  key: "auth",
  storage,
  whiteList: ["token"]
};

const rootReducer = combineReducers({
  products: productsReducer,
  clients: clientsReducer,
  auth: persistReducer(persistConfig, authReducer)
});

const store = configureStore({
  reducer: rootReducer,
  middleware
});

persistStore(store);

export default store;
