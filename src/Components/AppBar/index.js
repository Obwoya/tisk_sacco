import React from "react"

import styles from "./style.css"
const AppBar = ({ title = "AppBar", backButtonPressed }) => {
	let {
		appBar,
		appBarContainer,
		promoteLayer,
		paperToolbar,
		paperShadow,
		menu,
		logo,
		arrowBack
	} = styles

	
	return (
		<header
			className={
				appBar + " " + promoteLayer + " " + paperToolbar + " " + paperShadow
			}
		>
			<div className={appBarContainer + " " + paperToolbar}>
				<button className={menu} onClick={()=>{backButtonPressed()}}>
					<span className={arrowBack}>&#8592;</span>
				</button>
				<h1 className={logo}>{title}</h1>
			</div>
		</header>
	)
}

export default AppBar
