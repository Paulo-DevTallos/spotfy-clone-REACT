import { ContainerBtn } from "./style"

import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
	bgButton: {
		backgroundColor: 'red',
	}
})

export const Button = ({ children }) => {
	const classes = useStyles()

	return(
		<ContainerBtn className={classes.bgButton}>
			{ children }
		</ContainerBtn>
	)
}
