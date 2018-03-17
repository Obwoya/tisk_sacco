import React from "react"
import styles from  "./style.css"


import Avatar from "../Avatar"


const Banner = () => {
	return (
		<div className={styles.bannerGrid}>
			<Avatar/>
			<h1>Banner</h1>
		</div>
	)
}

export default Banner
