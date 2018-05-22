import React, { Component } from "react"

import "./style.css"

import AccordionComponent from "../../Components/AccountsAccordion"
class SelectAccount extends Component {
	render() {		
		return (
			<div className="parent">
				<div className="child">
					<div className="headerGrid" />
					<AccordionComponent />
				</div>
			</div>
		)
	}
}

export default SelectAccount
