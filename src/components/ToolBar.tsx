import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { reset } from '../features/visualArray/visualArraySlice';

const ToolBar = () => {
	// Reset array Logic
	const dispatch = useDispatch();
	const handleClick = () => {
		console.log('handleClick');
		dispatch(reset());
	};

	return (
		<StyledToolBar>
			<StyledButton onClick={() => handleClick()}>Reset Array</StyledButton>
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
