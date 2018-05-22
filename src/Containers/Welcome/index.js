import React, { Component } from "react"
import styles from "./style.css"
import { Link, withRouter } from "react-router-dom"
import Button from "../../Components/Button"
class WelcomePage extends Component {
	handleSubmitButton() {
		this.props.history.push("/selectaccount")
	}
	render() {
		return (
			<div className="welcomePageGrid">
				<div className="welcomeGrid">
					<div className="headerGrid" />
					<div className="imageGrid" />
					<div className="welcomeMessage">
						<h2>Welcome</h2>
						<p>The community for techies and by techies</p>
					</div>
					<div className="signUpGroup">
						<Button
							children="SIGN UP"
							backgroundColor={"#b32017"}
							foregroundColor={"#ffffff"}
							raised={true}
							clickAction={this.handleSubmitButton.bind(this)}
						/>
					</div>
					<p className="signInText">
						already have an account? <Link to="/signin"> sign in</Link>
					</p>
					<a
						href="http://www.tisk.co.ke"
						target="blank"
						className="moreInfoText"
					>
						<p>www.tisk.co.ke</p>
					</a>
				</div>
			</div>
		)
	}
}

export default withRouter(WelcomePage)
