import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import { bindActionCreators } from "redux"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import { BarLoader } from "react-spinners"

import * as processTypes from "../../Store/Shared/processTypes"
import * as userActions from "../../Store/Users/actions"
import * as userSelectors from "../../Store/Users/selectors"

import ErrorMessage from "../../Components/ErrorMessage"
import Button from "../../Components/Button"

import CompanySignupForm from "../../Components/CompanySignupForm"
import BusinessContactForm from "../../Components/BusnessContactForm"
import "./style.css"

class CompanySignup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			step: 1,
			previousStep: 0,
			business: {
				business_name: "",
				registration_number: "",
				business_email: "",
				business_phone_number: "",
				password: "",
				member_type: this.props.selectedAccountType.id
			},
			busincess_contact: {
				contact_name: "",
				contact_position: "",
				contact_phone_number: "",
				contact_email: ""
			},
			validConfirmPassword: true,
			formCompleted: false
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleConfirmPassword = this.handleConfirmPassword.bind(this)
		this.handleBusinessContactChange = this.handleBusinessContactChange.bind(
			this
		)
	}

	componentDidMount() {}

	handleSubmitButton() {
		// this.props.userActions.signup(this.state.user)
		switch (this.state.step) {
		case 1:
				//move next by increasing the step
			this.setState({
				...this.state,
				previousStep: this.state.step,
				step: this.state.step + 1
			})
			break
		case 2:
			let businessObject = {
				...this.state.busincess_contact,
				...this.state.business
			}
			this.props.userActions.businessSignup(businessObject)
			break
		default:
				//merge properties and submit
			break
		}
	}

	handleBusinessContactChange(event) {
		let property = this.state.busincess_contact
		property[event.target.name] = event.target.value
		this.setState({
			...this.state,
			business_contact: property
		})
	}
	handleChange(event) {
		let property = this.state.business
		property[event.target.name] = event.target.value
		this.setState({
			...this.state,
			business: property
		})
	}

	getForm() {
		switch (this.state.step) {
		case 1:
			return (
					<ReactCSSTransitionGroup
						transitionAppear={true}
						transitionAppearTimeout={600}
						transitionEnterTimeout={600}
						transitionLeaveTimeout={200}
						transitionName={
							this.state.step > this.state.previousStep ? "SlideIn" : "SlideOut"
						}
					>
						<CompanySignupForm
							handleChange={this.handleChange}
							handleConfirmPassword={this.handleConfirmPassword}
							validConfirmPassword={this.state.validConfirmPassword}
						/>
					</ReactCSSTransitionGroup>
			)
		case 2:
			return (
					<ReactCSSTransitionGroup
						transitionAppear={true}
						transitionAppearTimeout={600}
						transitionEnterTimeout={600}
						transitionLeaveTimeout={200}
						transitionName={
							this.state.step > this.state.previousStep ? "SlideIn" : "SlideOut"
						}
					>
						<BusinessContactForm
							handleChange={this.handleBusinessContactChange}
						/>
					</ReactCSSTransitionGroup>
			)
		default:
			return (
					<CompanySignupForm
						handleChange={this.handleChange}
						handleConfirmPassword={this.handleConfirmPassword}
						validConfirmPassword={this.state.validConfirmPassword}
					/>
			)
		}
	}

	handleConfirmPassword(event) {
		if (this.state.business.password !== event.target.value) {
			this.setState({
				...this.state,
				validConfirmPassword: false
			})
		} else {
			let property = this.state.business
			property["confirm_password"] = event.target.value

			this.setState({
				...this.state,
				business: property,
				validConfirmPassword: true
			})
		}
	}

	validateForm(formObject) {
		let empty_field = Object.keys(formObject).filter(key => {
			return formObject[key] === ""
		})

		return empty_field.length === 0
	}

	validateCurrentForm() {
		switch (this.state.step) {
		case 1:
			return this.validateForm(this.state.business)
		case 2:
			return this.validateForm(this.state.busincess_contact)
		}
	}

	render() {
		//check if all values have been provided
		let { signUpProcess } = this.props
		let showProcessing = signUpProcess.status === processTypes.PROCESSING
		const formIsValid = this.validateCurrentForm()
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

					{showProcessing ? (
						<div className="signupRingLoaderGrid">
							<div className="signupRingLoader">
								<p>{signUpProcess.message}</p>
								<BarLoader color={"#b32017"} loading={true} height={4} />
							</div>
						</div>
					) : (
						<div>
							{signUpProcess.status === processTypes.ERROR && (
								<div className="errorMessageGrid">
									<ErrorMessage>{signUpProcess.message}</ErrorMessage>
								</div>
							)}
							{this.getForm()}
						</div>
					)}

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
		signUpProcess: userSelectors.getSignupProcess(state.users),
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
