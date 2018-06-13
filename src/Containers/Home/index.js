import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { withRouter } from "react-router-dom"
import { BarLoader } from "react-spinners"

import "./style.css"

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
		if(this.isEmpty(this.props.userEmail)){
			this.props.userActions.getUserEmail()
		}
		let getUser = () => {		
			return Promise.resolve(
				this.props.userActions.getUserInformation({
					email: this.props.userEmail
				})
			)
		}
		getUser().then(() => {
			this.props.userActions.getUserDeposits({email: this.props.userEmail})
		})
		// this.props.userActions.backgroundLogin()
	}

	mfsActicationRequest({ first_name }) {
		return (
			<div className="mfsRegistrationCallToAction">
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
	registratinPaymentRequest({ first_name }) {
		return (
			<div className="mfsRegistrationCallToAction">
				<h3>
					{" "}
					Welcome {first_name}. Complete your account registration by paying the
					registration fees below
				</h3>
				<Button
					children="PAY FEES"
					backgroundColor={"#b32017"}
					foregroundColor={"#ffffff"}
					raised={true}
					// clickAction={this.handleMFSRegistration}
				/>
			</div>
		)
	}
	isEmpty(obj) {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) return false
		}
		return true
	}

	render() {
		// let userInformation = this.props.userInformation
		// let { is_mfs_active } = userInformation.user_member
		let {
			userInformation,
			getUserInformationProcess,
			accountBalance,
			userDepoists
		} = this.props
		// let is_mfs_active = userInformation["user_member"]
		// 	? userInformation.user_membe.is_msf_active
		// 	: false
		return (
			<div>
				{getUserInformationProcess.status === processTypes.SUCCESS ? (
					<div>
						<ProfileBanner
							user={userInformation.member}
							balance={accountBalance}
							accountInformation={{ balance: accountBalance }}
						/>
						{!this.props.userInformation.member.is_registartion_fee_paid ? (
							<div>
								<div className="container contentGrid">
									<div className="row ">
										<div className="container">
											<div className="col-xs-12 col-sm-6 col-md-4 sharesCardContainer">
												<div className="sharesCard">
													<div className="sharesCardHeader">
														<h2 className="sharesCardText">Shares</h2>
													</div>
													<div className="row">
														<div className="sharesCardBody">
															<div className="col-xs-8">
																<h2>No. of shares</h2>
																<p>0 Shares</p>
															</div>
															<div className="col-xs-4">
																<h2>Value</h2>
																<p>0 KSH</p>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-xs-12  col-md-8 col-md-offset-4 ">
															<div className="cardButton">
																<Button
																	children="Buy shares"
																	backgroundColor={"#b32017"}
																	foregroundColor={"#ffffff"}
																	raised={true}
																	// clickAction={this.handleMFSRegistration}
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xs-12 col-sm-6 col-md-4 sharesCardContainer">
												<div className="sharesCard">
													<div className="sharesCardHeader">
														<h2 className="sharesCardText">
															Monthly Contribution
														</h2>
													</div>
													<div className="row">
														<div className="sharesCardBody">
															<div className="col-xs-12">
																<h2>Total contribution</h2>
																<p>0 KSH</p>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-xs-12  col-md-8 col-md-offset-4 ">
															<div className="cardButton">
																<Button
																	children="Pay Dues"
																	backgroundColor={"#b32017"}
																	foregroundColor={"#ffffff"}
																	raised={true}
																	// clickAction={this.handleMFSRegistration}
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="recentTransactionContainer">
										<RecentTransactions activities={userDepoists} />
									</div>
									<div className="quickActions ">
										<div>
											<button
												type="submit"
												className="quickActionDeposit"
												onClick={() => {
													this.props.history.push("/deposit/new")
												}}
											>
												<div className="quickActionIcon" />
												<div>Deposit Cash</div>
											</button>
											<button type="submit" className="quickActionLoan">
												<div className="quickActionIcon" />
												<div>Take Loan</div>
											</button>
										</div>
									</div>
									<div>
										<Button
											children="Log Out"
											backgroundColor={"#b32017"}
											foregroundColor={"#ffffff"}
											raised={true}
											clickAction={() => {
												this.props.userActions.logout()
											}}
										/>
									</div>
								</div>
							</div>
						) : (
							<div className="container">
								{this.registratinPaymentRequest(userInformation.member)}
							</div>
						)}
					</div>
				) : (
					<div className="loadingContainer">
						<div className="loadingGrid">
							<BarLoader color={"#b32017"} loading={true} height={4} />
						</div>
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
		userDepoistsProcess: userSelectors.getUserDepositsProcess(state.users),
		userDepoists: userSelectors.getUserDeposits(state.users),
		userEmail: userSelectors.getUserEmail(state.users),
		accountBalance: userSelectors.getUserAccountBalance(state.users)
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
