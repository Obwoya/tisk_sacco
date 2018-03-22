/* global  it, describe, expect */
import React from "react"
import { shallow } from "enzyme"
import Welcome from "../index"

describe("<Welcome/>", () => {
	it("Must render the wrapper div ", function() {
		const WelcomePage = shallow(<Welcome />)		
		expect(WelcomePage.find("div").length).toEqual(6)
	})
})
