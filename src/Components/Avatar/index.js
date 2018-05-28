import React from "react"

import styles from "./style.css"
import defaultAvatar from "./images/defaultAvatar.png"

const Avatar = ({ source = defaultAvatar }) => {
	return <img className="avatarImage" src={source} />
}

export default Avatar
