import React, { Component } from "react"

import styles  from "./style.css"

import ProfileBanner from "../../Components/ProfileBanner"
import RecentTransactions from "../../Components/RecentTransactions"
class HomePage extends Component {
	render() {
		return (
			<div>
				<ProfileBanner/>
				<div className={styles.contentGrid}>
					<RecentTransactions/>
				</div>
			</div>
		)
	}
}

export default HomePage
