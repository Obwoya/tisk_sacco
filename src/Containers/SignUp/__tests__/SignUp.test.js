/* global  it, describe, expect */
import React from "react"
import { shallow } from "enzyme"
import SignUp from "../index"


describe("<SignUp/>", () => {
	it("Must render ", function() {
		expect(shallow(<SignUp />).exists())
	})
	it("Must render the wrapper div ", function() {
		const SignUpPage = shallow(<SignUp />)
		expect(SignUpPage.getElement().props.className).toEqual("signUpGrid")
		expect(SignUpPage.getElement().type).toEqual("div")
	})	
})
