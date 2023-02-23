import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type DropdownState = {
	open: boolean;
	className: string;
};

const initialState: DropdownState = {
	open: false,
	className: 'dropdown-animate',
};

export const dropdownSlice = createSlice({
	name: 'dropdown',
	initialState,
	reducers: {
		toogle(state) {
			state.open = !state.open;
		},
		className(state, action: PayloadAction<string>) {
			state.className = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {toogle, className} = dropdownSlice.actions;

export default dropdownSlice.reducer;
