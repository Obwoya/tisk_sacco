/* global  it, describe, expect */
import React from "react"
import { mount } from "enzyme"
import ErrorMessage from "../../ErrorMessage"

describe("ErrorMessage component tests", () => {
	it("check if errormessage component will mount ", () => {
		const wrapper = mount(<ErrorMessage />)
		// const actual = wrapper.find("div")
		

		// expect(actual).toEqual(<div/>)
	})
})
