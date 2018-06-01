import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Redirect, Link, withRouter } from "react-router-dom"
import { BarLoader } from "react-spinners"

import * as processTypes from "../../Store/Shared/processTypes"
import * as userActions from "../../Store/Users/actions"
import * as userSelectors from "../../Store/Users/selectors"

import styles from "./style.css"

import Button from "../../Components/Button"
import ErrorMessage from "../../Components/ErrorMessage"
export class SignIn extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: {
				email: "",
				password: ""
			}
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleSubmitButton() {
		this.props.userActions.login(this.state.user)
	}

	handleChange(event) {
		let property = this.state.user
		property[event.target.name] = event.target.value
		this.setState({
			...this.state,
			user: property
		})
	}

	render() {
		const { from } = this.props.location.state || {
			from: { pathname: "/home" }
		}

		if (this.props.isUserAuthenticated) {
			return <Redirect to={from.pathname} />
		}

		const { _loginProcess } = this.props
		return (
			<div className="signInGrid">
				<div className="formGrid">
					<div className="headerGrid" />
					{_loginProcess.status === processTypes.PROCESSING ? (
						<div className="ringLoaderGrid">
							<div className="ringLoader">
								<BarLoader color={"#b32017"} loading={true} height={4} />
							</div>
						</div>
					) : (
						<form className="form">
							<div className="formGroup">
								<div className="inputField">
									<input
										type="email"
										id="email"
										name="email"
										placeholder="email"
										onChange={this.handleChange}
									/>
								</div>
								<div className="inputField">
									<input
										type="password"
										id="password"
										name="password"
										placeholder="password"
										onChange={this.handleChange}
									/>
								</div>
								{_loginProcess.status === processTypes.ERROR && (
									<ErrorMessage>{_loginProcess.message}</ErrorMessage>
								)}
							</div>
						</form>
					)}
					<div className="formSubmitGroup">
						<Button
							children="Sign In"
							backgroundColor={"#b32017"}
							foregroundColor={"#ffffff"}
							raised={true}
							clickAction={this.handleSubmitButton.bind(this)}
						/>
					</div>
					<p className="signUpText">
						Don't have an account? <Link to="/selectaccount">Sign Up</Link>
					</p>
					<p className="signUpText">
						Activate account? <Link to="/activate">Activate</Link>
					</p>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		_loginProcess: userSelectors.getLoginProcessStatus(state.users),
		isUserAuthenticated: userSelectors.getAuthStatus(state.users)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn))
