import Immutable from "seamless-immutable"
export const getAuthStatus = ({ users }) => users.auth._isUserAuthenticated

export const getUserTypesProcessStatus = ({ users }) =>
	users._getUserTypesProcess
export const getUserTypes = ({ users }) => users.userTypes

export const getUserInformation = ({ users }) => users.userInformation
export const getUserEmail = ({ users }) => users.userEmail

export const getUserInformationStatus = ({ users }) =>
	users._getUserInformationProcess

export const getLoginProcessStatus = ({ users }) => users._loginProcess

export const getSignupProcess = ({ users }) => users._signupProcess

export const getUserDepositsProcess = ({ savings }) =>
	savings._getUserDepositsProcess
export const getUserDeposits = ({ savings }) => savings.userDeposits
export const getUserAccountBalance = ({ savings }) => savings.accountBalance

export const getFetchAccountTypesProcess = ({ users }) =>
	users._fetchAccountTypesProcess
export const getAccountTypes = ({ users }) => {
	let usersMutable = Immutable.isImmutable(users.accountTypes)
		? users.accountTypes.asMutable(users.accountTypes, { deep: true })
		: users.accountTypes
	return usersMutable.sort((a, b) => {
		return a.order_number - b.order_number
	})
}

export const getselectedAccountType = ({ users }) => users.selectedAccountType
