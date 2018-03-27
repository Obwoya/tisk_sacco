/* global  it, describe, expect, beforeAll, jest */
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

import * as actionTypes from "../actionTypes"
import * as userActions from "../actions"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("User action creators", () => {
	beforeAll(() => {
		global.sessionStorage = jest.genMockFunction()
		global.sessionStorage.setItem = jest.genMockFunction()
		global.sessionStorage.getItem = jest.genMockFunction()
	})
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
	it("should create an action get user information", () => {
		let sampleResponse = {
			id: 25,
			password:
				"pbkdf2_sha256$100000$zqSnuiKJf9BW$LlX5M/Jz6upGV0qu0g3hR7ncydxGI7y6TY+2s2nciU0=",
			last_login: null,
			is_superuser: false,
			email: "munene24@gmail.com",
			first_name: "captain",
			last_name: "overmars",
			gender: "",
			phone_number: "0770372789",
			date_joined: "2018-03-26T20:38:12.503916Z",
			is_active: true,
			groups: [],
			user_permissions: []
		}

		const expectedActions = [
			{ type: actionTypes.GET_USER_INFORMATION_REQUESTED },
			{
				type: actionTypes.GET_USER_INFORMATION_SUCCESS,
				userInformation: sampleResponse
			}
		]

		const store = mockStore({})
		fetch.mockResponse(JSON.stringify(sampleResponse), { status: 200 })
		store
			.dispatch(
				userActions.getUserInformation({
					phoneNumber: sampleResponse.phone_number
				})
			)
			.then(() => {
				// return of async actions
				expect(store.getActions()).toEqual(expectedActions)
			})
		
	})
	it("Raises an exception when the user is not found", () => {
		let sampleResponse = {
			phone_number: "0770372789"
		}

		const expectedActions = [
			{ type: actionTypes.GET_USER_INFORMATION_REQUESTED },
			{
				type: actionTypes.GET_USER_INFORMATION_ERROR
			}
		]

		const store = mockStore({})

		fetch.mockResponse({}, { status: 404 })
		store
			.dispatch(
				userActions.getUserInformation({
					phoneNumber: sampleResponse.phone_number
				})
			)
			.then(() => {
				// return of async actions
				expect(store.getActions()).toEqual(expectedActions)
			})
	})
})
