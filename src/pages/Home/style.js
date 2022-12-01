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

	> div {
		margin-bottom: 30px;
	}

	small {
		font-size: 10px;
		line-height: 1.8;
		font-weight: 500;
	}
`

export const ContainerImg = styled.div`
	width: 35%;

	img {
		height: 98%;
		width: 98%;
	}
`

export const PremiumRewardsSection = styled.section`
	font-family: 'Circular Spotify Tx T Black';
	text-align: center;
	padding: 5rem 80px;

	h2{
		font-size: 2.5rem;
		margin-bottom: 15px;
	}

	span {
		font-family: gothem, Arial, Helvetica, sans-serif;
		font-weight: 600;
		letter-spacing: 1px;
	}

	ul{
		display: flex;
		justify-content: center;
		margin-top: 3.5rem;

		li{
			width: 25%;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;

			img{
				width: 142px;
				height: 142px;
			}

			h3{
				margin-top: 3rem;
				font-size: 21px;
			}

			small{
				margin-top: 1rem;
				font-family: gothem, Arial, Helvetica, sans-serif;
				font-size: 16px;
				padding: 0 70px;
			}
		}
	}
`

export const TitleArtist = styled.h3`
	font-weight: 100;
	font-family: gothem, Arial, Helvetica, sans-serif;
`
