import React from 'react';
import styled from 'styled-components';

import Calendar from './Calendar.js';

const RightArea = (props) => {
	const HEADER_HEIGHT = `50px`;

	const Header = styled.div`
		width: 100%;
		height: ${HEADER_HEIGHT};
		background-color: red;
	`;

	const Container = styled.div`
		width: calc(100% - ${props.width ? props.width : "400px"});
		height: 100%;

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
			<Header>Header</Header>
			<Calendar header={HEADER_HEIGHT}></Calendar>
		</Container>
	);
}

export default RightArea;

