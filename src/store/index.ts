import { configureStore } from "@reduxjs/toolkit";
import { api } from "@api/createApi";

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer, // API reduktorini qo'shish
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware), // API middleware qo'shish
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
