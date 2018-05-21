export const getAuthStatus = ({ users }) => users.auth._isUserAuthenticated

export const getUserTypesProcessStatus = ({ users }) => users._getUserTypesProcess
export const getUserTypes = ({ users }) => users.userTypes

export const getUserInformation = ({ users }) => users.userInformation
export const getUserEmail = ({ users }) => users.userEmail

export const getUserInformationStatus = ({ users }) =>
	users._getUserInformationProcess

export const getLoginProcessStatus = ({ users }) => users._loginProcess

export const getUserDeposits = ({ savings }) => savings.userDeposits
