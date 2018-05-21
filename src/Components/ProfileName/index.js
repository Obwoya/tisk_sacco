import React from "react"

import styles from "./style.css"

const ProfileName = ({name="Profile Name"}) => {
	return (
		<div>
			<h2 className="nameHeader" >{name}</h2>
		</div>
	)
}

export default ProfileName
