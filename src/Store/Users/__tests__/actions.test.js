/* global  it, describe, expect */
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

import * as actionTypes from "../actionTypes"
import * as userActions from "../actions"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("User action creators", () => {
	it("should create an action to get a new token", () => {
		let sampleToken = {
			token: "tokencodes"
		}

		const expectedActions = [
			{ type: actionTypes.LOGIN_REQUEST },
			{ type: actionTypes.LOGIN_SUCCESS, token: sampleToken }
		]

		const store = mockStore({ token: [] })
		fetch.mockResponse(JSON.stringify(sampleToken))
		return store.dispatch(userActions.login()).then(() => {
			// return of async actions
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
	it("should create an action to register a new user", () => {
		let sampleUser = {
			email: "email@email.com",
			password: "pbkdf2",
			phone_number: "123456789",
			first_name: "john",
			last_name: "doe"
		}

		const expectedActions = [
			{ type: actionTypes.SIGNUP_REQUEST },
			{ type: actionTypes.LOGIN_REQUEST },
			{ type: actionTypes.SIGNUP_SUCCESS, userInformation: sampleUser }
		]

		const store = mockStore({})
		fetch.mockResponse(JSON.stringify(sampleUser), { status: 201 })
		return store.dispatch(userActions.signup(sampleUser)).then(() => {
			// return of async actions
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})
