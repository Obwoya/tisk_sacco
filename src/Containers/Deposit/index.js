import React from "react"

import styles from "./styles.css"

class Deposit extends React.Component{
    render(){
        return(
            <div className={styles.depositPage}>
                <div className={styles.topBar}>
                    <span className={styles.arrowBack}></span>
                    Pay Felix Ongati
                </div>
                <div className={styles.pageContent}>
                    <div className={styles.depositAmountWrapper}>
                        <span contentEditable="true" type="number" placeholder="0.00" step="0.01" className={styles.depositAmount}>
                        <sup>$</sup>
                        0.00
                        </span>
                    </div>
                    <div className={styles.depositCurrency}>USD ></div>
                    <a href="javascript:void(0);" className={styles.depositNext}>Next</a>
                </div>
            </div>
        )
    }
}

export default Deposit