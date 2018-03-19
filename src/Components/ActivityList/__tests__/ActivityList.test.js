/* global  it, describe, expect */
import React from "react"
import { shallow } from "enzyme"
import ActivityList from "../index"

describe("<ActivityList/>", () => {
	it("Must render the wrapper ul ", () => {
		const ActivityListComponent = shallow(<ActivityList activities={[]} />)
		expect(shallow(<ul />).exists())
		expect(ActivityListComponent.find("ul").length === 1).toBe(true)
	})
	it("Renders a list item when 1 is entered ", () => {
		const ActivityListComponent = shallow(
			<ActivityList
				activities={[
					{
						date: new Date("July 20, 69 00:20:18"),
						type: "Deposit",
						amount: 3000
					}
				]}
			/>
		)
		expect(shallow(<li />).exists())
		expect(ActivityListComponent.find("li").length === 1).toBe(true)
	})
	it("List items matches number of activity items ", () => {
		const ActivityListComponent = shallow(
			<ActivityList
				activities={[
					{
						date: new Date("July 20, 69 00:20:18"),
						type: "Deposit",
						amount: 3000
					},
					{
						date: new Date("July 20, 69 00:20:18"),
						type: "Deposit",
						amount: 3000
					},
					{
						date: new Date("July 20, 69 00:20:18"),
						type: "Deposit",
						amount: 3000
					},
					{
						date: new Date("July 20, 69 00:20:18"),
						type: "Deposit",
						amount: 3000
					}
				]}
			/>
		)
		expect(shallow(<li />).exists())
		expect(ActivityListComponent.find("li").length === 4).toBe(true)
	})
})
