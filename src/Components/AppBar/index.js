import React from "react"

import  "./style.css"
const AppBar = ({ title = "AppBar", backButtonPressed }) => {
	

	return (
		<header className="	appBar  promoteLayer  paperToolbar  paperShadow">
			<div className="appBarContainer  paperToolbar">
				<button
					className={menu}
					onClick={() => {
						backButtonPressed()
					}}
				>
					<span className={arrowBack}>&#8592;</span>
				</button>
				<h1 className={logo}>{title}</h1>
			</div>
		</header>
	)
}

export default AppBar
