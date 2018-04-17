import React from 'react'
import styles from "./style.css"

class Activate extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            noOfCharsInCode: 7
        }
    }

    onPasteHandler = (e) => {
        
        let text = e.clipboardData.getData('Text')
  
        for (let i = 0; i <this.state.noOfCharsInCode; i++ ){
            if(!(text.length > i) || (!(this.state.noOfCharsInCode > i ))) return;
            let inp = document.getElementById(`code_input_${i}`)
            inp.value = text[i]
        }
    }

    focusNext = (index) => {
        if(!(this.state.noOfCharsInCode > index + 1)) return
        let curInp = document.getElementById(`code_input_${index}`)

        if(curInp.value == "") return
        let inp = document.getElementById(`code_input_${index +1}`)
        inp.focus()
    }

    onKeyUpHandler = (e) => {
        let keyCode = e.keyCode
        switch(keyCode){
            case 37:
            case 39:
                var rx = /^code_input_(.*)$/
                let dir = keyCode - 38;
                let id =  parseInt( rx.exec(e.target.id)[1]) + dir
                let inp = document.getElementById(`code_input_${id}`)
                if(inp == null) break;
                inp.focus()
            default:
                break;
        }
    }

    onFocusHandler = (e) => {
        e.target.select()
    }
    

    onSubmitHandler = (e) => {
        e.preventDefault()
        let code = ""

        for (let i = 0; i <this.state.noOfCharsInCode; i++ ){
            let inp = document.getElementById(`code_input_${i}`)
            code = code + inp.value 
        }

        // The actual code
        // console.log(code)

    }
    render(){
        let inputs = []
        for (let i = 0; i <this.state.noOfCharsInCode; i++ ){
            inputs.push(<input type="text" key={i} id={`code_input_${i}`} 
                onKeyUp={this.onKeyUpHandler} onFocus={this.onFocusHandler} required
                onPaste={this.onPasteHandler} maxLength="1" onChange={() => this.focusNext(i)}/>)
        }
        return(
        <div className={styles.activatePage}>
            <div className={styles.topBar}>
                <span className={styles.arrowBack}>&#8592;</span>
                Insert Activation Code
            </div>
            <form onSubmit={this.onSubmitHandler}>
                <div className={styles.pageContent}>
                    <div className={styles.activateCodeWrapper}>
                    {inputs}
                    </div>
                </div>
                <input type="submit" className={styles.depositNext} value="Next"/>
            </form>
        </div>
        )
    }
}


export default Activate