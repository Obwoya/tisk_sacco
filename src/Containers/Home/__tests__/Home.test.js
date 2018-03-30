/* global  it, describe, expect */
import React from "react"
import { shallow } from "enzyme"
import Home from "../index"

import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("<Home/>", () => {
	it("Must render the wrapper div ", function() {
		const store = mockStore({
			users: {
				users: {
					auth: { _isUserAuthenticated: true },
				},
				savings: { userDeposits: [] }
			}
		})

		const HomePage = shallow(<Home store={store} />)
		expect(typeof HomePage.getElement().type).toEqual("function")
	})
})
