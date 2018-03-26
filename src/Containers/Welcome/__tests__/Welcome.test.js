/* global  it, describe, expect */
import React from "react"
import { shallow } from "enzyme"
import Welcome from "../index"
import { Route } from "react-router-dom"

describe("<Welcome/>", () => {
	it("Has the withRouter HOC function ", function() {
		const WelcomePage = shallow(<Welcome />)				
		expect( typeof( WelcomePage.getElement().type)).toEqual("function")
		// expect( WelcomePage.getElement().type).toEqual(
		// 	[Function Route]
		// )
	})
})
