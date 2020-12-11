import React, { useState } from 'react';
import styled from 'styled-components';

import CalendarDay from './CalendarDay';

const Container = styled.div`
width: 100%;
height: calc(100% - ${props => props.headHeight ? props.headHeight : "100px"});
background-color: papayawhip;
display: grid;
grid-template-rows: repeat(6, 1fr);
grid-template-columns: repeat(7, 1fr);
`;

const CalendarBody = (props) => {
	const d = new Date();
	const [date, setDate] = useState(new Date(d.getFullYear(), d.getMonth()));

	const arr = [];
	for (let i = 0; i < 42; i++) {
		arr.push(i);
	}

	return (
		<Container headHeight={props.headHeight}>
			{arr.map((v, i) => {
				if (i%7 === 0 || i%7 === 6)
					return <CalendarDay key={i} off text={i}></CalendarDay>
				else
					return <CalendarDay key={i} text={i}></CalendarDay>
			})}
		</Container>
	);
}

export default CalendarBody;

