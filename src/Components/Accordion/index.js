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

const Example = () => (
	<Accordion>
		<AccordionItem>
			<AccordionItemTitle className="accordion__header">
				<h3>INVESTOR</h3>
			</AccordionItemTitle>
			<AccordionItemBody>
				<p>Terabyte</p>
			</AccordionItemBody>
		</AccordionItem>
		<AccordionItem>
			<AccordionItemTitle className="accordion__header">
				<h3>BUSINESS</h3>				
			</AccordionItemTitle>
			<AccordionItemBody>
				<p>Gigabyte</p>
			</AccordionItemBody>
		</AccordionItem>
		<AccordionItem>
			<AccordionItemTitle className="accordion__header">
				<h3>PROFESSIONAL</h3>				
			</AccordionItemTitle>
			<AccordionItemBody>
				<p>Megabyte</p>
			</AccordionItemBody>
		</AccordionItem>
		<AccordionItem>
			<AccordionItemTitle className="accordion__header">
				<h3>STUDENT</h3>				
			</AccordionItemTitle>
			<AccordionItemBody>
				<p>Kilobyte</p>
			</AccordionItemBody>
		</AccordionItem>
		<AccordionItem>
			<AccordionItemTitle className="accordion__header">
				<h3>FUTURES</h3>				
			</AccordionItemTitle>
			<AccordionItemBody>
				<p>Microbyte</p>
			</AccordionItemBody>
		</AccordionItem>
	</Accordion>
)

export default Example
