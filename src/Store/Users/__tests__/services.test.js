/* global  it, describe, expect */
// import fetchMock from "fetch-mock"
import UsersService from "../services"

describe("users service ", () => {
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
})
