import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import { bindActionCreators } from "redux"

import { getAccountTypes } from "../../Store/Users/selectors"
import * as userActions from "../../Store/Users/actions"
import * as userSelectors from "../../Store/Users/selectors"

import "./style.css"
import Button from "../../Components/Button"

class CompanySignup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			business: {
				business_name: "",
				registration_number: "",
				email: "",
				phone_number: "",
				password: "",
			},
			busincess_contact:{

				contact_person_name: "",
				contact_person_position: "",
				contact_person_phone_number: "",
				contact_person_email: ""
			},
			validConfirmPassword: true,
			formCompleted: false
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleConfirmPassword = this.handleConfirmPassword.bind(this)
	}

	componentDidMount() {}
	handleSubmitButton() {
		// this.props.userActions.signup(this.state.user)
	}

	handleChange(event) {
		let property = this.state.business
		property[event.target.name] = event.target.value
		this.setState({
			...this.state,
			business: property
		})
	}

	handleConfirmPassword(event) {
		if (this.state.business.password !== event.target.value) {
			this.setState({
				...this.state,
				validConfirmPassword: false
			})
		} else {
			this.setState({
				...this.state,
				validConfirmPassword: true
			})
		}
	}

	validateForm(business) {
		let empty_field = Object.keys(business).filter(key => {
			return business[key] === ""
		})

		return empty_field.length === 0
	}

	render() {
		//check if all values have been provided
		const formIsValid = this.validateForm(this.state.business)
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
									id="business_name"
									name="business_name"
									placeholder="business name"
									onChange={this.handleChange}
								/>
							</div>
							<div className="inputField">
								<input
									type="text"
									id="registration_number"
									name="registration_number"
									placeholder="registration number"
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
									name="confirmPassword"
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
		accountTypes: getAccountTypes(state.users),
		selectedAccountType: userSelectors.getselectedAccountType(state.users)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(
	withRouter(CompanySignup)
)
