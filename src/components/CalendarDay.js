import React from 'react';
import styled from 'styled-components';

const CalendarDay = (props) => {
	const Day = styled.div`
	padding: 10px;
	background-color: ${props.off ? "#d5d5d5" : "white"};
	color: #959595;
	font-size: 20px;
	font-weight: 300;

	&:hover {
		background-color: #e5e5e5;
	}
	`;

	return (
		<>
			<Day>{props.text}</Day>
		</>
	)
}

export default CalendarDay;

