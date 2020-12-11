/* eslint no-unused-vars: ["off"]*/

import React from 'react';
import styled from 'styled-components';
import LeftArea from './components/LeftArea.js';
import RightArea from './components/RightArea.js';

function App(props) {
	const Container = styled.div`
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	`;

  return (
		<Container>
			<LeftArea width={props.width}></LeftArea>
			<RightArea width={props.width}></RightArea>
		</Container>
  );
}

export default App;
