import React, { Component } from "react"
import styles from "./style.css"
import { Link, withRouter } from "react-router-dom"
import Button from "../../Components/Button"
class WelcomePage extends Component {
	handleSubmitButton() {
		this.props.history.push("/signup")
	}
	render() {
		return (
			<div className={styles.welcomePageGrid}>
				<div className={styles.welcomeGrid}>
					<div className={styles.headerGrid} />
					<div className={styles.imageGrid} />
					<div className={styles.welcomeMessage}>
						<h2>Welcome</h2>
						<p>The community for techies and by techies</p>
					</div>
					<div className={styles.signUpGroup}>
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

export default withRouter(WelcomePage)
