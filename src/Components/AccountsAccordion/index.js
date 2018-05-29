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
					<p className="accountSlug">{accountType.slug}</p>
				</AccordionItemTitle>
				<AccordionItemBody>
					<p>{accountType.description}</p>

					<div className="accountDetails">
						<table>
							<tbody>
								<tr>
									<td className="label" style={{ color: accountType.color }}>
										Registration fee:
									</td>
									<td className="pricing">
										{"KHS " + accountType.registration_fee}
									</td>
								</tr>
								<tr>
									<td className="label" style={{ color: accountType.color }}>
										Share capital:
									</td>
									<td className="pricing">
										{"KHS " + accountType.share_capital}
									</td>
								</tr>
								<tr>
									<td className="label" style={{ color: accountType.color }}>
										Monthly contribution:
									</td>
									<td className="pricing">
										{"KHS " + accountType.monthly_fee}
									</td>
								</tr>
							</tbody>
						</table>
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
								{"register" + ( i ===0 ?(""):( " as "+ memberType.name))}
							</button>
						</div>
					))}
				</AccordionItemBody>
			</AccordionItem>
		))}
	</Accordion>
)

export default AccountAccordion
