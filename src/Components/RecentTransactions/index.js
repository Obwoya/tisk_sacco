import React from "react"
import styles from "./style.css"

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
					<ul className={styles.activityList}>
						<li>
							<div className={styles.activityDate}>
								<div>Jan</div>
								<div>12</div>
							</div>
							<div className={styles.activityType}>Deposit</div>
							<div className={styles.activityAmount}>1,000</div>
						</li>
						<li>
							<div className={styles.activityDate}>
								<div>Jan</div>
								<div>12</div>
							</div>
							<div className={styles.activityType}>Deposit</div>
							<div className={styles.activityAmount}>1,000</div>
						</li>
						<li>
							<div className={styles.activityDate}>
								<div>Jan</div>
								<div>12</div>
							</div>
							<div className={styles.activityType}>Deposit</div>
							<div className={styles.activityAmount}>1,000</div>
						</li>
						<li>
							<div className={styles.activityDate}>
								<div>Jan</div>
								<div>12</div>
							</div>
							<div className={styles.activityType}>Deposit</div>
							<div className={styles.activityAmount}>1,000</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default RecentTransactions
