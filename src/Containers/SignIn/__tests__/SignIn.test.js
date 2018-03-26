/* global  it, describe, expect */
import React from "react"
import { shallow } from "enzyme"
import SignIn from "../index"

import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("<SignIn/>", () => {
	const store = mockStore({
		users: { users: { auth: { _isUserAuthenticated: true } } }
	})
	it("Must render ", function() {
		expect(shallow(<SignIn store={store} />).exists())
	})
	it("Must render the wrapper div ", function() {
		const store = mockStore({
			users: { users: { auth: { _isUserAuthenticated: true } } }
		})
		const SignInPage = shallow(
			<SignIn store={store} isUserAuthenticated={true} />
		)
		expect(SignInPage.getElement().type.displayName).toEqual(
			"withRouter(SignIn)"
		)
		// console.log(SignInPage.getElement())
		// expect(SignInPage.getElement().props.className).toEqual("signInGrid")
		// expect(SignInPage.getElement().type).toEqual("div")
	})
})
