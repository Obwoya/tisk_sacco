import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "../Home"
import SignUp from "../SignUp"
import SignIn from "../SignIn"

export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route path="/signup" component={SignUp} />												
						<Route path="/signin" component={SignIn} />
						<Route path="/" component={Home} />
					</Switch>					
				</div>
			</Router>
		)
	}
}
