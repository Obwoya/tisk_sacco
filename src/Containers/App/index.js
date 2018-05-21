import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import { ConnectedRouter } from "react-router-redux"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import PrivateRoute from "../../Components/PrivateRoute"
import { getAuthStatus } from "../../Store/Users/selectors"
import * as userActions from "../../Store/Users/actions"

import Home from "../Home"
import SignUp from "../SignUp"
import SignIn from "../SignIn"
import Welcome from "../Welcome"
import Deposit from "../Deposit"
import Activate from "../Activate"
import Activities from "../Activities"
import ActivateMFS from "../ActivateMFS"
import RegistrationFees from "../RegistrationFees"
import SelectAcount from "../SelectAccount"

class App extends Component {
	componentDidMount() {
		this.props.userActions.backgroundLogin()
	}

	render() {
		this.props.userActions.backgroundLogin()

		return (
			<ConnectedRouter history={this.props.history}>
				<div>
					<Switch>
						<Route path="/activate" component={Activate} />
						<Route path="/selectAccount" component={SelectAcount} />
						<Route path="/signup" component={SignUp} />

						<Route path="/signin" component={SignIn} />
						<PrivateRoute
							path="/deposit/new"
							component={Deposit}
							isUserAuthenticated={this.props.isUserAuthenticated}
						/>
						<PrivateRoute
							path="/activities"
							component={Activities}
							isUserAuthenticated={this.props.isUserAuthenticated}
						/>
						<PrivateRoute
							path="/mfsactivate"
							component={ActivateMFS}
							isUserAuthenticated={this.props.isUserAuthenticated}
						/>
						<PrivateRoute
							path="/home"
							component={Home}
							isUserAuthenticated={this.props.isUserAuthenticated}
						/>
						<PrivateRoute
							path="/registrationfees"
							component={RegistrationFees}
							isUserAuthenticated={this.props.isUserAuthenticated}
						/>
						<PrivateRoute
							path="/protected"
							component={Home}
							isUserAuthenticated={this.props.isUserAuthenticated}
						/>
						<Route path="/" component={Welcome} />
					</Switch>
				</div>
			</ConnectedRouter>
		)
	}
}

const mapStateToProps = state => {
	return {
		isUserAuthenticated: getAuthStatus(state.users)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
