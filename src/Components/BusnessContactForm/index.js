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
							placeholder="Business Contact Name"
							onChange={this.handleChange}
						/>
					</div>
					<div className="inputField">
						<input
							type="text"
							id="contact_position"
							name="contact_position"
							placeholder="Position"
							onChange={this.handleChange}
						/>
					</div>
					<div className="inputField">
						<input
							type="email"
							id="contact_email"
							name="contact_email"
							placeholder="Email"
							onChange={this.handleChange}
						/>
					</div>
					<div className="inputField">
						<input
							type="tel"
							id="contact_phone_number"
							name="contact_phone_number"
							placeholder="Phone Number"
							onChange={this.handleChange}
						/>
					</div>
				</div>
			</form>
		)
	}
}

export default BusinessContactSignup
