import React from "react"
import styles from "./style.css"

const Button = ({
	children,
	backgroundColor = "#FFFFFF",
	foregroundColor = "#000000",
	raised = false,
	clickAction=()=>{},
	clickPayload = {}
}) => {
	return (
		<button
			onClick={ () =>{ clickAction(clickPayload)}}
			className={styles.button}
			style={{
				backgroundColor,
				color: foregroundColor,
				boxShadow: raised ? " 2px 2px 4px rgba(54, 54, 54, 0.4)" : ""
			}}
		>
			{children}
		</button>
	)
}

export default Button
