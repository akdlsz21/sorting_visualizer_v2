import React from 'react';
import styled from 'styled-components';

const ToolBar = () => {
	return <StyledToolBar>Header</StyledToolBar>;
};

const StyledToolBar = styled.div`
	width: 100%;
	height: 80px;
	background-color: grey;
`;

export default ToolBar;
