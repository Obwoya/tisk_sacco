import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { withRouter } from "react-router-dom"

import * as userSelectors from "../../Store/Users/selectors"
import * as userActions from "../../Store/Users/actions"

import AppBar from "../../Components/AppBar"
import ActivityList from "../../Components/ActivityList"
import HeadRoom from "react-headroom"

class Activities extends Component {
	render() {
		return (
			<div>
				<HeadRoom>
					<AppBar
						title="Recent Activities"
						backButtonPressed={() => {
							this.props.history.goBack()
						}}
					/>					
				</HeadRoom>
				<div>
					<ActivityList
						activities={[
							{
								date: new Date("July 14, 69 00:20:18"),
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
		)
	}
}

const mapStateToProps = state => {
	return {
		userDepoists: userSelectors.getUserDeposits(state.users)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(
	withRouter(Activities)
)
