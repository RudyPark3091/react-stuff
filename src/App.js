/* eslint no-unused-vars: ["off"]*/

import React, { useState, useEffect, useRef } from 'react';
import { useInput } from './nomad/useInput';
import { useTabs } from './nomad/useTabs';
import { useClick } from './nomad/useClick';
import { useConfirm } from './nomad/useConfirm';
import { useBeforeLeave } from './nomad/useBeforeLeave';
import { useFadeIn } from './nomad/useFadeIn';
import { useScroll } from './nomad/useScroll';
import { useFullScreen } from './nomad/useFullScreen';
import { useNotification } from './nomad/useNotification';
import useAxios from './nomad/useAxios';

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

	const deleteFunc = () => console.log("delete completed");
	const abortFunc = () => console.log("aborting");
	const confirmDelete = useConfirm("Delete?", deleteFunc, abortFunc);

	const dontLeave = () => console.log("don't leave");
	useBeforeLeave(dontLeave);

	const fadeIn = useFadeIn(3);
	const { y } = useScroll();

	const { element, triggerFullScreen, exitFullScreen } = useFullScreen();

	const triggerNotification = useNotification("hello");

	const { refetch, data, loading, ...state } = useAxios({ url: "https://jsonplaceholder.typicode.com/users/1" });
	console.log(state);
	
  return (
    <div id="main" style={{ height: "500vh" }}>
			<div {...fadeIn}>
				<h1 ref={title} style={{ position: "fixed", color: y > 300? "red" : "blue"}}>Hello</h1>
				<button onClick={confirmDelete}>Delete</button>
				<input placeholder="name" {...name} />
				{content.map((section, index) => (
					<button key={index} onClick={() => changeItem(index)}>{section.tab}</button>
				))}
				<div>{currentItem.content}</div>
				<div ref={element}>
					<img 
						src="https://images.unsplash.com/photo-1607283894277-e86fb9a5a2b8?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
					/>
					<button onClick={exitFullScreen}>Exit</button>
				</div>
				<button onClick={triggerFullScreen}>FullScreen</button>
				<button onClick={triggerNotification}>Notification</button>
				<button onClick={refetch}>Refetch Data</button>
				<h2>{data && data.status}</h2>
				<h2>{loading && "Loading..."}</h2>
			</div>
    </div> 
  );
}

export default App;
