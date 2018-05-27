import React, { Component } from "react"

import "./style.css"

class CompanySignupForm extends Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleConfirmPassword = this.handleConfirmPassword.bind(this)
	}

	componentDidMount() {}

	handleChange(event) {
		this.props.handleChange(event)
	}

	handleConfirmPassword(event) {
		this.props.handleConfirmPassword(event)
	}

	render() {
		return (
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
							id="business_email"
							name="business_email"
							placeholder="email"
							onChange={this.handleChange}
						/>
					</div>
					<div className="inputField">
						<input
							type="tel"
							id="business_phone_number"
							name="business_phone_number"
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
							className={!this.props.validConfirmPassword && "inputError"}
						/>
					</div>
				</div>
			</form>
		)
	}
}

export default CompanySignupForm
