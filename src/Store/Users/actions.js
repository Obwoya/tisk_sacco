import * as actionTypes from "./actionTypes"
import UsersService from "./services"

const manageToken = () => {
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
	}, 10000)
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
						token: token
					})
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
					
					dispatch(login({email: user.email, password: user.password}))
					return dispatch({
						type: actionTypes.SIGNUP_SUCCESS,
						userInformation: userInformation
					})
				})
			}
		})
	}
}
