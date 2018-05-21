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

const Example = () => (
	<Accordion className="accordion">
		<AccordionItem>
			<AccordionItemTitle className="accordion__header">
				<img src={investor} className="accordion__image" />
				<h3>INVESTOR</h3>
			</AccordionItemTitle>
			<AccordionItemBody>
				<p>Terabyte</p>
			</AccordionItemBody>
		</AccordionItem>
		<AccordionItem>
			<AccordionItemTitle
				className="accordion__header"
				style={{ background: "#fbc531" }}
			>
				<img src={business} className="accordion__image" />
				<h3>BUSINESS</h3>
			</AccordionItemTitle>
			<AccordionItemBody>
				<p>Gigabyte</p>
			</AccordionItemBody>
		</AccordionItem>
		<AccordionItem>
			<AccordionItemTitle
				className="accordion__header"
				style={{ background: "#353b48" }}
			>
				<img src={professional} className="accordion__image" />
				<h3>PROFESSIONAL</h3>
			</AccordionItemTitle>
			<AccordionItemBody>
				<p>Megabyte</p>
			</AccordionItemBody>
		</AccordionItem>
		<AccordionItem>
			<AccordionItemTitle
				className="accordion__header"
				style={{ background: "#8c7ae6" }}
			>
				<img src={student} className="accordion__image" />
				<h3>STUDENT</h3>
			</AccordionItemTitle>
			<AccordionItemBody>
				<p>Kilobyte</p>
			</AccordionItemBody>
		</AccordionItem>
		<AccordionItem>
			<AccordionItemTitle
				className="accordion__header"
				style={{ background: "#44bd32" }}
			>
				<img src={baby} className="accordion__image" />
				<h3>FUTURES</h3>
			</AccordionItemTitle>
			<AccordionItemBody>
				<p>Microbyte</p>
			</AccordionItemBody>
		</AccordionItem>
	</Accordion>
)

export default Example
