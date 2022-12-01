import { Header, Logo } from "./style"
import logo from '../../assets/img/spotify-logo.png'

export const HeaderHome = () => (
	<Header>
		<Logo>
			<img src={logo} alt="logo spotify" />
		</Logo>
	</Header>
)
