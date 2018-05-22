/* global  it, describe, expect */
import * as actionTypes from "../actionTypes"
import * as processTypes from "../../Shared/processTypes"
import { usersReducer, savingsReducer } from "../reducers"
import Immutable from "seamless-immutable"
import {accountTypes} from "../accountTypes"

describe("Users reducer", () => {
	it("should return state with processing as Processing on LOGIN request", () => {
		const action = { type: actionTypes.LOGIN_REQUEST }
		const expected = { _loginProcess: { status: processTypes.PROCESSING } }

		expect(usersReducer(Immutable({}), action)).toEqual(expected)
	})

	it("should return state with token on LOGIN SUCEESS", () => {
		const action = {
			type: actionTypes.LOGIN_SUCCESS,
			token: {
				token: "token",
				user: {
					email: "email@email.com"
				}
			},
			user: {
				email: "email@email.com"
			}
		}
		const expected = {
			_loginProcess: { status: processTypes.SUCCESS },
			auth: {
				_isUserAuthenticated: true,
				token: "token"
			},
			userEmail: "email@email.com"
		}

		expect(usersReducer(Immutable({}), action)).toEqual(expected)
	})

	it("should return state with token on LOGIN INVALID", () => {
		const action = {
			type: actionTypes.LOGIN_INVALID
		}
		const expected = {
			_loginProcess: {
				status: processTypes.ERROR,
				message: "Unable to log with provided credentials"
			},
			auth: {
				_isUserAuthenticated: false
			}
		}

		expect(usersReducer(Immutable({}), action)).toEqual(expected)
	})

	it("Return state with signupProcessing as PROCESSING in SIGNUP REQUEST", () => {
		const action = { type: actionTypes.SIGNUP_REQUEST }
		const expected = { _signupProcess: { status: processTypes.PROCESSING } }

		expect(usersReducer(Immutable({}), action)).toEqual(expected)
	})

	it("should return state with user information on SIGNUP SUCEESS", () => {
		const action = {
			type: actionTypes.SIGNUP_SUCCESS,
			userInformation: {
				email: "email@email.com",
				password: "pbkdf2",
				phone_number: "123456789",
				first_name: "john",
				last_name: "doe"
			}
		}
		const expected = {
			_signupProcess: { status: processTypes.SUCCESS }
			// userInformation: {
			// 	email: "email@email.com",
			// 	password: "pbkdf2",
			// 	phone_number: "123456789",
			// 	first_name: "john",
			// 	last_name: "doe"
			// }
		}

		expect(usersReducer(Immutable({}), action)).toEqual(expected)
	})

	it("should state with _getUserTypes as PROCESSING in GET USER TYPES REQUEST", () => {
		const action = { type: actionTypes.GET_USER_TYPES_REQUESTED }
		const expected = {
			_getUserTypesProcess: { status: processTypes.PROCESSING }
		}

		expect(usersReducer(Immutable({}), action)).toEqual(expected)
	})

	it("should state with userInformationProcess as PROCESSING in GET USER INFORMATION REQUEST", () => {
		const action = { type: actionTypes.GET_USER_INFORMATION_REQUESTED }
		const expected = {
			_getUserInformationProcess: { status: processTypes.PROCESSING }
		}

		expect(usersReducer(Immutable({}), action)).toEqual(expected)
	})

	it("Should return user types and completed process on GET_USER_TYPES_SUCCESS", () => {
		const action = {
			type: actionTypes.GET_USER_TYPES_SUCCESS,
			payload: [{ name: "student", registration_fee: 200 }]
		}
		const expected = {
			_getUserTypesProcess: {
				status: processTypes.SUCCESS
			},
			userTypes: [{ name: "student", registration_fee: 200 }]
		}

		expect(usersReducer(Immutable({}), action)).toEqual(expected)
	})

	it("should return state with user information on GET USER INFORMATION SUCEESS", () => {
		const action = {
			type: actionTypes.GET_USER_INFORMATION_SUCCESS,
			userInformation: {
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
		}
		const expected = {
			_getUserInformationProcess: { status: processTypes.SUCCESS },
			userInformation: {
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
		}

		expect(usersReducer(Immutable({}), action)).toEqual(expected)
	})

	it("should return relevant state for get user deposits", () => {
		const successAction = {
			type: actionTypes.GET_USER_DEPOSITS_SUCCESS,
			userDeposits: {
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
		}
		const expectedSuccessState = {
			_getUserDepositsProcess: { status: processTypes.SUCCESS },
			userDeposits: {
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
		}

		const requestAction = {
			type: actionTypes.GET_USER_DEPOSITS_REQUESTED
		}
		const expectedRequestState = {
			_getUserDepositsProcess: { status: processTypes.PROCESSING }
		}

		expect(savingsReducer(Immutable({}), successAction)).toEqual(
			expectedSuccessState
		)
		expect(savingsReducer(Immutable({}), requestAction)).toEqual(
			expectedRequestState
		)
	})

	it("should return all account types on request", () => {
		const action = {
			type: actionTypes.SET_ACCOUNT_TYPES_REQUESTED
		}
		const expected = {
			accountTypes: accountTypes
		}

		expect(usersReducer(Immutable({}), action)).toEqual(expected)
	})
	
})
