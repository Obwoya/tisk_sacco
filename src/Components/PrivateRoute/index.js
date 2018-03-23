import React from "react"
import {
	Route,
	Redirect
} from "react-router-dom"

const PrivateRoute = ({
	component: Component,
	isUserAuthenticated = false,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={props =>
				isUserAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/signin",
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	)
}
export default PrivateRoute
