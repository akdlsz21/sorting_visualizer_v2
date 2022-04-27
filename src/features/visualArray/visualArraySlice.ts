import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import resetArray from '../../components/sorting_logic/resetArray';
import bubbleSort from '../../components/sorting_logic/bubbleSort';

export type visualArray = number[];

const initialState: visualArray = resetArray(100);

export const visualArraySlice = createSlice({
	name: 'visualArray',
	initialState,
	reducers: {
		reset: () => {
			console.log('visualArraySlice Reset');
			const currentState = resetArray(100);
			return currentState;
		},
		bubbleSortReducer: (state) => {
			// Cant manage to update visualSorting state.
			console.log(`BubbleSortReducer clicked\nstate: ${state}`);
			let stateQueue = bubbleSort(state);
			state = stateQueue[stateQueue.length - 1];
			let timer = 50;
			stateQueue.forEach((arr) => {
				setTimeout(() => {
					console.log('yes');
					state = [...arr];
					return state;
				}, timer);
				timer += 50;
			});

			console.log(`new state: ${state}`);
			return state;
		},
		// incrementByAmount: (state, action: PayloadAction<number>) => {
		// 	state.value += action.payload;
		// },
	},
});

// Action creators are generated for each case reducer function
export const { reset, bubbleSortReducer } = visualArraySlice.actions;

export default visualArraySlice.reducer;
