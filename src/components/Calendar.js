import React from 'react';
import styled from 'styled-components';

import useTabs from '../hooks/useTabs.js';
import CalendarBodyMonthly from './CalendarBodyMonthly.js';
import CalendarBodyWeekly from './CalendarBodyWeekly.js';

const Container = styled.div`
width: 100%;
height: calc(100% - ${props => props.header ? props.header : "50px"});
background-color: white;
`;

const Head = styled.div`
width: 100%;
height: ${props => props.height ? props.height : "100px"};
background-color: crimson;
`;

const SButton = styled.button`
width: 200px;
height: 100px;
border: none;
font-size: 1.5rem;
font-weight: 300;
color: #fff;
background-color: #933102;
outline: none;

&:hover {
	background-color: #b35132;
}
`;

const CALENDAR_HEAD_HEIGHT = "100px";

const bodyContext = [
	{
		context: "Monthly",
		body: <CalendarBodyMonthly headHeight={CALENDAR_HEAD_HEIGHT}></CalendarBodyMonthly>
	},
	{
		context: "Weekly",
		body: <CalendarBodyWeekly headHeight={CALENDAR_HEAD_HEIGHT}></CalendarBodyWeekly>
	}
];

const Calendar = (props) => {
	const { currentItem, changeItem } = useTabs(0, bodyContext);
	return (
		<Container header={props.header}>
			<Head height={CALENDAR_HEAD_HEIGHT}>
				{bodyContext.map((item, i) => (
					<SButton key={i} onClick={() => changeItem(i)}>{item.context}</SButton>
				))}
			</Head>
			{currentItem.body}
		</Container>
	);
}

export default Calendar;

