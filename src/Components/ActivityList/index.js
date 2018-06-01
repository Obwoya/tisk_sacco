import React from "react"
import styles from "./style.css"

const ActivityList = ({ activities }) => {
	return (
		<ul className="activityList">
			{activities &&
				activities.map((activity, index) => (
					<li key={index}>
						<div className="activityType">{activity.transactiontype}</div>
						<div className="activityAmount">{activity.amount}</div>
					</li>
				))}
		</ul>
	)
}

export default ActivityList
