export const getAuthStatus = ({ users }) => users.auth._isUserAuthenticated

export const getUserTypesProcessStatus = ({ users }) =>
	users._getUserTypesProcess
export const getUserTypes = ({ users }) => users.userTypes

export const getUserInformation = ({ users }) => users.userInformation
export const getUserEmail = ({ users }) => users.userEmail

export const getUserInformationStatus = ({ users }) =>
	users._getUserInformationProcess

export const getLoginProcessStatus = ({ users }) => users._loginProcess

export const getUserDeposits = ({ savings }) => savings.userDeposits

export const getAccountTypes = ({ users }) => {
	let reducer = (accumulator, accType) => {
		//check if account type exists in accumulator
		const found = accumulator.find(item => item.slug == accType.slug)
		if (found) {
			//add that option
			found.options.push(accType.name)
		} else {
			//create the new group
			let { name, ...group } = accType
			group.name = group.slug
			group.options = []
			group.options.push(accType.name)
			accumulator.push(group)
		}

		return accumulator
	}

	return users.accountTypes.reduce(reducer, [])
}
export const getselectedAccountType = ({ users }) => users.selectedAccountType
