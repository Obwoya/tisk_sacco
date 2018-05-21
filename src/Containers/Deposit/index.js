import React from "react"
import { withRouter } from "react-router-dom"
import styles from "./style.css"


class Deposit extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            depositAmount: "0"
        }
    }

    putNumber = (number) => {
        if(isNaN(number)){
            return;
        }

        let value = this.state.depositAmount
        if (value == 0 || value == "0") value = number;
        else value = value + "" + number;
        this.setState({depositAmount: value})
    }

    deleteFromBack = () => {
        let value = this.state.depositAmount
        if(value.length < 2) value = "0"
        else
        {
            value = value.slice(0, -1);
        } 
        this.setState({depositAmount: value})
    }

    render(){
        return(
            <div className="depositPage">
                <div className="topBar">
                    <span className="arrowBack">&#8592;</span>
                    Deposit savings
                </div>
                <div className="pageContent">
                    <div className="depositAmountWrapper">
                        <span type="number" placeholder="0.00" step="0.01" className="depositAmount">
                        {/* <sup>$</sup> */}
                        {this.state.depositAmount}
                        </span>
                    </div>
                    {/* <div className="depositCurrency}>USD ></div> */}
                    <table className="depositNumpad">
                        <tbody>
                            <tr>
                                <td><a className="ripple" onClick={() => this.putNumber("1")}>1</a></td>
                                <td><a className="ripple" onClick={() => this.putNumber("2")}>2</a></td>
                                <td><a className="ripple" onClick={() => this.putNumber("3")}>3</a></td>
                            </tr>
                            <tr>
                                <td><a className="ripple" onClick={() => this.putNumber(4)}>4</a></td>
                                <td><a className="ripple" onClick={() => this.putNumber(5)}>5</a></td>
                                <td><a className="ripple" onClick={() => this.putNumber(6)}>6</a></td>
                            </tr>
                            <tr>
                                <td><a className="ripple" onClick={() => this.putNumber(7)}>7</a></td>
                                <td><a className="ripple" onClick={() =>this.putNumber(8)}>8</a></td>
                                <td><a className="ripple" onClick={() =>this.putNumber(9)}>9</a></td>
                            </tr>
                            <tr>
                                <td><a className="ripple" onClick={() => this.putNumber("00")}>00</a></td>
                                <td><a className="ripple" onClick={() => this.putNumber(0)}>0</a></td>
                                <td><a className="ripple" onClick={() => this.deleteFromBack()}>#</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="javascript:void(0);" className="depositNext">Next</a>
                </div>
            </div>
        )
    }
}

export default withRouter(Deposit)
