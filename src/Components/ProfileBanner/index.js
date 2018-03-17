import React from "react"
import styles from "./style.css"

import Avatar from "../Avatar"
import ProfileName from "../ProfileName"

const ProfileBanner = () => {
	return (
		<div className={styles.bannerGrid}>
			<div className={styles.profileGrid}>
				<div className={styles.avatarGrid}>
					<Avatar />
				</div>
				<div className={styles.profileNameGrid}>
					<ProfileName />
				</div>
			</div>
			<div className={styles.accountGrid}>
				<div className={styles.accountInfoGrid}>
					<div>
						<h2 className={styles.accountBalanceText}>15000</h2>
					</div>
					<div>Account balance</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileBanner
