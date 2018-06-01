import React from "react"
import { withRouter } from "react-router-dom"
import styles from "./style.css"
import { Link } from "react-router-dom"

class Deposit extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			depositAmount: "0"
		}
	}

	putNumber = number => {
		if (isNaN(number)) {
			return
		}

		let value = this.state.depositAmount
		if (value == 0 || value == "0") value = number
		else value = value + "" + number
		this.setState({ depositAmount: value })
	}

	deleteFromBack = () => {
		let value = this.state.depositAmount
		if (value.length < 2) value = "0"
		else {
			value = value.slice(0, -1)
		}
		this.setState({ depositAmount: value })
	}

	render() {
		return (
			<div className="depositPage">
				<div className="topBar">
					<Link to="/home">
						<span className="arrowBack">&#8592;</span>
					</Link>
					Deposit savings
				</div>
				<div className="pageContent">
					<h2>LIPA NA MPESA INSTRUCTIONS</h2>
					<p>1. Launch Sim Toolkit</p>
					<p>2. Select Lipa ma M-PESA option</p>
					<p>3. SELECT Pay Bill option</p>
					<p>4. SELECT Enter business no.</p>
					<p>5. Enter 606172</p>
					<p>6. SELECT Enter Account no.</p>
					<p>7. Enter your phone number</p>
					<p>8. Enter Deposit amount</p>
					<p>9. Enter your M-PESA pin and await confirmation message</p>
				</div>
			</div>
		)
	}
}

export default withRouter(Deposit)
