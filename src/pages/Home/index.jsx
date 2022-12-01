import { HeaderHome } from "../../components/HeaderHome";
import { Banner, ContainerImg, Content } from './style'

import bannerImg from '../../assets/img/banner-home.jpg'
import { Button } from "../../components/Button";

export const Home = () => {
	return(
		<>
			<HeaderHome />
			<main>
				<Banner>
					<Content>
						<h1>R$ 0,00 por 3 meses de Premium</h1>
						<p>Começa hoje a ouvir música sem anúncios e offline grátis até 1 de março de 2023. Cancela quando quiseres.</p>
						<div>
							<Button>
								Experimente por 3 meses por R$ 0,00
							</Button>
							<Button>
								Ver Planos
							</Button>
						</div>
						<small>
						Somente no plano Individual. Depois, é só R$ 19,90/mês. Sujeito a Termos e Condições. Disponível apenas para quem nunca usou o Premium. A oferta termina em 31/12/2022.
						</small>
					</Content>
					<ContainerImg>
						<img src={bannerImg} alt="banner da home" />
					</ContainerImg>
				</Banner>
			</main>
		</>
	)
};
