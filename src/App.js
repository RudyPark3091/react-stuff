/* eslint no-unused-vars: ["off"]*/

import React from 'react';
import styled from 'styled-components';
import LeftArea from './components/LeftArea.js';
import RightArea from './components/RightArea.js';

function App() {
	const Container = styled.div`
		width: ${props => props.width ? props.width : "100%"};
		height: 700px;
		display: flex;
		justify-content: center;
		align-items: center;
	`;

  return (
		<Container>
			<LeftArea></LeftArea>
			<RightArea></RightArea>
		</Container>
  );
}

export default App;
