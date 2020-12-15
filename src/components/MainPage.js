import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Loading from './Loading2.js';
import Modal from './Modal.js';

const QUERY_ALL_TODOS = gql`
query {
	todos {
		content
	}
}
`

const MainPage = (props) => {
	const { loading, error, data } = useQuery(QUERY_ALL_TODOS);

	if (loading) return <Loading></Loading>;
	if (error) return <Modal modalBody={<div>hi</div>}></Modal>;
	
	return (
		<div>{data.todos.map(({ content }, i) => (
			<p key={i}>{content}</p>
		))}</div>
	);
}

export default MainPage;

