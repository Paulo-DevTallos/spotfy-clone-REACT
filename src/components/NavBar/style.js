import styled from "styled-components";

export const NavMenu = styled.ul`
	font-family: 'Circular Spotify Tx T Black', Arial, Helvetica, sans-serif;
	display: flex;
	gap: 2rem;

	li {
		&:nth-child(3) {
			padding-right: 35px;
			border-right: 1px solid #fff;
		}

		&:last-child {
			margin-left: 6px;
		}

		a {
			&:hover, &:active, &:focus {
				color: #1ed760;
			}
		}
	}
`
