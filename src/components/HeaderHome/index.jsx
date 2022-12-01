import { Header, Logo } from "./style"
import logo from '../../assets/img/spotify-logo.png'
import { NavBar } from "../NavBar"
import { Link } from "react-router-dom"

export const HeaderHome = () => (
	<Header>
		<Logo>
			<Link to='/'>
				<img src={logo} alt="logo spotify" />
			</Link>
		</Logo>
		<NavBar />
	</Header>
)
