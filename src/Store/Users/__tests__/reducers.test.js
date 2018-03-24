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
			token: { token: "token" }
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
})
