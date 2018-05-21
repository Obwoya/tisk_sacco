import React from "react"
import {Link} from "react-router-dom"
import styles from "./style.css"

import ActivityList from "../ActivityList"

const RecentTransactions = () => {
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
