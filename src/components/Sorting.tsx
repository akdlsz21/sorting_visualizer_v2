import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Sorting = () => {
	return (
		<StyledContainer>
			<ArrayContainer></ArrayContainer>
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
`;
