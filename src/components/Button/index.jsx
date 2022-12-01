import { ContainerBtn } from "./style"

export const Button = ({ children, styleBtn }) => {
	return(
		<ContainerBtn className={styleBtn}>
			{ children }
		</ContainerBtn>
	)
}
