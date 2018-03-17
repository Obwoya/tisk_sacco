import React from "react"

import styles from "./style.css"
import defaultAvatar from "./images/defaultAvatar.png"

const Avatar = ({source =defaultAvatar}) => {
	return (
		<div className={styles.avatarGrid}>
			<img className={styles.avatarImage} src={source} />			
		</div>
	)
}

export default Avatar
