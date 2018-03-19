import React from "react"
import styles from "./style.css"

import ActivityList from "../ActivityList"

const RecentTransactions = () => {
	return (
		<div className={styles.cardWrapper}>
			<div className={styles.card}>
				<div className={styles.cardHeading}>
					<div className={styles.title}>Recent activity</div>
					<div className={styles.more}>
						<a href="#">More</a>
					</div>
				</div>
				<div>
					<ActivityList
						activities={[
							{
								date: new Date("July 20, 69 00:20:18"),
								type: "Deposit",
								amount: 3000
							},
							{
								date: new Date("July 20, 69 00:20:18"),
								type: "Deposit",
								amount: 3000
							},
							{
								date: new Date("July 20, 69 00:20:18"),
								type: "Deposit",
								amount: 3000
							},
							{
								date: new Date("July 20, 69 00:20:18"),
								type: "Deposit",
								amount: 3000
							}
						]}
					/>
				</div>
			</div>
		</div>
	)
}

export default RecentTransactions
