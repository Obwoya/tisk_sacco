import * as actionTypes from "./actionTypes"
import * as selectors from "./selectors"
import UsersService from "./services"
import * as processTypes from "../Shared/processTypes"
import { push } from "react-router-redux"
import * as accountTypes from "./accountTypes"
import * as memberTypes from "./memberTypes"

const getSessionToken = () => {
	return getState => {
		if (getState().users.users.auth["token"] !== undefined) {
			return true
		} else {
			return false
		}
	}
}
export const manageToken = () => {
	return (dispatch, getState) => {
		const timer = setTimeout(() => {
			// Refresh the token
			if (getSessionToken()) {
				UsersService.refreshToken(getState().users.users.auth["token"])
					.then(response => {
						if (response.status === 200) {
							Promise.resolve(response.json()).then(token => {
								dispatch({
									type: actionTypes.SET_TOKEN_SUCESS,
									payload: token.token
								})
								dispatch(manageToken())
							})
						} else {
							dispatch({
								type: actionTypes.SET_TOKEN_FAIL
							})
							clearTimeout(timer)
						}
					})
					.catch(error => {
						throw error
					})
			} else {
				clearTimeout(timer)
				dispatch({
					type: actionTypes.SET_TOKEN_FAIL
				})
			}
		}, 20000)
	}
}

export const login = user => {
	return dispatch => {
		dispatch({
			type: actionTypes.LOGIN_REQUEST
		})
		return UsersService.getToken(user).then(response => {
			if (response.status === 200) {
				return Promise.resolve(response.json()).then(token => {
					dispatch(manageToken())
					return dispatch({
						type: actionTypes.LOGIN_SUCCESS,
						token: token,
						user: user
					})
				})
			} else if (response.status === 400) {
				//check if there is a non_field error
				return Promise.resolve(response.json()).then(error => {
					if ("non_field_errors" in error) {
						//check if there is an error invalid credentials
						let credentialErrors = error["non_field_errors"].find(item => {
							return item === "Unable to log in with provided credentials."
						})
						if (credentialErrors !== undefined) {
							return dispatch({
								type: actionTypes.LOGIN_INVALID
							})
						} else {
							return dispatch({
								type: actionTypes.LOGIN_FAILED
							})
						}
					} else {
						return dispatch({
							type: actionTypes.LOGIN_FAILED
						})
					}
				})
			} else {
				return dispatch({
					type: actionTypes.LOGIN_FAILED
				})
			}
		})
	}
}
export const logout = () => {
	return dispatch => {
		dispatch({
			type: actionTypes.LOG_OUT_REQUESTED
		})
		// dispatch({
		// 	type: "PURGE"
		// })

		dispatch(push("/welcome"))
	}
}

export const backgroundLogin = () => {
	return dispatch => {
		dispatch(manageToken())
	}
}

export const signup = user => {
	return dispatch => {
		dispatch({
			type: actionTypes.SIGNUP_REQUEST
		})
		return UsersService.registerUser(user).then(response => {
			if (response.status === 201) {
				return Promise.resolve(response.json()).then(userInformation => {
					dispatch({
						type: actionTypes.SIGNUP_SUCCESS,
						userInformation: userInformation
					})
					return dispatch(push("/activate"))
				})
			}
		})
	}
}

export const individualSignup = user => {
	return dispatch => {
		dispatch({
			type: actionTypes.INDIVIDUAL_SIGNUP_REQUEST,
			payload: "creating account"
		})
		return UsersService.registerUser(user).then(response => {
			if (response.status === 201) {
				return Promise.resolve(response.json()).then(userInformation => {
					dispatch({
						type: actionTypes.INDIVIDUAL_SIGNUP_SUCCESS,
						userInformation: userInformation
					})
					return dispatch(push("/activate"))
				})
			} else if (response.status === 400) {
				//check if there is a non_field error
				return Promise.resolve(response.json()).then(errors => {
					if ("non_field_errors" in errors) {
						//check if there is an error invalid credentials
					} else {
						//prompt for field with errors
						let errorMessage = ""
						Object.keys(errors).map(error => {
							errorMessage += `\n${error}: ${errors[error]}`
						})
						return dispatch({
							type: actionTypes.INDIVIDUAL_SIGNUP_ERROR,
							payload: errorMessage
						})
					}
				})
			}
		})
	}
}

export const businessSignup = business => {
	return dispatch => {
		dispatch({
			type: actionTypes.BUSINESS_SIGNUP_REQUEST,
			payload: "creating account"
		})
		return UsersService.registerBusiness(business).then(response => {
			if (response.status === 201) {
				return Promise.resolve(response.json()).then(businessInformation => {
					dispatch({
						type: actionTypes.BUSINESS_SIGNUP_SUCCESS,
						businessInformation: businessInformation
					})
					return dispatch(push("/activate"))
				})
			} else if (response.status === 400) {
				//check if there is a non_field error
				return Promise.resolve(response.json()).then(errors => {
					if ("non_field_errors" in errors) {
						//check if there is an error invalid credentials
					} else {
						//prompt for field with errors
						let errorMessage = ""
						Object.keys(errors).map(error => {
							errorMessage += `\n${error}: ${errors[error]}`
						})
						return dispatch({
							type: actionTypes.BUSINESS_SIGNUP_ERROR,
							payload: errorMessage
						})
					}
				})
			}
		})
	}
}

export const activateUser = token => {
	return dispatch => {
		dispatch({ type: actionTypes.SEND_USER_ACTIVATION_CODE_REQUESTED })
		return UsersService.sendActivationToken(token).then(response => {
			if (response.status === 200) {
				dispatch({
					type: actionTypes.SEND_USER_ACTIVATION_CODE_SUCCESS
				})
				return dispatch(push("/signin"))
			} else {
				return dispatch({ type: actionTypes.SEND_USER_ACTIVATION_CODE_ERROR })
			}
		})
	}
}

export const getUserTypes = () => {
	return dispatch => {
		dispatch({ type: actionTypes.GET_USER_TYPES_REQUESTED })

		return UsersService.getUserTypes()
			.then(response => response)
			.then(response => {
				if (response.status === 200) {
					return Promise.resolve(response.json()).then(userTypes => {
						return dispatch({
							type: actionTypes.GET_USER_TYPES_SUCCESS,
							payload: userTypes
						})
					})
				} else if (response.status === 404) {
					return dispatch({ type: actionTypes.GET_USER_TYPES_ERROR })
				}
			})
	}
}

export const getUserInformation = ({ email }) => {
	return (dispatch, getState) => {
		let state = getState()
		if (!state.users.users.userInformation["member"]) {
			dispatch({ type: actionTypes.GET_USER_INFORMATION_REQUESTED })
		}

		return UsersService.getUserInfomation(
			{ email },
			getState().users.users.auth["token"] !== undefined
				? getState().users.users.auth["token"]
				: "empty"
		).then(response => {
			if (response.status === 200) {
				return Promise.resolve(response.json()).then(userInformation => {
					return dispatch({
						type: actionTypes.GET_USER_INFORMATION_SUCCESS,
						userInformation: userInformation
					})
				})
			} else if (response.status === 404) {
				return dispatch({ type: actionTypes.GET_USER_INFORMATION_ERROR })
			} else if (response.status === 401) {
				return dispatch({ type: actionTypes.LOGIN_FAILED })
			}
		})
	}
}

export const getUserDeposits = ({ email }) => {
	return (dispatch, getState) => {
		dispatch({ type: actionTypes.GET_USER_DEPOSITS_REQUESTED })

		return UsersService.getUserDeposits(
			{ email },
			getState().users.users.auth["token"] !== undefined
				? getState().users.users.auth["token"]
				: "empty"
		).then(response => {
			if (response.status === 200) {
				return Promise.resolve(response.json()).then(userDeposits => {
					return dispatch({
						type: actionTypes.GET_USER_DEPOSITS_SUCCESS,
						userDeposits: userDeposits.transactions,
						accountBalance: userDeposits.deposits[0].totaldeposit
					})
				})
			} else if (response.status === 404) {
				return Promise.resolve(response.json()).then(error => {
					return dispatch({
						type: actionTypes.GET_USER_DEPOSITS_ERROR,
						error: error
					})
				})
			}
		})
	}
}

export const requestMFSRegistrationCode = () => {
	return (dispatch, getState) => {
		dispatch({ type: actionTypes.REQUEST_MFS_REGISTRATION_CODE_REQUESTED })

		if (getSessionToken()) {
			return UsersService.requestMFSRegistration(
				getState().users.users.auth["token"]
			).then(response => {
				if (response.status === 200) {
					dispatch({
						type: actionTypes.REQUEST_MFS_REGISTRATION_CODE_SUCCESS
					})
					return dispatch(push("/mfsactivate"))
				} else if (response.status === 404) {
					dispatch(push("/mfsactivate"))
					return dispatch({
						type: actionTypes.REQUEST_MFS_REGISTRATION_CODE_FAILED
					})
				}
			})
		} else {
			dispatch({
				type: actionTypes.LOGIN_FAILED
			})
			dispatch(push("/mfsactivate"))
			return dispatch({
				type: actionTypes.REQUEST_MFS_REGISTRATION_CODE_FAILED,
				error: "authentication failed"
			})
		}
	}
}

export const activateMFSAccount = code => {
	return (dispatch, getState) => {
		dispatch(push("/home"))
	}
}

export const setSelectedAccount = accountType => {
	return dispatch => {
		dispatch({
			type: actionTypes.SET_SELECTED_ACCOUNT_TYPES_REQUESTED,
			accountType
		})
		switch (accountType.type) {
		case memberTypes.BUSINESS:
			return dispatch(push("/companysignup"))
		case memberTypes.INDIVIDUAL:
			return dispatch(push("/signup"))
		default:
			return dispatch(push("/signup"))
		}
	}
}

export const getAccountTypes = () => {
	return dispatch => {
		dispatch({ type: actionTypes.FETCH_ACCOUNT_TYPES_REQUESTED })

		return UsersService.getAccountTypes().then(response => {
			if (response.status === 200) {
				return Promise.resolve(response.json()).then(accountTypes => {
					return dispatch({
						type: actionTypes.FETCH_ACCOUNT_TYPES_SUCESS,
						payload: accountTypes
					})
				})
			} else if (response.status === 404) {
				return dispatch({ type: actionTypes.FETCH_ACCOUNT_TYPES_FAIL })
			}
		})
	}
}

export const getUserEmail = () => {
	return dispatch => {
		dispatch({
			type: actionTypes.GET_USER_EMAIL_REQUESTED
		})
	}
}
