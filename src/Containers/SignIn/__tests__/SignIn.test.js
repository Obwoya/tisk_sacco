/* global  it, describe, expect */
import React from "react"
import { shallow } from "enzyme"
import SignIn from "../index"


describe("<SignIn/>", () => {
	it("Must render ", function() {
		expect(shallow(<SignIn />).exists())
	})
	it("Must render the wrapper div ", function() {
		const SignInPage = shallow(<SignIn />)
		expect(SignInPage.getElement().props.className).toEqual("signInGrid")
		expect(SignInPage.getElement().type).toEqual("div")
	})
})
