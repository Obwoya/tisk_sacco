import React from "react"
import {Link} from "react-router-dom"
import styles from "./style.css"

import ActivityList from "../ActivityList"

const RecentTransactions = ({activities}) => {
	return (
		<div className="cardWrapper">
			<div className="card">
				<div className="cardHeading">
					<div className="title">Recent activity</div>
					<div className="more">
						<Link to="/activities"> More</Link>						
					</div>
				</div>
				<div>
					<ActivityList
						activities={activities}
					/>
				</div>
			</div>
		</div>
	)
}

export default RecentTransactions
