import { createUseStyles } from "react-jss"
import { Banner, ContainerImg, Content, PremiumRewardsSection } from './style'
import { HeaderHome } from "../../components/HeaderHome";
import { Button } from "../../components/Button";
import PremiumRewards from "../../constants/PremiumRewards";


import bannerImg from '../../assets/img/banner-home.jpg'

//styles to change buttons variations
const useStyles = createUseStyles({
	bgButton: {
		backgroundColor: '#0B0909',
		border: '2px solid #0B0909',
	},
	bgButtonOutlined: {
		backgroundColor: 'transparent',
		border: '2px solid #fff',
	}
})

export const Home = () => {
	const classes = useStyles()

	return (
		<>
			<HeaderHome />
			<main>
				<Banner>
					<Content>
						<h1>R$ 0,00 por 3 meses de Premium</h1>
						<p>Começa hoje a ouvir música sem anúncios e offline grátis até 1 de março de 2023. Cancela quando quiseres.</p>
						<div>
							<Button styleBtn={classes.bgButton}>
								Experimente por 3 meses por R$ 0,00
							</Button>
							<Button styleBtn={classes.bgButtonOutlined}>
								Ver Planos
							</Button>
						</div>
						<small>
							Somente no plano Individual. Depois, é só R$ 19,90/mês. Sujeito a Termos e Condições. Disponível apenas para quem nunca<br /> usou o Premium. A oferta termina em 31/12/2022.
						</small>
					</Content>
					<ContainerImg>
						<img src={bannerImg} alt="banner da home" />
					</ContainerImg>
				</Banner>
				<PremiumRewardsSection>
					<header><h2>Por que ser Premium?</h2></header>
					<div>
						<ul>
							{
								PremiumRewards.map((element) => (
									<li key={element.imageIcon}>
										<img src={element.imageIcon} alt="imagem" />
										<h3>{element.title}</h3>
										<small>{element.subTitle}</small>
									</li>)
								)
							}
						</ul>
					</div>
				</PremiumRewardsSection>
			</main>
		</>
	)
};
