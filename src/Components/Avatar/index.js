import React from "react"

import styles from "./style.css"
import defaultAvatar from "./images/defaultAvatar.png"

const Avatar = ({source =defaultAvatar}) => {
	return (
		<div className="avatarGrid">
			<img className="avatarImage" src={source} />			
		</div>
	)
}

export default Avatar
