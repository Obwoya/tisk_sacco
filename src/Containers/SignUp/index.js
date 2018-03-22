import React, { Component } from "react"
import styles from "./style.css"

import Button from "../../Components/Button"
class SignUp extends Component {
	render() {
		return (
			<div className={styles.signUpGrid}>
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
								/>
							</div>
							<div className={styles.inputField}>
								<input
									type="tel"
									id="phoneNumber"
									name="phoneNumber"
									placeholder="phone number"
								/>
							</div>
							<div className={styles.inputField}>
								<input
									type="password"
									id="password"
									name="password"
									placeholder="password"
								/>
							</div>
							<div className={styles.inputField}>
								<input
									type="tel"
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
								// clickAction={this.handleSubmitButton.bind(this)}
							/>
						</div>
					<p className={styles.signInText}>
						already have an account? <a href="#"> sign in</a>
					</p>
				</div>
			</div>
		)
	}
}

export default SignUp
