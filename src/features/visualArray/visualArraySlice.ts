import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import resetArray from '../../components/sorting_logic/resetArray';
import bubbleSort from '../../components/sorting_logic/bubbleSort';

export type visualArray = number[];

// @@INIT
const initialState: visualArray = resetArray(100);

// Async thunk for setTimeout;

export const visualArraySlice = createSlice({
	name: 'visualArray',
	initialState,
	reducers: {
		setVisualArrayReducer: (state, action: PayloadAction<number[]>) => {
			return action.payload;
		},
		initialArrayReducer: () => {
			const initialVisualArray = resetArray(100);
			return initialVisualArray;
		},
		reset: () => {
			const resettedVisualArray = resetArray(100);
			return resettedVisualArray;
		},
	},
});

// Action creators are generated for each case reducer function
export const { reset, initialArrayReducer, setVisualArrayReducer } =
	visualArraySlice.actions;

export default visualArraySlice.reducer;
