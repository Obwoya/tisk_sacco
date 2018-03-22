import React from "react"
import styles from "./style.css"

import Avatar from "../Avatar"
import ProfileName from "../ProfileName"

const ProfileBanner = ({ user, accountInformation = { balance: 0 } }) => {
	return (
		<div className={styles.bannerGrid}>
			<div className={styles.profileGrid}>
				<div className={styles.avatarGrid}>
					<Avatar image={user.image} />
				</div>
				<div className={styles.profileNameGrid}>
					<ProfileName name={user.name} />
				</div>
			</div>
			<div className={styles.accountGrid}>
				<div className={styles.accountInfoGrid}>
					<div>
						<h2 className={styles.accountBalanceText}>
							{accountInformation.balance}
						</h2>
					</div>
					<div>Account balance</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileBanner
