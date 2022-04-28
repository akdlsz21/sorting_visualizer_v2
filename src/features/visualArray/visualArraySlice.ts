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
	defaultIdx?: number;
	swapWithOneHigherIdx?: number;
};
export const WHITE = 'white';
const selected = { color: 'grey' };
const swapped = { color: 'pink' };
const compare = { color: 'purple' };
const defaultState = { color: WHITE };

// @@INIT
const initialState: visualArrayT = resetArray(20);

// Async thunk for setTimeout;

export const visualArraySlice = createSlice({
	name: 'visualArray',
	initialState,
	reducers: {
		renderVisualArrayReducer: (state, action: PayloadAction<sortActionT>) => {
			return state.map((bar, idx) => {
				if (idx === action.payload.selectedIdx) {
					bar = { ...bar, state: selected };
					return bar;
				} else if (idx === action.payload.defaultIdx) {
					bar = { ...bar, state: defaultState };
					return bar;
				} else if (idx === action.payload.compareIdx) {
					bar = { ...bar, state: compare };
					return bar;
				} else if (idx === action.payload.swapIdx) {
					bar = { ...bar, state: swapped };
					return bar;
				}
				return bar;
			});
		},
		setVisualArrayReducer: (state, action: PayloadAction<visualArrayT>) => {
			return action.payload;
		},
		initialArrayReducer: () => {
			const initialVisualArray = resetArray(20);
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
