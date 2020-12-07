import defaultAxios from "axios";
import { useState, useEffect } from 'react';

const useAxios = (opts, axiosInstance = defaultAxios) => {
	const [state, setState] = useState({
		loading: true,
		error: null,
		data: null
	});

	const [trigger, setTrigger] = useState(0);
	const refetch = () => {
		setState({
			...state,
			loading: true
		});
		setTrigger(Date.now());
	}

	useEffect(() => {
		axiosInstance(opts)
			.then(response => {
			setState({
					...state,
					loading: false,
					error: null,
					data: response
				});
			})
			.catch(err => {
				setState({
					...state,
					loading: false,
					error: err,
					data: null
				});
			});
		// console.log(state);
	}, [trigger]);

	if (!opts.url) {
		return;
	}

	return { ...state, refetch };
}

export default useAxios;
