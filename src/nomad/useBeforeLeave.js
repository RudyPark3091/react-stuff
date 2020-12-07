import { useEffect } from 'react';

export const useBeforeLeave = (onBefore) => {
	const handle = () => {
		if (typeof onBefore === "function") {
			onBefore();
		}
	};
	
	useEffect(() => {
		document.addEventListener("mouseleave", handle);
		return () => {
			document.removeEventListener("mouseleave", handle);
		};
	}, []);
}
