import React from "react"

import {
	Accordion,
	AccordionItem,
	AccordionItemTitle,
	AccordionItemBody
} from "react-accessible-accordion"

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css"
import "./style.css"

import investor from "./images/investor.svg"
import business from "./images/business.svg"
import student from "./images/student.svg"
import baby from "./images/baby.svg"
import professional from "./images/professional.svg"

const AccountAccordion = ({ accountTypes = {} , registerAction}) => (
	<Accordion className="accordion">
		{Object.keys(accountTypes).map((accountType, i) => (
			<AccordionItem key={i}>
				<AccordionItemTitle
					className="accordion__header"
					style={{ background: accountTypes[accountType].color }}
				>
					<img src={investor} className="accordion__image" />
					<h3>{accountTypes[accountType].name}</h3>
				</AccordionItemTitle>
				<AccordionItemBody>
					<p>{accountTypes[accountType].slug}</p>
					<div className="btnContainer">
						<button
							className="btn success"
							style={{
								borderColor: accountTypes[accountType].color,
								color: accountTypes[accountType].color
							}}
							onClick={() => { registerAction(accountTypes[accountType])}}
						>
							register
						</button>
					</div>
				</AccordionItemBody>
			</AccordionItem>
		))}
	</Accordion>
)

export default AccountAccordion
