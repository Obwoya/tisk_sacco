import React from "react"
import "./style.css"

import Avatar from "../Avatar"
import ProfileName from "../ProfileName"

const ProfileBanner = ({ user, accountInformation = { balance: 0 } }) => {
	return (
		<div className="bannerGrid">
			<div className="profileGrid">
				<div className="container-fluid">
					<div className="row">						
						<div className="col-xs-12 col-log-10 profileContainer">
							<ProfileName name={user.first_name + " " + user.last_name} />
						</div>
					</div>
				</div>
			</div>
			<div className="accountGrid">
				<div className="accountInfoGrid">
					<div>
						<h2 className="accountBalanceText">{accountInformation.balance}</h2>
					</div>
					<div>RAM Account</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileBanner
