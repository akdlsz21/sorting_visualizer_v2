import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
	bubbleSortReducer,
	reset,
	setVisualArrayReducer,
} from '../features/visualArray/visualArraySlice';
import { RootState } from '../store';
import bubbleSort from './sorting_logic/bubbleSort';
import mergeSort from './sorting_logic/mergeSort';

const ToolBar = () => {
	// useDispatch for dispatching reducer functions??
	const dispatch = useDispatch();

	// grabbing the state, later will be dispatched
	const visualArrayState = useSelector(
		(state: RootState) => state.visualArray
	);

	// ResetArray dispatch
	const handleResetArray = () => dispatch(reset());
	// BubbleSort Dispatch
	const handleBubbleSort = () => {
		// bubbleSort will return a 2d array,
		// with each array, we call the setVisualArrayReducer to set
		// each state, which will be updated at Sorting.tsx useSelector
		const stateQueue = bubbleSort(visualArrayState);
		let timer = 50;
		stateQueue.forEach((state) => {
			setTimeout(function () {
				dispatch(setVisualArrayReducer(state));
			}, timer);
			timer += 50;
		});
	};

	// *Directly manipulating the address of the store.visualArray will return an error.
	// since redux state is not able to be mutable, we have to copy the address's array and
	// send it to mergeSort
	const handleMergeSort = () => {
		// * mergeSort's argument array will be mutated, since array is the pointer to the store.visualArray.
		// * copy the array first, so address will be different in the function
		const stateQueue = mergeSort(
			[...visualArrayState],
			0,
			visualArrayState.length - 1
		);
		// 도대체 왜 timer를 forEach 코드영역에 넣어놨냐..
		let timer = 300;
		stateQueue.forEach((state) => {
			setTimeout(function () {
				dispatch(setVisualArrayReducer(state));
			}, timer);
			timer += 300;
		});
	};

	return (
		<StyledToolBar>
			<StyledButton onClick={() => handleResetArray()}>
				Reset Array
			</StyledButton>
			<StyledButton onClick={() => handleBubbleSort()}>
				Bubble Sort
			</StyledButton>
			<StyledButton onClick={() => handleMergeSort()}>
				Merge Sort
			</StyledButton>
			{/* <StyledButton onClick={() => handleQuickSort()}>
				Quick Sort
			</StyledButton> */}
		</StyledToolBar>
	);
};

const StyledToolBar = styled.div`
	width: 100%;
	height: 80px;
	background-color: grey;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const StyledButton = styled.button`
	width: 150px;
	height: 30px;
	border-radius: 2px;
`;

export default ToolBar;
