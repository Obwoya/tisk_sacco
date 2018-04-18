import * as actionTypes from "./actionTypes"
import UsersService from "./services"

export const manageToken = () => {
	setTimeout(() => {
		// Refresh the token

		UsersService.refreshToken(sessionStorage.getItem("jwt"))
			.then(response => {
				if (response.status === 200) {
					Promise.resolve(response.json()).then(token => {
						sessionStorage.setItem("jwt", token.token)
					})
				}
			})
			.catch(error => {
				throw error
			})
		manageToken()
	}, 20000)
}

export const login = user => {
	return dispatch => {
		dispatch({
			type: actionTypes.LOGIN_REQUEST
		})
		return UsersService.getToken(user).then(response => {
			if (response.status === 200) {
				return Promise.resolve(response.json()).then(token => {
					sessionStorage.setItem("jwt", token.token)
					dispatch(manageToken)
					return dispatch({
						type: actionTypes.LOGIN_SUCCESS,
						token: token,
						user: user
					})
				})
			} else if (response.status === 400) {
				return dispatch({
					type: actionTypes.LOGIN_FAILED
				})
			}
		})
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
					dispatch(login({ email: user.email, password: user.password }))
					return dispatch({
						type: actionTypes.SIGNUP_SUCCESS,
						userInformation: userInformation
					})
				})
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
	return dispatch => {
		dispatch({ type: actionTypes.GET_USER_INFORMATION_REQUESTED })

		return UsersService.getUserInfomation({ email }).then(response => {
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
	return dispatch => {
		dispatch({ type: actionTypes.GET_USER_DEPOSITS_REQUESTED })

		return UsersService.getUserDeposits(
			{ email },
			sessionStorage.getItem("jwt")
		).then(response => {
			if (response.status === 200) {
				return Promise.resolve(response.json()).then(userDeposits => {
					return dispatch({
						type: actionTypes.GET_USER_DEPOSITS_SUCCESS,
						userDeposits: userDeposits.user_deposit
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
