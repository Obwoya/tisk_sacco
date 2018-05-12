import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { withRouter } from "react-router-dom"

import * as userSelectors from "../../Store/Users/selectors"
import * as userActions from "../../Store/Users/actions"

import AppBar from "../../Components/AppBar"

class Activities extends Component {
	render() {
		return (
			<div>
				<AppBar
					title="Activities page"
					backButtonPressed={() => {
						this.props.history.goBack()
					}}
				/>
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
