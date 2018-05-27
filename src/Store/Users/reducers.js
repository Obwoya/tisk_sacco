import * as actionTypes from "./actionTypes"
import * as processTypes from "../Shared/processTypes"

import Immutable from "seamless-immutable"
import { combineReducers } from "redux"

import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import { accountTypes } from "./accountTypes"

const usersInitialState = Immutable({
	_loginProcess: { status: processTypes.IDLE },
	auth: {
		_isUserAuthenticated: false
	},

	_signupProcess: { status: processTypes.IDLE },
	userInformation: {},
	businessInformation: {},

	_getUserInformationProcess: {},
	_getUserDepositsProcess: {},
	_getUserTypesProcess: {},

	accountTypes: accountTypes,

	_setSelectedAccountProcess: {
		status: processTypes.IDLE
	},
	selectedAccountType: {}
})

const usersPersistConfig = {
	key: "users",
	storage,
	blacklist: [
		"_loginProcess",
		// "_getUserInformationProcess",
		"_signupProcess",
		"_getUserDepositsProcess",
		"accountTypes",
		"_setSelectedAccountProcess"
	]
}

export const usersReducer = (state = usersInitialState, action = {}) => {
	switch (action.type) {
	case actionTypes.LOGIN_REQUEST:
		return {
			...state,
			_loginProcess: { status: processTypes.PROCESSING }
		}
	case actionTypes.LOGIN_SUCCESS:
		return {
			...state,
			_loginProcess: { status: processTypes.SUCCESS },
			auth: {
				_isUserAuthenticated: true,
				token: action.token.token
			},
			userEmail: action.user.email
		}

	case actionTypes.LOGIN_FAILED:
		return {
			...state,
			_loginProcess: { status: processTypes.IDLE },
			auth: { _isUserAuthenticated: false }
		}

	case actionTypes.LOGIN_INVALID:
		return {
			...state,
			_loginProcess: {
				status: processTypes.ERROR,
				message: "Unable to log with provided credentials"
			},
			auth: { _isUserAuthenticated: false }
		}

	case actionTypes.SET_TOKEN_SUCESS:
		return {
			...state,
			auth: { _isUserAuthenticated: true, token: action.payload }
		}
	case actionTypes.SET_TOKEN_FAIL:
		return {
			...state,
			auth: { _isUserAuthenticated: false }
		}
	case actionTypes.SIGNUP_REQUEST:
		return {
			...state,
			_signupProcess: { status: processTypes.PROCESSING }
		}
	case actionTypes.SIGNUP_SUCCESS:
		return {
			...state,
			_signupProcess: { status: processTypes.SUCCESS }
				// userInformation: action.userInformation
		}

	case actionTypes.INDIVIDUAL_SIGNUP_REQUEST:
		return {
			...state,
			_signupProcess: {
				status: processTypes.PROCESSING,
				message: action.payload
			}
		}

	case actionTypes.INDIVIDUAL_SIGNUP_SUCCESS:
		return {
			...state,
			_signupProcess: { status: processTypes.SUCCESS }
		}
	case actionTypes.INDIVIDUAL_SIGNUP_ERROR:
		return {
			...state,
			_signupProcess: { status: processTypes.ERROR, message: action.payload }
		}


	case actionTypes.BUSINESS_SIGNUP_REQUEST:
		return {
			...state,
			_signupProcess: {
				status: processTypes.PROCESSING,
				message: action.payload
			}
		}

	case actionTypes.BUSINESS_SIGNUP_SUCCESS:
		return {
			...state,
			_signupProcess: { status: processTypes.SUCCESS }
		}
	case actionTypes.BUSINESS_SIGNUP_ERROR:
		return {
			...state,
			_signupProcess: { status: processTypes.ERROR, message: action.payload }
		}

	case actionTypes.GET_USER_TYPES_REQUESTED:
		return {
			...state,
			_getUserTypesProcess: {
				status: processTypes.PROCESSING
			}
		}

	case actionTypes.GET_USER_TYPES_SUCCESS:
		return {
			...state,
			_getUserTypesProcess: {
				status: processTypes.SUCCESS
			},
			userTypes: action.payload
		}

	case actionTypes.GET_USER_INFORMATION_REQUESTED:
		return {
			...state,
			_getUserInformationProcess: { status: processTypes.PROCESSING }
		}
	case actionTypes.GET_USER_INFORMATION_SUCCESS:
		return {
			...state,
			_getUserInformationProcess: { status: processTypes.SUCCESS },
			userInformation: action.userInformation
		}

	case actionTypes.SET_ACCOUNT_TYPES_REQUESTED:
		return {
			...state,
			accountTypes: accountTypes
		}
	case actionTypes.SET_SELECTED_ACCOUNT_TYPES_REQUESTED:
		return {
			...state,
			selectedAccountType: action.accountType
		}
	default:
		return state
	}
}

const savingsInitialState = Immutable({
	_getUserDepositsProcess: { status: processTypes.IDLE }
})

const savingsPersistConfig = {
	key: "savings",
	storage,
	blacklist: ["_getUserDepositsProcess"]
}

export const savingsReducer = (state = savingsInitialState, action = {}) => {
	switch (action.type) {
	case actionTypes.GET_USER_DEPOSITS_REQUESTED:
		return {
			...state,
			_getUserDepositsProcess: { status: processTypes.PROCESSING }
		}
	case actionTypes.GET_USER_DEPOSITS_SUCCESS:
		return {
			...state,
			_getUserDepositsProcess: { status: processTypes.SUCCESS },
			userDeposits: action.userDeposits
		}

	default:
		return state
	}
}

export default combineReducers({
	users: persistReducer(usersPersistConfig, usersReducer),
	savings: persistReducer(savingsPersistConfig, savingsReducer)
})
