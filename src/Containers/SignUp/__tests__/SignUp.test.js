/* global  it, describe, expect */
import React from "react"
import { shallow } from "enzyme"
import Signup from "../index"

import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("<SignUp/>", () => {
	it("Must render ", function() {
		const store = mockStore({
			users: { users: { auth: { _isUserAuthenticated: true } } }
		})
		expect(shallow(<Signup store={store} />).exists())
	})
	it("Must render the wrapper div ", function() {
		const store = mockStore({
			users: { users: { auth: { _isUserAuthenticated: true } } }
		})
		const SignUpPage = shallow(
			<Signup store={store} isUserAuthenticated={true} />
		)

		// console.log(SignUpPage.getElement().type.propTypes.path)
		// expect(SignUpPage.getElement().type.propTypes.path).toEqual(
		// 	"[Function: bound checkType]"
		// )
		// expect(SignUpPage.getElement().props.className).toEqual("signUpGrid")
		// expect(SignUpPage.getElement().type).toEqual("div")
	})
})
