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
	it("should return state with processing as Processing on LOGIN request", () => {
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
})
