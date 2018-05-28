import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { BarLoader } from "react-spinners"
import { bindActionCreators } from "redux"

import * as processTypes from "../../Store/Shared/processTypes"
import {
	getAccountTypes,
	getFetchAccountTypesProcess
} from "../../Store/Users/selectors"
import * as userActions from "../../Store/Users/actions"

import "./style.css"

import AccordionComponent from "../../Components/AccountsAccordion"
class SelectAccount extends Component {
	componentDidMount() {
		this.props.userActions.getAccountTypes()
	}
	selectAccountType(accountType) {
		this.props.userActions.setSelectedAccount(accountType)
	}

	render() {
		let { fetchAccountTypesProcess } = this.props
		let showLoading =
			fetchAccountTypesProcess.status === processTypes.PROCESSING
		let showAccordion = fetchAccountTypesProcess.status === processTypes.SUCCESS
		return (
			<div className="parent">
				<div className="child">
					<div className="headerGrid" />
					{showLoading && (
						<BarLoader color={"#b32017"} loading={true} height={4} />
					)}
					{showAccordion && (
						<div>
							<p className="SAcallToActionText">Please select an account</p>
							<AccordionComponent
								accountTypes={this.props.accountTypes}
								registerAction={this.selectAccountType.bind(this)}
							/>
						</div>
					)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		fetchAccountTypesProcess: getFetchAccountTypesProcess(state.users),
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
