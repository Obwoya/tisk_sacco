import React from "react"
import styles from "./style.css"

import Avatar from "../Avatar"
import ProfileName from "../ProfileName"

const ProfileBanner = () => {
	return (
		<div className={styles.bannerGrid}>
			<div className={styles.avatarGrid}>
				<Avatar />
			</div>
			<div className={styles.profileNameGrid}>
				<ProfileName />
			</div>
		</div>
	)
}

export default ProfileBanner
