import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "../Home"
import SignUp from "../SignUp"
import SignIn from "../SignIn"
import Welcome from "../Welcome"

export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route path="/signup" component={SignUp} />												
						<Route path="/signin" component={SignIn} />
						<Route path="/home" component={Home} />
						<Route path="/" component={Welcome} />
					</Switch>					
				</div>
			</Router>
		)
	}
}
