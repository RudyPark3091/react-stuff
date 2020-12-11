import React from 'react';
import styled from 'styled-components';

const CalendarBody = (props) => {
	const CALENDAR_HEAD_HEIGHT = props.headHeight ? props.headHeight : `100px`;

	const Container = styled.div`
		width: 100%;
		height: calc(100% - ${CALENDAR_HEAD_HEIGHT});
		background-color: papayawhip;
		display: grid;
		grid-template-rows: repeat(6, 1fr);
		grid-template-columns: repeat(7, 1fr);
	`;

	return (
	<Container>CalendarBody</Container>
	);
}

export default CalendarBody;
