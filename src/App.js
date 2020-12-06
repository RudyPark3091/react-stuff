import React, { useState, useEffect, useRef } from 'react';
import { useInput } from './nomad/useInput';
import { useTabs } from './nomad/useTabs';
import { useClick } from './nomad/useClick';
import './App.css';

const content = [
	{
		tab: "Section 1",
		content: "This is section 1 content"
	},
	{
		tab: "Section 2",
		content: "Section 2 content is little bit different"
	}
];

function App() {
	const validator = (value) => value.length <= 10;
	const name = useInput("Mr.", validator);
	const { currentItem, changeItem } = useTabs(0, content);
	const sayHello = () => console.log("Hello");
	const title = useClick(sayHello);
	
  return (
    <div id="main">
			<h1 ref={title}>Hello</h1>
			<input placeholder="name" {...name} />
			{content.map((section, index) => (
				<button key={index} onClick={() => changeItem(index)}>{section.tab}</button>
			))}
			<div>{currentItem.content}</div>
    </div> 
  );
}

export default App;
