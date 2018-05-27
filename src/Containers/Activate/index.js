import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import styles from "./style.css"

import * as userActions from "../../Store/Users/actions"
import * as userSelectors from "../../Store/Users/selectors"

import NumPad from "../../Components/NumberPad"

class Activate extends React.Component {
	constructor(props) {
		super(props)		
	}

	onSubmitHandler = token=> {
		this.props.userActions.activateUser({ token: token.number })
	}
	render() {
		return(
			<NumPad size={6} submitAction={this.onSubmitHandler.bind(this)} title="User Activation Code" description={"An activation code has been send to your email"}/> 
		)
	}
}

const mapStateToProps = state => {
	return {}
}

const mapDispatchToProps = dispatch => {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Activate)
