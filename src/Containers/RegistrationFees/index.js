import React, { Component } from "react"
import styles from "./style.css"
import { Link, withRouter } from "react-router-dom"
import Button from "../../Components/Button"
class RegistrationFeesPage extends Component {
	handleSubmitButton() {
		// this.props.history.push("/signup")
	}
	render() {
		return (
			<div className={styles.welcomePageGrid}>
				<div className={styles.welcomeGrid}>
					<div className={styles.headerGrid} />

					<div className={styles.welcomeMessage}>
						<h2>Registration Fees</h2>
						<p>Complete the registration by paying the registrion fee</p>
					</div>
					<div className={styles.signUpGroup}>
						<Button
							children="PAY FEES"
							backgroundColor={"#b32017"}
							foregroundColor={"#ffffff"}
							raised={true}
							// clickAction={this.handleSubmitButton.bind(this)}
						/>
					</div>
					<p className={styles.signInText}>
						not registered? <Link to="/signup"> sign up</Link>
					</p>
					<p className={styles.signInText}>
						<Link to="/">Home</Link>
					</p>
				</div>
			</div>
		)
	}
}

export default withRouter(RegistrationFeesPage)
