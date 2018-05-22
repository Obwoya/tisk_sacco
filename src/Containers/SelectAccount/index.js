import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect, Link, withRouter } from "react-router-dom"
import { bindActionCreators } from "redux"

import { getAccountTypes } from "../../Store/Users/selectors"
import * as userActions from "../../Store/Users/actions"

import "./style.css"

import AccordionComponent from "../../Components/AccountsAccordion"
class SelectAccount extends Component {

	selectAccountType(accountType){
		this.props.userActions.setSelectedAccount(accountType)
	}

	render() {
		return (
			<div className="parent">
				<div className="child">
					<div className="headerGrid" />
					<AccordionComponent accountTypes={this.props.accountTypes} registerAction={this.selectAccountType.bind(this)}/>
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
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(
	withRouter(SelectAccount)
)
