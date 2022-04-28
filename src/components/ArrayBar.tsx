import React from 'react';
import styled from 'styled-components';

const ArrayBar = (props: any) => {
	return <StyledBar style={props.styleBar}>{props.styleBar.height}</StyledBar>;
};

const StyledBar = styled.div`
	/* background-color: pink; */
	width: 20px;
	border: 1px solid purple;
`;

export default ArrayBar;
