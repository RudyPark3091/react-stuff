import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: calc(100% - ${props => props.headHeight ? props.headHeight : "100px"});
display: flex;
`;

const WeekDay = styled.div`
width: calc(100% / 7);
margin: 25px;
background-color: #eeeefe;
`;

const CalendarBodyWeekly = (props) => {
	const arr = [
		<WeekDay></WeekDay>,
		<WeekDay></WeekDay>,
		<WeekDay></WeekDay>,
		<WeekDay></WeekDay>,
		<WeekDay></WeekDay>,
		<WeekDay></WeekDay>,
		<WeekDay></WeekDay>
	];
	return (
		<Container>
			{arr.map((v, i) => (
				v
			))}
		</Container>
	);
};

export default CalendarBodyWeekly;

