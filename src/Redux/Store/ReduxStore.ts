import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '@States/count';
import dropDownReducer from '@States/dropDown';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		dropdown: dropDownReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
