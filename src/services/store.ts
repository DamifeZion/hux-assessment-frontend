import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./root-reducer";
import persistStore from "redux-persist/es/persistStore";
import {
   FLUSH,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
   REHYDRATE,
} from "redux-persist";
import requestApi from "./api/request";

const store = configureStore({
   reducer: persistedReducer,

   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }).concat(requestApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
