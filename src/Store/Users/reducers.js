import * as actionTypes from "./actionTypes"
import * as processTypes from "../Shared/processTypes"
import { createTransform } from "redux-persist"

import Immutable from "seamless-immutable"
import { combineReducers } from "redux"

import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"


const initialState = Immutable({
	_loginProcess: { status: processTypes.IDLE },
	auth: {
		_isUserAuthenticated: false
	},

	_signupProcess: {},
	userInformation: {},

	_getUserInformationProcess: {},
	_getUserDepositsProcess: {}
})

const usersPersistConfig = {
	key: "users",
	storage,
	blacklist: [
		"_loginProcess",
		"_signupProcess",
		"_getUserInformationProcess",
		"_getUserDepositsProcess"
	]	
}

export const usersReducer = (state = initialState, action = {}) => {
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
			userInformation: action.user
		}

	case actionTypes.LOGIN_FAILED:
		return {
			...state,
			_loginProcess: { status: processTypes.IDLE },
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
			_signupProcess: { status: processTypes.SUCCESS },
			userInformation: action.userInformation
		}

	case actionTypes.GET_USER_INFORMATION_REQUESTED:
		return {
			...state,
			_getUserInformationProcess: { status: processTypes.PROCESSING }
		}
	case actionTypes.GET_USER_INFORMATION_SUCCESS:
		return {
			_getUserInformationProcess: { status: processTypes.SUCCESS },
			userInformation: action.userInformation
		}

	default:
		return state
	}
}

export const savingsReducer = (state = initialState, action = {}) => {
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
	savings: persistReducer(usersPersistConfig, savingsReducer)
})
