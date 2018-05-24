export default class UsersService {
	static get host() {
		delete UsersService.host
		// return (UsersService.host = "https://demo-tiskserver.herokuapp.com")
		// return (UsersService.host = "http://localhost:8000")
		// return (UsersService.host = "http://188.166.248.71")
		return (UsersService.host = "https://tisk.or.ke")
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

	static sendActivationToken(token) {
		const url = UsersService.host.concat("/api/v1/users/activate/")

		var myHeaders = new Headers()
		myHeaders.append("content-type", "application/json")
		const request = {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(token)
		}

		return fetch(url, request)
			.then(response => {
				return response
			})
			.catch(error => {
				throw error
			})
	}

	static registerUser(user) {
		const url = UsersService.host.concat("/api/v1/users/new/individual")

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
	static getUserInfomation({ email }, accessToken) {
		const url = UsersService.host.concat("/api/v1/users/" + email)
		const request = {
			method: "GET",
			headers: {
				Authorization: "JWT " + accessToken
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

	static requestMFSRegistration(authToken) {
		const url = UsersService.host.concat(
			"/users/membership/request_mfs_registration"
		)
		const request = {
			method: "GET",
			headers: {
				Authorization: "JWT " + authToken
			}
		}

		return fetch(url, request)
			.then(response => {
				return response
			})
			.catch(error => {
				throw error
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

	static getMembershipTypes() {
		const url = UsersService.host.concat("/api/v1/membership_categories")
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
}
