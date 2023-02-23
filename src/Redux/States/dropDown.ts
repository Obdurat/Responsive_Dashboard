import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type DropdownState = {
	value: boolean;
};

const initialState: DropdownState = {
	value: false,
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
	},
});

// Action creators are generated for each case reducer function
export const {toogle, setOpen, setClose} = dropdownSlice.actions;

export default dropdownSlice.reducer;
