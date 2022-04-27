import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import resetArray from '../../components/sorting_logic/resetArray';

export type visualArray = number[];

const initialState: visualArray = [1, 2, 3];

export const visualArraySlice = createSlice({
	name: 'visualArray',
	initialState,
	reducers: {
		reset: () => {
			console.log('visualArraySlice Reset');
			return resetArray(100);
		},
		// decrement: (state) => {
		// 	state.value -= 1;
		// },
		// incrementByAmount: (state, action: PayloadAction<number>) => {
		// 	state.value += action.payload;
		// },
	},
});

// Action creators are generated for each case reducer function
export const { reset } = visualArraySlice.actions;

export default visualArraySlice.reducer;
