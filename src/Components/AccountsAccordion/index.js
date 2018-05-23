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
// import business from "./images/business.svg"
// import student from "./images/student.svg"
// import baby from "./images/baby.svg"
// import professional from "./images/professional.svg"

const AccountAccordion = ({ accountTypes = {}, registerAction }) => (
	<Accordion className="accordion">
		{accountTypes.map((accountType, i) => (
			<AccordionItem key={i}>
				<AccordionItemTitle
					className="accordion__header"
					style={{ background: accountType.color }}
				>
					<img src={investor} className="accordion__image" />
					<h3>{accountType.name}</h3>
				</AccordionItemTitle>
				<AccordionItemBody>
					<p className="label" style={{ color: accountType.color }}>
						{accountType.slug}
					</p>
					<p>{accountType.description}</p>

					<div className="accountDetails">
						<p>
							<span className="label" style={{ color: accountType.color }}>
								registration fee
							</span>
							{accountType.registration_fee}
						</p>
						<p>
							<span className="label" style={{ color: accountType.color }}>
								share capital:
							</span>
							{accountType.share_capital}
						</p>
						<p>
							<span className="label" style={{ color: accountType.color }}>
								monthly contribution:
							</span>
							{accountType.monthly_contribution}
						</p>
					</div>
					{accountType.options.map((option, i) => (
						<div className="btnContainer" key={i}>
							<button
								className="btn success"
								style={{
									borderColor: accountType.color,
									color: accountType.color
								}}
								onClick={() => {
									registerAction(accountType)
								}}
							>
								{"register as " + option}
							</button>
						</div>
					))}
				</AccordionItemBody>
			</AccordionItem>
		))}
	</Accordion>
)

export default AccountAccordion
