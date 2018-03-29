import React from "react"

import styles from "./styles.css"

class Deposit extends React.Component{
    render(){
        return(
            <div className={styles.depositPage}>
                <div className={styles.topBar}>
                    <span className={styles.arrowBack}>&#8592;</span>
                    Pay Felix Ongati
                </div>
                <div className={styles.pageContent}>
                    <div className={styles.depositAmountWrapper}>
                        <span contentEditable="true" type="number" placeholder="0.00" step="0.01" onFocus="blur();" className={styles.depositAmount}>
                        <sup>$</sup>
                        0.00
                        </span>
                    </div>
                    <div className={styles.depositCurrency}>USD ></div>
                    <table className={styles.depositNumpad}>
                        <tbody>
                            <tr>
                                <td><a href="javascript:void(0);">1</a></td>
                                <td><a href="javascript:void(0);">2</a></td>
                                <td><a href="javascript:void(0);">3</a></td>
                            </tr>
                            <tr>
                                <td><a href="javascript:void(0);">4</a></td>
                                <td><a href="javascript:void(0);">5</a></td>
                                <td><a href="javascript:void(0);">6</a></td>
                            </tr>
                            <tr>
                                <td><a href="javascript:void(0);">7</a></td>
                                <td><a href="javascript:void(0);">8</a></td>
                                <td><a href="javascript:void(0);">9</a></td>
                            </tr>
                            <tr>
                                <td><a href="javascript:void(0);">00</a></td>
                                <td><a href="javascript:void(0);">0</a></td>
                                <td><a href="javascript:void(0);">#</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="javascript:void(0);" className={styles.depositNext}>Next</a>
                </div>
            </div>
        )
    }
}

export default Deposit