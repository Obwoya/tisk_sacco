/* global  it, describe, expect */
import React from "react"
import { shallow } from "enzyme"
import Button from "../index"

describe("<Button/>", () => {
	it("Must render the wrapper button ", function() {
		const ButtonComponent = shallow(<Button />)
		expect(ButtonComponent.find("button").length === 1).toBe(true)
	})
	it("Uses default styles no props are provided ", function() {
		const ButtonComponent = shallow(<Button />)
		expect(ButtonComponent.getElement().props.children).toBe(undefined)
		expect(ButtonComponent.getElement().props.style.backgroundColor).toEqual(
			"#FFFFFF"
		)
		expect(ButtonComponent.getElement().props.style.color).toEqual("#000000")
		expect(ButtonComponent.getElement().props.style.boxShadow).toEqual(
			""
		)
	})
	it("Utilizes props that are provided ", function() {
		const ButtonComponent = shallow(
			<Button
				children="Test text"
				backgroundColor={"#b32017"}
				foregroundColor={"#ffffff"}
				raised={true}
			/>
		)		
		expect(ButtonComponent.getElement().props.children).toBe("Test text")
		expect(ButtonComponent.getElement().props.style.backgroundColor).toEqual(
			"#b32017"
		)
		expect(ButtonComponent.getElement().props.style.color).toEqual("#ffffff")
		expect(ButtonComponent.getElement().props.style.boxShadow).toEqual(
			" 2px 2px 4px rgba(54, 54, 54, 0.4)"
		)
	})
})
