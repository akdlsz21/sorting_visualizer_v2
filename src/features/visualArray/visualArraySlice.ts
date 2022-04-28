import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import resetArray from '../../components/sorting_logic/resetArray';
import bubbleSort from '../../components/sorting_logic/bubbleSort';

export type visualArrayT = visualBarT[];
export type visualBarT = {
	value: number;
	state: {
		color: string;
	};
};
export type sortActionT = {
	selectedIdx?: number;
	compareIdx?: number;
	swapIdx?: number;
};
export const WHITE = 'white';
const selected = { color: 'grey' };
const swapped = { color: 'pink' };
const compare = { color: 'purple' };
const defaultState = { color: WHITE };

// @@INIT
const initialState: visualArrayT = resetArray(35);

// Async thunk for setTimeout;

export const visualArraySlice = createSlice({
	name: 'visualArray',
	initialState,
	reducers: {
		renderVisualArrayReducer: (state, action: PayloadAction<sortActionT>) => {
			state = state.map((bar, idx) => {
				if (idx === action.payload.selectedIdx) {
					bar = { ...bar, state: selected };
					return bar;
				}
				return bar;
			});

			return state;
		},
		setVisualArrayReducer: (state, action: PayloadAction<visualArrayT>) => {
			return action.payload;
		},
		initialArrayReducer: () => {
			const initialVisualArray = resetArray(35);
			return initialVisualArray;
		},
		reset: () => {
			const resettedVisualArray = resetArray(80);
			return resettedVisualArray;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	reset,
	initialArrayReducer,
	setVisualArrayReducer,
	renderVisualArrayReducer,
} = visualArraySlice.actions;

export default visualArraySlice.reducer;
