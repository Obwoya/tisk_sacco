import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Link, withRouter } from "react-router-dom"

import styles from "./style.css"

import * as processTypes from "../../Store/Shared/processTypes"
import * as userActions from "../../Store/Users/actions"
import * as userSelectors from "../../Store/Users/selectors"

import Button from "../../Components/Button"
class RegistrationFeesPage extends Component {
	componentDidMount() {
		this.props.userActions.getUserInformation(this.props.userInformation)
	}
	handleSubmitButton() {
		// this.props.history.push("/signup")
	}
	render() {
		let { userInformation, getUserInformationProcess } = this.props

		return (
			<div className="welcomePageGrid">
				{getUserInformationProcess.status === processTypes.SUCCESS && (
					<div className="welcomeGrid">
						<div className="headerGrid" />

						<div className="welcomeMessage">
							<h2>Registration Fees</h2>
							<p>Complete the registration by paying the registrion fee</p>
						</div>
						<div className="signUpGroup">
							<Button
								children={
									"PAY " +
									userInformation.user_member.member_type.registration_fee
								}
								backgroundColor={"#b32017"}
								foregroundColor={"#ffffff"}
								raised={true}
								// clickAction={this.handleSubmitButton.bind(this)}
							/>
						</div>
						<p className="signInText">
							not registered? <Link to="/signup"> sign up</Link>
						</p>
						<p className="signInText">
							<Link to="/">Home</Link>
						</p>
					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		getUserInformationProcess: userSelectors.getUserInformationStatus(
			state.users
		),
		userInformation: userSelectors.getUserInformation(state.users)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(
	withRouter(RegistrationFeesPage)
)
