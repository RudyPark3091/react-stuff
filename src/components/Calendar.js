import React from 'react';
import styled from 'styled-components';

import CalendarBody from './CalendarBody.js';

const Calendar = (props) => {
	const HEADER_HEIGHT = props.header ? props.header : `50px`;
	const CALENDAR_HEAD_HEIGHT = `100px`;

	const Container = styled.div`
		width: 100%;
		height: calc(100% - ${HEADER_HEIGHT});
		background-color: white;
	`;

	const Head = styled.div`
		width: 100%;
		height: ${CALENDAR_HEAD_HEIGHT};
		background-color: crimson;
	`;

	return (
		<Container>
			<Head>Head</Head>
			<CalendarBody headHeight={CALENDAR_HEAD_HEIGHT}></CalendarBody>
		</Container>
	);
}

export default Calendar;

