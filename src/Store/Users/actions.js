import * as actionTypes from "./actionTypes"
import UsersService from "./services"

export const login = (user) => {
	return dispatch => {
		dispatch({
			type: actionTypes.LOGIN_REQUEST
		})
		return UsersService.getToken(user).then(response => {
			return dispatch({
				type: actionTypes.LOGIN_SUCCESS,
				token: response
			})
		})
	}
}
