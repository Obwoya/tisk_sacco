export default class UsersService {
	static get host() {
		delete UsersService.host
		return (UsersService.host = "https://demo-tiskserver.herokuapp.com")
		// return (UsersService.host = "http://localhost:8000")
	}

	static getToken(user) {
		const url = UsersService.host.concat("/login/")

		var myHeaders = new Headers()
		myHeaders.append("content-type", "application/json")
		myHeaders.append("X-Custom-Header", "ProcessThisImmediately")
		const request = {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(user)
		}

		return fetch(url, request)
			.then(response => {
				return response
			})
			.catch(error => {
				throw error
			})
	}

	static refreshToken(token) {
		const url = UsersService.host.concat("/refreshtoken/")

		var myHeaders = new Headers()
		myHeaders.append("content-type", "application/json")
		myHeaders.append("X-Custom-Header", "ProcessThisImmediately")
		const request = {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				token: token
			})
		}

		return fetch(url, request)
			.then(response => {
				return response
			})
			.catch(error => {
				return error
			})
	}

	static registerUser(user) {
		const url = UsersService.host.concat("/users/api/new/")

		var myHeaders = new Headers()
		myHeaders.append("content-type", "application/json")
		myHeaders.append("X-Custom-Header", "ProcessThisImmediately")
		const request = {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(user)
		}

		return fetch(url, request)
			.then(response => {
				return response
			})
			.catch(error => {
				throw error
			})
	}

	static getUserTypes() {
		const url = UsersService.host.concat("/users/api/membershiptypes/")
		const request = {
			method: "GET",
			headers: {}
		}

		return fetch(url, request)
			.then(response => {
				return response
			})
			.catch(error => {
				return error
			})
	}
	static getUserInfomation({ email }) {
		const url = UsersService.host.concat("/users/api/" + email + "/")
		const request = {
			method: "GET",
			headers: {
				Authorization: "JWT " + sessionStorage.getItem("jwt")
			}
		}

		return fetch(url, request)
			.then(response => {
				return response
			})
			.catch(error => {
				return error
			})
	}
	static getUserDeposits({ email }, token) {
		const url = UsersService.host.concat(
			"/users/api/" + email + "/savings/deposits"
		)
		const request = {
			method: "GET",
			headers: {
				Authorization: "JWT " + token
			}
		}

		return fetch(url, request)
			.then(response => {
				return response
			})
			.catch(error => {
				return error
			})
	}
}
