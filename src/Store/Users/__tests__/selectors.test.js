/* global  it, describe, expect */
import * as userSelectors from "../selectors"

describe("User selectors", () => {
	it("Must return an if user is authenticated", () => {
		let sampleState = {
			users: {
				users: {
					auth: {
						_isUserAuthenticated: false
					}
				}
			}
		}
		expect(userSelectors.getAuthStatus(sampleState.users)).toEqual(false)
	})
	it("Must return an if user is authenticated", () => {
		let sampleState = {
			users: {
				users: {
					auth: {
						_isUserAuthenticated: true
					}
				}
			}
		}

		expect(userSelectors.getAuthStatus(sampleState.users)).toEqual(true)
	})
})
