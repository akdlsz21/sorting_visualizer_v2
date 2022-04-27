import React, { useEffect, useState } from 'react';
import resetArray from './sorting_logic/resetArray';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Sorting = () => {
	const [initialArray, setInitialArray] = useState([1]);

	useEffect(() => {
		setInitialArray(resetArray(100));
	}, []);

	// for ToolBar handleClick for resetting visual Array.
	// useSelector gets fired everytime resetArray is clicked,
	// returning the new state for the visualArray.
	const resettedVisualArray = useSelector(
		(state: RootState) => state.visualArray
	);
	useEffect(() => {
		setInitialArray(resettedVisualArray);
	}, [resettedVisualArray]);

	return (
		<StyledContainer>
			<ArrayContainer>
				{initialArray.map((val, idx) => {
					return <ArrayBar key={idx} style={{ height: val }}></ArrayBar>;
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
	width: 80%;
	height: 500px;
	background-color: rgba(237, 200, 150, 0.2);
	border-bottom: 1px solid grey;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: baseline;
`;

const ArrayBar = styled.div`
	background-color: pink;
	width: 20px;
	border: 1px solid purple;
`;
