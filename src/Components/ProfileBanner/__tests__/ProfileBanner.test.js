/* global  it, describe, expect */
import React from "react"
import { shallow } from "enzyme"
import ProfileBanner from "../index"

describe("<Banner/>", () => {
	it("Must render the wrapper div ", function() {
		const BannerComponent = shallow(<ProfileBanner user= {{}} accountInformation={{}}/>)
		expect(shallow(<div />).exists())
		expect(BannerComponent.find("div").length === 8).toBe(true)
	})
})
