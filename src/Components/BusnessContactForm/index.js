import React, { Component } from "react"

import "./style.css"

class BusinessContactSignup extends Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount() {}

	handleChange(event) {
		this.props.handleChange(event)
	}

	render() {
		return (
			<form className="form">
				<div className="formGroup">
					<div className="inputField">
						<input
							type="text"
							id="contact_name"
							name="contact_name"
							placeholder="business contact name"
							onChange={this.handleChange}
						/>
					</div>
					<div className="inputField">
						<input
							type="text"
							id="contact_position"
							name="contact_position"
							placeholder="position"
							onChange={this.handleChange}
						/>
					</div>
					<div className="inputField">
						<input
							type="email"
							id="contact_email"
							name="contact_email"
							placeholder="email"
							onChange={this.handleChange}
						/>
					</div>
					<div className="inputField">
						<input
							type="tel"
							id="contact_phone_number"
							name="contact_phone_number"
							placeholder="phone number"
							onChange={this.handleChange}
						/>
					</div>
				</div>
			</form>
		)
	}
}

export default BusinessContactSignup
