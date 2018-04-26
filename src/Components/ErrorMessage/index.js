import React from "react"

import styles from "./style.css"
const ErrorMessage = ({ children }) => {
	return <div className={styles.errorMessageContainer}>{children}</div>
}

export default ErrorMessage
