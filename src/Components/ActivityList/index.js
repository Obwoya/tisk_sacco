import React from "react"
import styles from "./style.css"

const ActivityList = ({ activities }) => {
	return (
		<ul className="activityList">
			{activities &&
				activities.map((activity, index) => (
					<li key={index}>
						<div className="activityDate">
							<div>{activity.date.getDate()}</div>
							<div>{activity.date.getMonth()}</div>
						</div>
						<div className="activityType">{activity.type}</div>
						<div className="activityAmount">{activity.amount}</div>
					</li>
				))}
		</ul>
	)
}

export default ActivityList
