import * as actionTypes from "./actionTypes"
import * as processTypes from "../Shared/processTypes"
import Immutable from "seamless-immutable"
import { combineReducers } from "redux"

const initialState = Immutable({
	_loginProcess: {},
	auth: {
		_isUserAuthenticated: false
	},

	_signupProcess: {},
	userInformation: {},

	_getUserInformationProcess: {}
})

export const usersReducer = (state = initialState, action = {}) => {
	switch (action.type) {
	case actionTypes.LOGIN_REQUEST:
		return state.merge({
			_loginProcess: { status: processTypes.PROCESSING }
		})
	case actionTypes.LOGIN_SUCCESS:
		return state.merge({
			_loginProcess: { status: processTypes.SUCCESS },
			auth: {
				_isUserAuthenticated: true,
				token: action.token.token,
			},
			userInformation: action.user,
		})

	case actionTypes.SIGNUP_REQUEST:
		return state.merge({
			_signupProcess: { status: processTypes.PROCESSING }
		})
	case actionTypes.SIGNUP_SUCCESS:
		return state.merge({
			_signupProcess: { status: processTypes.SUCCESS },
			userInformation: action.userInformation
		})

	case actionTypes.GET_USER_INFORMATION_REQUESTED:
		return state.merge({
			_getUserInformationProcess: { status: processTypes.PROCESSING }
		})
	case actionTypes.GET_USER_INFORMATION_SUCCESS:
		return state.merge({
			_getUserInformationProcess: {status: processTypes.SUCCESS},
			userInformation: action.userInformation
		})
	default:
		return state
	}
}

export default combineReducers({
	users: usersReducer
})
