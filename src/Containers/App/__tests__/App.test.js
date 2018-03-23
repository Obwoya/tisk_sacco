/* global  it, describe, expect */
import React from "react"
import { shallow } from "enzyme"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

import App from "../../App"
describe("App  tests", () => {
	it("test if the App will mount ", () => {
		const store = mockStore({
			users: { users: { auth: { _isUserAuthenticated: false } } }
		})

		shallow(<App store={store} />)
	})
})
