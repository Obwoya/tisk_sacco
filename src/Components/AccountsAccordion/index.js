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




const AccountAccordion = ({ accountTypes = {}, registerAction }) => (
	<Accordion className="accordion">
		{accountTypes.map((accountType, i) => (
			<AccordionItem key={i}>
				<AccordionItemTitle
					className="accordion__header"
					style={{ background: accountType.color }}
				>
					<img src={accountType.thumbnail} className="accordion__image" />
					<h3>{accountType.display_name}</h3>
					<p>{accountType.slug}</p>
				</AccordionItemTitle>
				<AccordionItemBody>					
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
					{accountType.member_types.map((memberType, i) => (
						<div className="btnContainer" key={i}>
							<button
								className="btn success"
								style={{
									borderColor: accountType.color,
									color: accountType.color
								}}
								onClick={() => {
									registerAction(memberType)
								}}
							>
								{"register as " + memberType.name}
							</button>
						</div>
					))}
				</AccordionItemBody>
			</AccordionItem>
		))}
	</Accordion>
)

export default AccountAccordion
