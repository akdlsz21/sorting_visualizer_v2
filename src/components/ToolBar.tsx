import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
	bubbleSortReducer,
	reset,
} from '../features/visualArray/visualArraySlice';
import { RootState } from '../store';

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
	const handleBubbleSort = () => dispatch(bubbleSortReducer());

	return (
		<StyledToolBar>
			<StyledButton onClick={() => handleResetArray()}>
				Reset Array
			</StyledButton>
			<StyledButton onClick={() => handleBubbleSort()}>
				Bubble Sort
			</StyledButton>
			{/* <StyledButton onClick={() => handleMergeSort()}>
				Merge Sort
			</StyledButton>
			<StyledButton onClick={() => handleQuickSort()}>
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
