import React, { useRef, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import Loading from './Loading2.js';
import Toggler from './Toggler.js';

const QUERY_ALL_TODOS = gql`
query {
	todos {
		content
	}
}
`

const MainPage = (props) => {
	const ref = useRef();

	return (
		<>
			<Toggler ref={ref}></Toggler>
			<button onClick={() => console.log(ref.current.dataset.toggled)}>is toggled?</button>
		</>
	);
}

export default MainPage;

