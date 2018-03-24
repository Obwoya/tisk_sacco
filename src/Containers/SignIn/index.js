import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Redirect, Link } from "react-router-dom"

import * as userActions from "../../Store/Users/actions"
import * as userSelectors from "../../Store/Users/selectors"

import styles from "./style.css"

import Button from "../../Components/Button"
class SignIn extends Component {
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

		return (
			<div className={styles.signInGrid}>
				<div className={styles.formGrid}>
					<div className={styles.headerGrid} />
					<form className={styles.form}>
						<div className={styles.formGroup}>
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
									type="password"
									id="password"
									name="password"
									placeholder="password"
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</form>
					<div className={styles.formSubmitGroup}>
						<Button
							children="SIGN In"
							backgroundColor={"#b32017"}
							foregroundColor={"#ffffff"}
							raised={true}
							clickAction={this.handleSubmitButton.bind(this)}
						/>
					</div>
					<p className={styles.signUpText}>
						dont have an account? <Link to="/signup"> sign up</Link>
					</p>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		isUserAuthenticated: userSelectors.getAuthStatus(state.users)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
