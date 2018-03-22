import React, { Component } from "react"
import styles from "./style.css"

import Button from "../../Components/Button"
class signIn extends Component {
	render() {
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
					<p className={styles.signUpText}>
						dont have an account? <a href="#"> sign up</a>
					</p>
				</div>
			</div>
		)
	}
}

export default signIn
