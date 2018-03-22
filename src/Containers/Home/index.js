import React, { Component } from "react"

import styles from "./style.css"

import ProfileBanner from "../../Components/ProfileBanner"
import RecentTransactions from "../../Components/RecentTransactions"
class HomePage extends Component {
	render() {
		return (
			<div>
				<ProfileBanner user={{ name:"Evans Munene"}}/>
				<div className={styles.contentGrid}>
					<RecentTransactions />
				</div>

				<div className={styles.quickActions}>
					<div>
						<button
							type="submit"
							className={styles.quickActionDeposit}
						>
							<div className={styles.quickActionIcon} />
							<div >Deposit Cash</div>
						</button>
						<button type="submit" className={styles.quickActionLoan}>
							<div className={styles.quickActionIcon} />
							<div >Take Loan</div>
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default HomePage
