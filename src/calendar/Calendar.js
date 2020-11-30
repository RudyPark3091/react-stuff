import React, { useState } from 'react';
import './Calendar.css';

function Calendar() {
	const [count, setCount] = useState(0);

  return (
    <div className="hello">
			<button onClick={() => setCount(count + 1)}>{count}</button>
			<button onClick={() => setCount(0)}></button>
    </div>
  )
}

export default Calendar;
