import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect, Link, withRouter } from "react-router-dom"

import { getAccountTypes } from "../../Store/Users/selectors"

import "./style.css"

import AccordionComponent from "../../Components/AccountsAccordion"
class SelectAccount extends Component {
	render() {
		return (
			<div className="parent">
				<div className="child">
					<div className="headerGrid" />
					<AccordionComponent accountTypes={this.props.accountTypes} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		accountTypes: getAccountTypes(state.users)
	}
}

const mapDispatchToProps = dispatch => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(
	withRouter(SelectAccount)
)
