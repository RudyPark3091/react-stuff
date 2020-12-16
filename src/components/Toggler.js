import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 55px;
height: 30px;
background-color: #d5d5d5;
border-radius: 50px;
display: flex;
align-items: center;
`;

const Head = styled.div`
width: 24px;
height: 24px;
background-color: #ffffff;
margin-left: 3px;
border-radius: 50%;
transition: transform 0.1s ease-in-out;
`;

const Toggler = React.forwardRef((props, ref) => {
	const [isToggled, setIsToggled] = useState(false);
	const head = useRef();

	const handleClick = (e) => {
		if (!isToggled) {
			head.current.style.transform = "translateX(25px)";
			ref.current.style.backgroundColor = "#68f94b";
			setIsToggled(true);
		} else {
			head.current.style.transform = "translateX(0px)";
			ref.current.style.backgroundColor = "#d5d5d5";
			setIsToggled(false);
		}
	}

	useEffect(() => {
		ref.current.addEventListener("click", handleClick);
		return () => {
			ref.current.removeEventListener("click", handleClick);
		}
	})

	return (
		<Wrapper ref={ref} data-toggled={isToggled}>
			<Head ref={head}></Head>
		</Wrapper>
	);
});

export default Toggler;

