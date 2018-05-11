/* global  it, describe, expect, beforeAll, jest */
// import fetchMock from "fetch-mock"
import UsersService from "../services"

describe("users service ", () => {
	beforeAll(() => {
		global.sessionStorage = jest.genMockFunction()
		global.sessionStorage.setItem = jest.genMockFunction()
		global.sessionStorage.getItem = jest.genMockFunction()
	})

	it("makes request for new token", () => {
		// expect( typeof( OrdersService.getOrders())).toBe("function")
		let response = {
			token: "tockencode"
		}
		let sampleUser = {
			email: "a@b.c",
			password: "foobar"
		}

		fetch.mockResponse(JSON.stringify(response))

		return UsersService.getToken(sampleUser).then(response => {
			expect(response).toEqual(response)
		})
	})

	it("makes request for new user", () => {
		// expect( typeof( OrdersService.getOrders())).toBe("function")
		let sampleResponse = {
			email: "email@email.com",
			password: "pbkdf2",
			phone_number: "123456789",
			first_name: "john",
			last_name: "doe"
		}
		let sampleUser = {
			email: "email@email.com",
			password: "pbkdf2",
			phone_number: "123456789",
			first_name: "john",
			last_name: "doe"
		}

		fetch.mockResponse(JSON.stringify(sampleResponse))

		return UsersService.registerUser(sampleUser).then(response => {
			expect(response).toEqual(response)
		})
	})

	it("sends an activation token", () => {
		let sampleResponse = {
			message: "user activation successful"
		}
		let token = { token: "JLTZnn" }

		fetch.mockResponse(JSON.stringify(sampleResponse))
		return UsersService.sendActivationToken(token).then(response => {
			expect(response.status).toEqual(200)
			Promise.resolve(response.json()).then(message =>{				
				expect(message).toEqual(sampleResponse)
			})
		})
	})

	it("gets the user information", () => {
		let sampleResponse = {
			id: 25,
			password:
				"pbkdf2_sha256$100000$zqSnuiKJf9BW$LlX5M/Jz6upGV0qu0g3hR7ncydxGI7y6TY+2s2nciU0=",
			last_login: null,
			is_superuser: false,
			email: "name@email.com",
			first_name: "captain",
			last_name: "overmars",
			gender: "",
			phone_number: "0712345678",
			date_joined: "2018-03-26T20:38:12.503916Z",
			is_active: true,
			groups: [],
			user_permissions: []
		}

		fetch.mockResponse(JSON.stringify(sampleResponse))
		return UsersService.getUserInfomation({
			phoneNumber: sampleResponse.phone_number
		}).then(response => {
			expect(response.body).toEqual(JSON.stringify(sampleResponse))
		})
	})

	it("gets the user types", () => {
		let actualResponse = [
			{
				name: "student",
				registration_fee: 1000,
				monthly_fee: 500,
				description: "Lorem ipsum sit amet dolor"
			},
			{
				name: "proffesional",
				registration_fee: 2000,
				monthly_fee: 1000,
				description: "Lorem ipsum sit amet dolor"
			},
			{
				name: "executive",
				registration_fee: 10000,
				monthly_fee: 5000,
				description: "Lorem ipsum sit amet dolor"
			}
		]

		fetch.mockResponse(JSON.stringify(actualResponse))
		return UsersService.getUserTypes().then(response => {
			expect(response.body).toEqual(JSON.stringify(actualResponse))
		})
	})

	it("gets the user deposits", () => {
		let sampleResponse = {
			id: 1,
			password: "some password",
			last_login: null,
			is_superuser: false,
			email: "email@email.com",
			first_name: "John",
			last_name: "Doe",
			gender: "",
			phone_number: "0712345678",
			date_joined: "2018-03-26T20:38:12.503916Z",
			is_active: true,
			groups: [],
			user_permissions: []
		}

		fetch.mockResponse(JSON.stringify(sampleResponse))
		return UsersService.getUserDeposits(
			{
				id: 1
			},
			sessionStorage.getItem("jwt")
		).then(response => {
			expect(response.body).toEqual(JSON.stringify(sampleResponse))
		})
	})

	it("gets the user deposits", () => {
		let sampleResponse = {
			message:"mfs sms sent"
		}

		fetch.mockResponse(JSON.stringify(sampleResponse))
		return UsersService.requestMFSRegistration(			
			"JWT somerandomauthtoken"
		).then(response => {
			expect(response.body).toEqual(JSON.stringify(sampleResponse))
		})
	})
})
