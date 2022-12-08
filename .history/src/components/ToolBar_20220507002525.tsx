import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
	bubCompareAndSelectReducer,
	bubCompareReducer,
	reset,
	setVisualArrayReducer,
} from '../features/visualArray/visualArraySlice';
import { RootState } from '../store';
import bubbleSort from './sorting_logic/bubbleSort';
import mergeSort from './sorting_logic/mergeSort';
import quickSort from './sorting_logic/quickSort';

const ToolBar = () => {
	const [sortSpeed, setSortSpeed] = useState<number>(10);
	// useDispatch for dispatching reducer functions??
	const dispatch = useDispatch();

	// grabbing the state, later will be dispatched
	const visualArray = useSelector((state: RootState) => state.visualArray);

	// ResetArray dispatch
	const handleResetArray = () => dispatch(reset());
	// BubbleSort Dispatch
	const handleBubbleSort = () => {
		const stateQueue = bubbleSort(visualArray);
		console.log(stateQueue.length);
		let timer = sortSpeed;
		for (let i = 0; i < stateQueue.length; i++) {
			setTimeout(() => {
				dispatch(bubCompareReducer(stateQueue[i]));
			}, timer);
			timer += sortSpeed;
		}
	};

	// *Directly manipulating the address of the store.visualArray will return an error.
	const handleMergeSort = () => {
		const stateQueue = mergeSort([...visualArray], 0, visualArray.length - 1);
		console.log(stateQueue.length);
		let timer = sortSpeed;
		for (let i = 0; i < stateQueue.length; i++) {
			setTimeout(() => {
				dispatch(bubCompareReducer(stateQueue[i]));
			}, timer);
			timer += sortSpeed;
		}
	};

	const handleQuickSort = () => {
		// quickSort has the address of the global state visual Array.
		// copy the array of the global array address and pass it as an argument instead
		const stateQueue = quickSort([...visualArray], 0, visualArray.length - 1);
		let timer = sortSpeed;
		stateQueue.forEach((arr) => {
			setTimeout(() => {
				dispatch(setVisualArrayReducer(arr));
			}, timer);
			timer += sortSpeed;
		});
	};

	function handleSpeedRange(e: React.ChangeEvent<HTMLInputElement>) {
		console.log(`sort speed: ${e.target.value}`);
		setSortSpeed(Number(e.target.value));
	}

	return (
		<StyledToolBar>
			<input
				type="range"
				min="10"
				max="500"
				step="20"
				onChange={(e) => handleSpeedRange(e)}
			/>
			<StyledButton onClick={() => handleResetArray()}>
				Reset Array
			</StyledButton>
			<StyledButton onClick={() => handleBubbleSort()}>
				Bubble Sort
			</StyledButton>
			<StyledButton onClick={() => handleMergeSort()}>
				Merge Sort
			</StyledButton>
			<StyledButton onClick={() => handleQuickSort()}>
				Quick Sort
			</StyledButton>
		</StyledToolBar>
	);
};

const StyledSliderContainer = styled.div`
	margin-right: 30px;
`;

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
