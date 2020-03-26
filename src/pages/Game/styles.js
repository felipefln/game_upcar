import styled from 'styled-components';

export const Scenery = styled.div`
	position: relative;
	background-image: url(${(props) => props.cartrack});
	background-size: cover;
	background-repeat: no-repeat;
	background-position-y: -40px;
	height: 500px;
	width: 590px;
	margin: auto;
	ddisplay: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 0%;
	margin-left: 15%;
	display: flex;
	justify-content: center;
	align-items: center;

	#countdown {
		font-size: 70px;
		background: -webkit-linear-gradient(#f56117, #f3b93d);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

export const Shortcuts = styled.img`
	position: absolute;
	right: 20px;
	bottom: 20px;
`;
