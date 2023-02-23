import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type DropdownState = {
	value: boolean;
	className: string;
};

const initialState: DropdownState = {
	value: false,
	className: 'dropdown-animate',
};

export const dropdownSlice = createSlice({
	name: 'dropdown',
	initialState,
	reducers: {
		toogle(state) {
			state.value = !state.value;
		},
		setOpen(state) {
			state.value = true;
		},
		setClose(state) {
			state.value = false;
		},
		className(state, action: PayloadAction<string>) {
			state.className = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {toogle, setOpen, setClose, className} = dropdownSlice.actions;

export default dropdownSlice.reducer;
