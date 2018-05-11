import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { withRouter } from "react-router-dom"

import styles from "./style.css"

import * as processTypes from "../../Store/Shared/processTypes"
import * as userActions from "../../Store/Users/actions"
import * as userSelectors from "../../Store/Users/selectors"

import ProfileBanner from "../../Components/ProfileBanner"
import RecentTransactions from "../../Components/RecentTransactions"
import Button from "../../Components/Button"
class HomePage extends Component {
	constructor(props) {
		super(props)
		this.handleMFSRegistration = this.handleMFSRegistration.bind(this)
	}

	handleMFSRegistration() {
		// this.props.history.push("/welcome")
		this.props.userActions.requestMFSRegistrationCode()
	}

	componentDidMount() {
		let getUser = () => {
			return Promise.resolve(
				this.props.userActions.getUserInformation(this.props.userInformation)
			)
		}
		getUser().then(() => {
			this.props.userActions.getUserDeposits(this.props.userInformation)
		})
		// this.props.userActions.backgroundLogin()
	}

	mfsActicationRequest({ first_name }) {
		return (
			<div className={styles.mfsRegistrationCallToAction}>
				<h3>
					{" "}
					Welcome {first_name}. Your account does not seem to be active. You can
					make transactions by clicking the button below{" "}
				</h3>
				<Button
					children="BEGIN TRANSACTING"
					backgroundColor={"#b32017"}
					foregroundColor={"#ffffff"}
					raised={true}
					clickAction={this.handleMFSRegistration}
				/>
			</div>
		)
	}

	render() {
		// let userInformation = this.props.userInformation
		// let { is_mfs_active } = userInformation.user_member
		let { userInformation, getUserInformationProcess } = this.props
		// let is_mfs_active = userInformation["user_member"]
		// 	? userInformation.user_membe.is_msf_active
		// 	: false
		return (
			<div>
				{getUserInformationProcess.status === processTypes.SUCCESS && (
					<div>
						<ProfileBanner user={userInformation} />
						{this.props.userInformation.user_member.is_msf_active ? (
							<div>
								<div className={styles.contentGrid}>
									<RecentTransactions />
								</div>

								<div className={styles.quickActions}>
									<div>
										<button
											type="submit"
											className={styles.quickActionDeposit}
											onClick={() => {
												this.props.history.push("/deposit/new")
											}}
										>
											<div className={styles.quickActionIcon} />
											<div>Deposit Cash</div>
										</button>
										<button type="submit" className={styles.quickActionLoan}>
											<div className={styles.quickActionIcon} />
											<div>Take Loan</div>
										</button>
									</div>
								</div>
							</div>
						) : (
							<div>{this.mfsActicationRequest(userInformation)}</div>
						)}
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
		userInformation: userSelectors.getUserInformation(state.users),
		userDepoists: userSelectors.getUserDeposits(state.users)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(
	withRouter(HomePage)
)
