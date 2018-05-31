import React, { Component } from "react"
import "./style.css"
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
						<p>Ti4IT</p>
					</div>
					<div className="signUpGroup">
						<Button
							children="Sign Up"
							backgroundColor={"#b32017"}
							foregroundColor={"#ffffff"}
							raised={true}
							clickAction={this.handleSubmitButton.bind(this)}
						/>
					</div>
					<p className="signInText">
						Already have an account? <Link to="/signin"> Sign in</Link>
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
