import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
const selected = { color: 'green' };
const swapped = { color: 'crimson' };
const compare = { color: 'blue' };
const defaultState = { color: WHITE };

// @@INIT
const initialState: visualArrayT = resetArray(200);

// Async thunk for setTimeout;

export const visualArraySlice = createSlice({
	name: 'visualArray',
	initialState,
	reducers: {
		bubCompareReducer: (state, action: PayloadAction<sortActionT>) => {
			const { selectedIdx, compareIdx, defaultIdx, swapIdx } =
				action.payload;
			if (!isNaN(selectedIdx!)) {
				state[selectedIdx!].state = selected;
			}

			if (!isNaN(compareIdx!)) {
				state[compareIdx!].state = compare;
			}

			if (!isNaN(swapIdx!)) {
				let temp = { ...state[selectedIdx!] };
				state[selectedIdx!] = state[swapIdx!];
				state[selectedIdx!].state = swapped;
				state[swapIdx!] = temp;
			}

			if (defaultIdx! >= 0) {
				state[defaultIdx!].state = defaultState;
			}

			console.log('@@@', action.payload);
		},
		bubCompareAndSelectReducer: (
			state,
			action: PayloadAction<sortActionT>
		) => {
			state[action.payload.compareIdx!].state = compare;
		},
		setVisualArrayReducer: (state, action: PayloadAction<visualArrayT>) => {
			return action.payload;
		},
		initialArrayReducer: () => {
			const initialVisualArray = resetArray(20);
			return initialVisualArray;
		},
		reset: (state, action: PayloadAction<number>) => {
			const resettedVisualArray = resetArray(action.payload);
			return resettedVisualArray;
		},
		setLengthToFive: () => {
			const resettedVisualArray = resetArray(5);
			return resettedVisualArray;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	reset,
	initialArrayReducer,
	setVisualArrayReducer,
	bubCompareReducer,
	bubCompareAndSelectReducer,
	setLengthToFive,
} = visualArraySlice.actions;

export default visualArraySlice.reducer;
