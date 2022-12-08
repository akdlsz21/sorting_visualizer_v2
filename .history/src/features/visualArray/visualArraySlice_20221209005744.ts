import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import setArrayLength from '../../components/sorting_logic/resetArray';
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
const selected = { color: '#B0E817' };
const swapped = { color: 'crimson' };
const compare = { color: 'blue' };
const defaultState = { color: WHITE };

// @@INIT
const initialState: visualArrayT = setArrayLength(20);

// Async thunk for setTimeout;

export const visualArraySlice = createSlice({
	name: 'visualArray',
	initialState,
	reducers: {
		bubCompareReducer: (state, action: PayloadAction<sortActionT>) => {
			const { selectedIdx, compareIdx, defaultIdx, swapIdx } =
				action.payload;
			// if (!isNaN(selectedIdx!)) {
			// 	state[selectedIdx!].state = selected;
			// }
			if (+selectedIdx! >= 0) {
				state[selectedIdx!].state = selected;
			}

			if (+compareIdx! >= 0) {
				state[compareIdx!].state = compare;
			}

			if (+swapIdx! >= 0) {
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
			const initialVisualArray = setArrayLength(20);
			return initialVisualArray;
		},
		reset: (state, action: PayloadAction<number>) => {
			const resettedVisualArray = setArrayLength(action.payload);
			return resettedVisualArray;
		},
		setLengthToFive: () => {
			const resettedVisualArray = setArrayLength(5);
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
