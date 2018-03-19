/* global  it, describe, expect */
import React from "react"
import { shallow } from "enzyme"
import Home from "../index"

describe("<Home/>", () => {
	it("Must render the wrapper div ", function() {
		const Homepage = shallow(<Home/>)
		expect( shallow(<div/>).exists())
		expect(Homepage.find("div").length === 8).toBe(true)
		
	})	
})
