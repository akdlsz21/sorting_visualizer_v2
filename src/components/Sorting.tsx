import React, { useEffect, useState } from 'react';
import resetArray from './sorting_logic/resetArray';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { initialArrayReducer } from '../features/visualArray/visualArraySlice';
import { useDispatch } from 'react-redux';
import ArrayBar from './ArrayBar';

const Sorting = () => {
	const [initialArray, setInitialArray] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initialArrayReducer());
	}, []);

	// After the useEffect, initialArrayReducer returns an array.
	// visual Array should live at global, not local??

	// for ToolBar handleClick for resetting visual Array.
	// useSelector gets fired everytime resetArray is clicked,
	// returning the new state for the visualArray.
	const returnedArrayFromReducers = useSelector(
		(state: RootState) => state.visualArray
	);

	// useEffect(() => {}, [returnedArrayFromReducers]);

	return (
		<StyledContainer>
			<ArrayContainer>
				{returnedArrayFromReducers.map((val, idx) => {
					return (
						<ArrayBar
							key={idx}
							styleBar={{
								height: val.value,
								backgroundColor: val.state.color,
							}}
						></ArrayBar>
					);
				})}
			</ArrayContainer>
		</StyledContainer>
	);
};

export default Sorting;

const StyledContainer = styled.div`
	width: auto;
	height: 700px;
	background-color: rgba(237, 235, 230);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ArrayContainer = styled.div`
	width: 70%;
	height: 500px;
	background-color: rgba(237, 200, 150, 0.2);
	border-bottom: 1px solid grey;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
`;

// const ArrayBar = styled.div`
// 	/* background-color: pink; */
// 	width: 20px;
// 	border: 1px solid purple;
// `;
