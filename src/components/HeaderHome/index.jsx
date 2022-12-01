import { Header, Logo } from "./style"
import logo from '../../assets/img/spotify-logo.png'
import { NavBar } from "../NavBar"

export const HeaderHome = () => (
	<Header>
		<Logo>
			<img src={logo} alt="logo spotify" />
		</Logo>
		<NavBar />
	</Header>
)
