import React from "react"
import "./style.css"

const Button = ({
	children,
	backgroundColor = "#FFFFFF",
	foregroundColor = "#000000",
	raised = false,
	clickAction = () => {},
	clickPayload = {},
	disabled = false
}) => {
	return (
		<button
			disabled={disabled}
			onClick={() => {
				clickAction(clickPayload)
			}}
			className="button"
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
