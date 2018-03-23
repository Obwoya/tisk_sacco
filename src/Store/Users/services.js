export default class UsersService {
	static get host() {
		delete UsersService.host
		return (UsersService.host = "http://localhost:8000")
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
				if(response.status === 200){
					return response.json()
				}
			})
			.catch(error => {
				throw error
			})
	}
}
