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
					<p>1. Launch Safaricom Sim Toolkit</p>
					<p>2. Select "Lipa Na M-PESA" option</p>
					<p>3. Select "Pay Bill"</p>
					<p>4. Select "Enter Business No."</p>
					<p>5. Enter 606172 and Press "OK"</p>
					<p>6. Select "Enter Account No."</p>
					<p>7. Enter your Phone Number and Press "OK"</p>
					<p>8. Enter Deposit Amount and Press "OK"</p>
					<p>9. Enter your M-PESA PIN and press “OK”</p>
					<p>
						10. Confirm all the details are correct then press “OK” and wait for
						a confirmation SMS from M-PESA.
					</p>
				</div>
			</div>
		)
	}
}

export default withRouter(Deposit)
