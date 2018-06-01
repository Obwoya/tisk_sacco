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
		let { userDeposits } = this.props
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
						activities={userDeposits}
					/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		userDeposits: userSelectors.getUserDeposits(state.users)
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
