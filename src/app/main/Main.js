import styled from 'styled-components';

export const Main = styled.main`
	@keyframes complete-fade-in {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	animation: 
		complete-fade-in 
		${props => props.fadeInTime ? props.fadeInTime : '800ms'};

	display: flex;
	width: 100%;

	padding-bottom: 40vh;
`;
