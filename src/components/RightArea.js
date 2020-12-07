import React from 'react';
import styled from 'styled-components';

const RightArea = (props) => {
	const Container = styled.div`
		width: calc(100% - ${props => props.width ? props.width : "500px"});
		height: 100%;
		background-color: papayawhip;

		&:hover {
			background-color: beige;
		}

		@media screen and (max-width: 1000px) {
			& {
				width: 100%;
			}
		}
	`;

	return (
		<Container>
			<div>Hello</div>
		</Container>
	)
}

export default RightArea;
