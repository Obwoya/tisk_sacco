import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { withRouter, Redirect, Link } from "react-router-dom"

import * as userActions from "../../Store/Users/actions"
import * as userSelectors from "../../Store/Users/selectors"

import "./style.css"
import Button from "../../Components/Button"
class SignUp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: {
				email: "",
				password: "",
				first_name: "",
				last_name: "",
				phone_number: "",
				national_id: "",
				confirm_password: "",
				member_type: this.props.selectedAccountType.id
			},
			validConfirmPassword: true,
			formCompleted: false
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleConfirmPassword = this.handleConfirmPassword.bind(this)
	}

	componentDidMount() {
		this.props.userActions.getUserTypes()
	}
	handleSubmitButton() {
		this.props.userActions.individualSignup(this.state.user)
	}

	handleChange(event) {
		let property = this.state.user
		property[event.target.name] = event.target.value
		this.setState({
			...this.state,
			user: property
		})
	}

	handleConfirmPassword(event) {
		if (this.state.user.password !== event.target.value) {
			this.setState({
				...this.state,
				validConfirmPassword: false
			})
		} else {
			let property = this.state.user
			property["confirm_password"] = event.target.value
			this.setState({
				...this.state,
				validConfirmPassword: true,
				user: property
			})
		}
	}

	validateUser(user) {
		let empty_field = Object.keys(user).filter(key => {
			return user[key] === ""
		})

		return empty_field.length === 0
	}

	render() {
		//check if all values have been provided
		const formIsValid = this.validateUser(this.state.user)
		let { selectedAccountType } = this.props
		if (
			Object.keys(selectedAccountType).length === 0 &&
			selectedAccountType.constructor === Object
		) {
			return <Redirect to={"/selectAccount"} />
		}
		return (
			<div className="signUpGrid">
				<div className="formGrid">
					<div className="headerGrid" />
					<div className="accountTypeGrid">
						<h1>{this.props.selectedAccountType.name}</h1>
						<div>
							<Link to="/selectaccount"> change</Link>
						</div>
					</div>
					<form className="form">
						<div className="formGroup">
							<div className="inputField">
								<input
									type="text"
									id="first_name"
									name="first_name"
									placeholder="first name"
									onChange={this.handleChange}
								/>
							</div>
							<div className="inputField">
								<input
									type="text"
									id="lasst_name"
									name="last_name"
									placeholder="last name"
									onChange={this.handleChange}
								/>
							</div>
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
									type="tel"
									id="phoneNumber"
									name="phone_number"
									placeholder="phone number"
									onChange={this.handleChange}
								/>
							</div>
							<div className="inputField">
								<input
									type="number"
									min="10000000"
									id="national_id"
									name="national_id"
									placeholder="national id"
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
							<div className="inputField">
								<input
									type="password"
									id="password"
									name="confirm_password"
									placeholder="confirm password"
									onChange={this.handleConfirmPassword}
									className={!this.state.validConfirmPassword && "inputError"}
								/>
							</div>
						</div>
					</form>
					<div className="formSubmitGroup">
						<Button
							disabled={!formIsValid}
							children={formIsValid ? "SIGNUP" : "Please fill this form"}
							backgroundColor={formIsValid ? "#b32017" : "#dfdfdf"}
							foregroundColor={formIsValid ? "#ffffff" : "#black"}
							raised={true}
							clickAction={this.handleSubmitButton.bind(this)}
						/>
					</div>
					<p className="signInText">
						already have an account? <Link to="/signin"> sign in</Link>
					</p>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		userInformation: userSelectors.getUserInformation(state.users),
		userTypes: userSelectors.getUserTypes(state.users),
		selectedAccountType: userSelectors.getselectedAccountType(state.users)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))
