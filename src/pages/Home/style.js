import styled from "styled-components";

export const Banner = styled.section`
	padding: 20px 90px 0;
	display: flex;
	background-color: #df0c8b;
	color: #fff;
	height: 430px;
`

export const Content = styled.div`
	width: 65%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h1 {
		font-size: 2.5rem;
		letter-spacing: -1px;
		font-weight: 900;
		line-height: 1.2;
		font-family: 'Circular Spotify Tx T Black';
	}

	p {
		line-height: 1.5;
		font-weight: 400;
		font-size: 1.4rem;
		margin: 30px 0;
	}
`

export const ContainerImg = styled.div`
	width: 35%;

	img {
		height: 98%;
		width: 98%;
	}
`
