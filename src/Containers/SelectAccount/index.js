import React, { Component } from "react"

import  "./style.css"


import AccordionComponent from "../../Components/Accordion"
class SelectAccount extends Component {
	render() {
		
		const data = {
			do: "a deer, a female deer ",
			re: "a drop of golden sun ",
			me: "a name, I call myself ",
			fa: "a long long way to run "
		}
		return (
			<div className="parent">
				<div className="child">
					<AccordionComponent  data={data}/>
					
				</div>
			</div>
		)
	}
}

export default SelectAccount
