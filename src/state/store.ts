import { configureStore } from "@reduxjs/toolkit";
import tintsAndShadesReducer from "./tints-and-shades/colorsReducers";

const store = configureStore({
  reducer: {
    tints: tintsAndShadesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
