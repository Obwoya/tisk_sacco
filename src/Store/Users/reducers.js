import * as actionTypes from "./actionTypes"
import * as processTypes from "../Shared/processTypes"
import Immutable from "seamless-immutable"
import { combineReducers } from "redux"

const initialState = Immutable({
	_loginProcess: { status: processTypes.IDLE },
	auth: {
		_isUserAuthenticated: false
	},

	_signupProcess: {},
	userInformation: {},

	_getUserInformationProcess: {},
	_getUserDepositsProcess: {},
	_getUserTypesProcess: {}
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
				token: action.token.token
			},
			userInformation: action.user
		})

	case actionTypes.LOGIN_FAILED:
		return state.merge({
			_loginProcess: { status: processTypes.IDLE },
			auth: { _isUserAuthenticated: false }
		})
	case actionTypes.LOGIN_INVALID:
		return state.merge({
			_loginProcess: {
				status: processTypes.ERROR,
				message: "Unable to log with provided credentials"
			},
			auth: { _isUserAuthenticated: false }
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

	case actionTypes.GET_USER_TYPES_REQUESTED:
		return state.merge({
			_getUserTypesProcess: {
				status: processTypes.PROCESSING
			}
		})

	case actionTypes.GET_USER_TYPES_SUCCESS:
		return state.merge({
			_getUserTypesProcess: {
				status: processTypes.SUCCESS
			},
			userTypes: action.payload
		})

	case actionTypes.GET_USER_INFORMATION_REQUESTED:
		return state.merge({
			_getUserInformationProcess: { status: processTypes.PROCESSING }
		})
	case actionTypes.GET_USER_INFORMATION_SUCCESS:
		return state.merge({
			_getUserInformationProcess: { status: processTypes.SUCCESS },
			userInformation: action.userInformation
		})

	default:
		return state
	}
}

export const savingsReducer = (state = initialState, action = {}) => {
	switch (action.type) {
	case actionTypes.GET_USER_DEPOSITS_REQUESTED:
		return state.merge({
			_getUserDepositsProcess: { status: processTypes.PROCESSING }
		})
	case actionTypes.GET_USER_DEPOSITS_SUCCESS:
		return state.merge({
			_getUserDepositsProcess: { status: processTypes.SUCCESS },
			userDeposits: action.userDeposits
		})

	default:
		return state
	}
}

export default combineReducers({
	users: usersReducer,
	savings: savingsReducer
})
