export const getAuthStatus = ({ users }) => users.auth._isUserAuthenticated

export const getUserInformation = ({ users }) => users.userInformation


export const getUserInformationStatus = ({ users }) => users._getUserInformationProcess

export const getLoginProcessStatus = ({users})=> users._loginProcess