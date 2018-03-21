import React, { Component } from "react"
import styles from "./style.css"

class WelcomePage extends Component {
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
						<button className={styles.signUpButton}>Sign Up</button>
					</div>
					<p className={styles.signInText}>
						already have an account? <a href="#"> sign in</a>
					</p>
				</div>
			</div>
		)
	}
}

export default WelcomePage
