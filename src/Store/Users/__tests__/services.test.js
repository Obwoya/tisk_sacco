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

	it("gets the user information", () => {
		let sampleResponse = {
			id: 25,
			password:
				"pbkdf2_sha256$100000$zqSnuiKJf9BW$LlX5M/Jz6upGV0qu0g3hR7ncydxGI7y6TY+2s2nciU0=",
			last_login: null,
			is_superuser: false,
			email: "munene24@gmail.com",
			first_name: "captain",
			last_name: "overmars",
			gender: "",
			phone_number: "0770372789",
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
})
