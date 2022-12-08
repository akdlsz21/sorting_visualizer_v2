import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
	bubCompareAndSelectReducer,
	bubCompareReducer,
	reset,
	setLengthToFive,
	setVisualArrayReducer,
} from '../features/visualArray/visualArraySlice';
import { RootState } from '../store';
import bubbleSort from './sorting_logic/bubbleSort';
import mergeSort from './sorting_logic/mergeSort';
import quickSort from './sorting_logic/quickSort';

interface timeoutId {
	id: number;
	idx: number;
}

const ToolBar = () => {
	const [sortSpeed, setSortSpeed] = useState<number>(50);
	const [arrayLength, setArrayLength] = useState<number>(20);
	const [timeoutIds, setTimeoutIds] = useState<timeoutId[]>([]);
	const dispatch = useDispatch();
	const visualArray = useSelector((state: RootState) => state.visualArray);

	useEffect(() => {
		handleResetArray(arrayLength);
	}, [arrayLength]);

	const handleResetArray = (len: number) => dispatch(reset(len));

	const handleBubbleSort = () => {
		const stateQueue = bubbleSort(visualArray);
		let timer = sortSpeed;
		for (let i = 0; i < stateQueue.length; i++) {
			setTimeout(() => {
				dispatch(bubCompareReducer(stateQueue[i]));
			}, timer);
			timer += sortSpeed;
		}
	};

	const handleMergeSort = () => {
		const stateQueue = mergeSort([...visualArray], 0, visualArray.length - 1);
		let timer = sortSpeed;
		for (let i = 0; i < stateQueue.length; i++) {
			const stopNum = setTimeout(() => {
				dispatch(bubCompareReducer(stateQueue[i]));
			}, timer);

			setTimeoutIds([...timeoutIds, { id: stopNum, idx: i }]);
			timer += sortSpeed;
		}
	};

	const handleQuickSort = () => {
		// quickSort has the address of the global state visual Array.
		// copy the array of the global array address and pass it as an argument instead
		// const stateQueue = quickSort([...visualArray], 0, visualArray.length - 1);
		// let timer = sortSpeed;
		// stateQueue.forEach((arr) => {
		// 	setTimeout(() => {
		// 		dispatch(setVisualArrayReducer(arr));
		// 	}, timer);
		// 	timer += sortSpeed;
		// });
	};

	function handleSpeedRange(e: React.ChangeEvent<HTMLInputElement>) {
		setSortSpeed(Number(e.target.value));
	}

	return (
		<StyledToolBar>
			<StyledSliderContainer>
				<input
					type="range"
					min="10"
					max="150"
					step="20"
					value={sortSpeed}
					onChange={(e) => handleSpeedRange(e)}
				/>
				<h3>Speed of sort</h3>
			</StyledSliderContainer>
			<StyledSliderContainer>
				<input
					type="range"
					min="10"
					max="80"
					step="1"
					value={arrayLength}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setArrayLength(Number(e.target.value));
					}}
				/>
				<h3># of Items</h3>
			</StyledSliderContainer>

			<StyledButton onClick={() => handleResetArray(arrayLength)}>
				Reset Array
			</StyledButton>
			<StyledButton onClick={() => handleBubbleSort()}>
				Bubble Sort
			</StyledButton>
			<StyledButton onClick={() => handleMergeSort()}>
				Merge Sort
			</StyledButton>
		</StyledToolBar>
	);
};

const StyledSliderContainer = styled.div`
	position: relative;
	top: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
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
