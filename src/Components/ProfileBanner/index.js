import React from "react"
import styles from "./style.css"

import Avatar from "../Avatar"
import ProfileName from "../ProfileName"

const ProfileBanner = ({ user, accountInformation = { balance: 0 } }) => {
	return (
		<div className="bannerGrid">
			<div className="profileGrid">
				<div className="avatarGrid">
					<Avatar image="image" />
				</div>
				<div className="profileNameGrid">
					<ProfileName name={user.first_name + " " + user.last_name} />
				</div>
			</div>
			<div className="accountGrid">
				<div className="accountInfoGrid">
					<div>
						<h2 className="accountBalanceText">
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
