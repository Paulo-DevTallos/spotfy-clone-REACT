import { HeaderHome } from "../../components/HeaderHome";
import { Banner, ContainerImg, Content } from './style'

import bannerImg from '../../assets/img/banner-home.jpg'

export const Home = () => (
	<>
		<HeaderHome />
		<main>
			<Banner>
			<Content>
				ola
			</Content>
			<ContainerImg>
				<img src={bannerImg} alt="banner da home" />
			</ContainerImg>
			</Banner>
		</main>
	</>
);
