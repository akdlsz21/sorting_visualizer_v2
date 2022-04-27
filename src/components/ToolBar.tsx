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
			<button onClick={() => handleClick()}>Reset Array</button>
		</StyledToolBar>
	);
};

const StyledToolBar = styled.div`
	width: 100%;
	height: 80px;
	background-color: grey;
`;

export default ToolBar;
