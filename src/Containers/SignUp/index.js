import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Link } from "react-router-dom"

import { withRouter } from "react-router-dom"

import * as userActions from "../../Store/Users/actions"
import * as userSelectors from "../../Store/Users/selectors"

import styles from "./style.css"
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
				phone_number: ""
			}
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleSubmitButton() {
		this.props.userActions.signup(this.state.user)
		this.props.history.push("/home")
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
		return (
			<div className={styles.signUpGrid}>
				<div className={styles.formGrid}>
					<div className={styles.headerGrid} />
					<form className={styles.form}>
						<div className={styles.formGroup}>
							<div className={styles.inputField}>
								<input
									type="text"
									id="first_name"
									name="first_name"
									placeholder="first name"
									onChange={this.handleChange}
								/>
							</div>
							<div className={styles.inputField}>
								<input
									type="text"
									id="lasst_name"
									name="last_name"
									placeholder="last name"
									onChange={this.handleChange}
								/>
							</div>
							<div className={styles.inputField}>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="email"
									onChange={this.handleChange}
								/>
							</div>
							<div className={styles.inputField}>
								<input
									type="tel"
									id="phoneNumber"
									name="phone_number"
									placeholder="phone number"
									onChange={this.handleChange}
								/>
							</div>
							<div className={styles.inputField}>
								<input
									type="number"
									id="national_id"
									name="national_id"
									placeholder="national id"
									onChange={this.handleChange}
								/>
							</div>
							<div className={styles.inputField}>
								<input
									type="password"
									id="password"
									name="password"
									placeholder="password"
									onChange={this.handleChange}
								/>
							</div>
							<div className={styles.inputField}>
								<input
									type="password"
									id="password"
									name="confirmPassword"
									placeholder="confirm password"
								/>
							</div>
						</div>
					</form>
					<div className={styles.formSubmitGroup}>
						<Button
							children="SIGN UP"
							backgroundColor={"#b32017"}
							foregroundColor={"#ffffff"}
							raised={true}
							clickAction={this.handleSubmitButton.bind(this)}
						/>
					</div>
					<p className={styles.signInText}>
						already have an account? <Link to="/signin"> sign in</Link>
					</p>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		userInformation: userSelectors.getUserInformation(state.users)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp))
