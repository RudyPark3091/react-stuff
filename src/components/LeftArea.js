import React from 'react';
import styled from 'styled-components';

const LeftArea = (props) => {
	const Container = styled.div`
		width: ${props => props.width ? props.width : "500"}px;
		height: 100%;
		background-color: tomato;

		&:hover {
			background-color: coral;
		}

		@media screen and (max-width: 1000px) {
			& {
				display: none;
			}
		}
	`;

	return (
		<Container>
			{props.children}
		</Container>
	)
}

export default LeftArea;
