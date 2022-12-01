import { NavMenu } from "./style";
import { Link } from "react-router-dom";

export const NavBar = () => (
	<nav>
		<NavMenu>
			<li>
				<Link to="#">Premium</Link>
			</li>
			<li>
				<Link to="#">Suporte</Link>
			</li>
			<li>
				<Link to="#">Baixar</Link>
			</li>
			<li>
				<Link to="#">Inscrever-se</Link>
			</li>
			<li>
			<Link to="#">Entrar</Link>
			</li>
		</NavMenu>
	</nav>
)
