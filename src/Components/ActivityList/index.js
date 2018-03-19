import React from "react"
import styles from "./style.css"

const ActivityList = ({ activities }) => {
	return (
		<ul className={styles.activityList}>
			{activities &&
				activities.map((activity, index) => (
					<li key={index}>
						<div className={styles.activityDate}>
							<div>{activity.date.getDate()}</div>
							<div>{activity.date.getMonth()}</div>
						</div>
						<div className={styles.activityType}>{activity.type}</div>
						<div className={styles.activityAmount}>{activity.amount}</div>
					</li>
				))}
		</ul>
	)
}

export default ActivityList
