/* global  it, describe, expect */
import React from "react"
import { shallow } from "enzyme"
import ProfileName from "../index"

describe("<ProfileName/>", () => {
	it("Must render the wrapper div ", function() {
		const ProfileNameComponent = shallow(<ProfileName />)
		expect(shallow(<div />).exists())
		expect(ProfileNameComponent.find("div").length === 1).toBe(true)
	})
	it("Must render a header ", function() {
		const ProfileNameComponent = shallow(<ProfileName />)
		expect(shallow(<h2 />).exists())
		expect(ProfileNameComponent.find("h2").length === 1).toBe(true)
	})
})
