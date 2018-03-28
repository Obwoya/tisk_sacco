/* global  it, describe, expect */
import * as actionTypes from "../actionTypes"
import * as processTypes from "../../Shared/processTypes"
import { usersReducer } from "../reducers"
import Immutable from "seamless-immutable"

describe("Users reducer", () => {
	it("should return state with processing as Processing on LOGIN request", () => {
		const action = { type: actionTypes.LOGIN_REQUEST }
		const expected = { _loginProcess: { status: processTypes.PROCESSING } }

		expect(usersReducer(Immutable({}), action)).toEqual(expected)
	})
	it("should return state with token on LOGIN SUCEESS", () => {
		const action = {
			type: actionTypes.LOGIN_SUCCESS,
			token: { token: "token" , user:{
				email: "email@email.com"
			}}
		}
		const expected = {
			_loginProcess: { status: processTypes.SUCCESS },
			auth: {
				_isUserAuthenticated: true,
				token: "token"
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
			_signupProcess: { status: processTypes.SUCCESS },
			userInformation: {
				email: "email@email.com",
				password: "pbkdf2",
				phone_number: "123456789",
				first_name: "john",
				last_name: "doe"
			}
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
})
