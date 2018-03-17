/* global  it, describe, expect */
import React from "react"
import { shallow } from "enzyme"
import Banner from "../index"

describe("<Banner/>", () => {
	it("Must render the wrapper div ", function() {
		const Homepage = shallow(<Banner />)
		expect(shallow(<div />).exists())
		expect(Homepage.find("div").length === 1).toBe(true)
	})
})
