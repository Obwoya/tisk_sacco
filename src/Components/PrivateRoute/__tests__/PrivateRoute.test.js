/* global  it, describe */
import React from "react"
import PrivateRoute from "../index"
import { shallow } from "enzyme"

describe("<Private Route/>", () => {
	it("will not load an unauthenticated route", () => {
		const myRoute = shallow(
			<PrivateRoute
				path="/protected"
				component={PrivateRoute}
				isUserAuthenticated={true}
			/>
        )
        
        // console.log(myRoute.getElement().type.propTypes.render)
	})
})
