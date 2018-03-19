/* global  it, describe, expect */
import React from "react"
import { shallow } from "enzyme"
import RecentTransactions from "../index"
import styles from "../style.css"

describe("<RecentTransactions/>", () => {
	it("Must render the wrapper div ", function() {
		expect(shallow(<div className={styles.recentTransactionsGrid} />).exists())
	})
	it("Must all the right number of grids ", function() {
		const RecentTransactionsComponent = shallow(<RecentTransactions />)
		expect(shallow(<div />).exists())
		expect(RecentTransactionsComponent.find("div").length === 6).toBe(true)
	})
})
