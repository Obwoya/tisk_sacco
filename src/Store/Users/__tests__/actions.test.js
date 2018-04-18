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
	it("should create an action get user types", () => {
		let sampleResponse = [
			{
				name: "student",
				registration_fee: 1000,
				monthly_fee: 500,
				description: "Lorem ipsum sit amet dolor"
			},
			{
				name: "proffesional",
				registration_fee: 2000,
				monthly_fee: 1000,
				description: "Lorem ipsum sit amet dolor"
			},
			{
				name: "executive",
				registration_fee: 10000,
				monthly_fee: 5000,
				description: "Lorem ipsum sit amet dolor"
			}
		]

		const expectedActions = [
			{ type: actionTypes.GET_USER_TYPES_REQUESTED },
			{
				type: actionTypes.GET_USER_TYPES_SUCCESS,
				payload: sampleResponse
			}
		]

		const store = mockStore({})
		fetch.mockResponse(JSON.stringify(sampleResponse), { status: 200 })
		store.dispatch(userActions.getUserTypes()).then(() => {			
			expect(store.getActions()).toEqual(expectedActions)
		})
	})


	it("should create an action get user information", () => {
		let sampleResponse = {
			id: 1,
			password:
				"pbkdf2_sha256$100000$zqSnuiKJf9BW$LlX5M/Jz6upGV0qu0g3hR7ncydxGI7y6TY+2s2nciU0=",
			last_login: null,
			is_superuser: false,
			email: "name@email.com",
			first_name: "John",
			last_name: "Doe",
			gender: "",
			phone_number: "0712345678",
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
			phone_number: "0712345678"
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

	it("dispatches login failed when request is unauthorized", () => {
		let sampleResponse = { detail: "Signature has expired." }

		const expectedActions = [
			{ type: actionTypes.GET_USER_INFORMATION_REQUESTED },
			{
				type: actionTypes.LOGIN_FAILED
			}
		]

		const store = mockStore({})

		fetch.mockResponse({}, { status: 401 })
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

	it("should create an action get user deposits", () => {
		let sampleResponse = {
			first_name: "John",
			last_name: "Doe",
			email: "name@email.com",
			phone_number: "0712345678",
			user_deposit: [
				{
					id: "113436bd-9c6c-49e1-881b-bdc18f24b289",
					time: "2018-03-29T09:48:33.996686Z",
					amount: "200.00",
					code: "",
					user: 1
				},
				{
					id: "3bcab39d-bd79-433d-9c12-520fef686382",
					time: "2018-03-29T09:40:21.371750Z",
					amount: "200.00",
					code: "",
					user: 1
				},
				{
					id: "a9eb9e1d-47b1-416f-a09f-d88794f0314d",
					time: "2018-03-29T09:39:46.242490Z",
					amount: "200.00",
					code: "",
					user: 1
				}
			]
		}

		const expectedActions = [
			{ type: actionTypes.GET_USER_DEPOSITS_REQUESTED },
			{
				type: actionTypes.GET_USER_DEPOSITS_SUCCESS,
				userDeposits: sampleResponse.user_deposit
			}
		]

		const store = mockStore({})
		fetch.mockResponse(JSON.stringify(sampleResponse), { status: 200 })
		store
			.dispatch(
				userActions.getUserDeposits({
					id: 1
				})
			)
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
	})
	it("Raises an exception when the user deposits is not found", () => {
		let sampleResponse = {
			detail: "Not found."
		}

		const expectedActions = [
			{ type: actionTypes.GET_USER_DEPOSITS_REQUESTED },
			{
				type: actionTypes.GET_USER_DEPOSITS_ERROR,
				error: sampleResponse.user_deposit
			}
		]

		const store = mockStore({})

		fetch.mockResponse({}, { status: 404 })
		store
			.dispatch(
				userActions.getUserDeposits({
					id: 1
				})
			)
			.then(() => {
				// return of async actions
				expect(store.getActions()).toEqual(expectedActions)
			})
	})
})
