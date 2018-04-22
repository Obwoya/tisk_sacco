/* global  it, describe, expect */
import React from "react"
import { shallow } from "enzyme"
import RegistrationFees from "../index"
// import { Route } from "react-router-dom"

describe("<RegistrationFees/>", () => {
	it("Has the withRouter HOC function ", function() {
		const RegistrationFeesPage = shallow(<RegistrationFees />)				
		expect( typeof( RegistrationFeesPage.getElement().type)).toEqual("function")
		// expect( RegistrationFeesPage.getElement().type).toEqual(
		// 	[Function Route]
		// )
	})
})
