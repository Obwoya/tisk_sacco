/* global  it, describe, expect */
import React from "react"
import { shallow } from "enzyme"
import Avatar from "../index"

describe("<Avatar/>", () => {
	it("Must render the wrapper div ", function() {
		const Homepage = shallow(<Avatar />)		
		expect(Homepage.find("div").length === 0).toBe(true)
	})
	it("Must render an image div ", function() {
		const Homepage = shallow(<Avatar />)		
		expect(Homepage.find("img").length === 1).toBe(true)
	})
})
