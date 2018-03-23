/* global  it, describe, expect */
// import fetchMock from "fetch-mock"
import UsersService from "../services"

describe("users service ", () => {
	it("makes request for new token", () => {
		// expect( typeof( OrdersService.getOrders())).toBe("function")
		let response = {
			token:
				"tockencode"
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
})
