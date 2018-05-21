import React, { Component } from "react"

import styles from "./style.css"

import Button from "../../Components/Button"

class SelectAccount extends Component {
	render() {
		let { parent, child, primaryText, secondaryText, buttonContainer } = styles
		return (
			<div className={parent}>
				<div className={child}>
					<div className={buttonContainer}>
						<Button
							children={
								<div >
									<div>
										<h3 className={primaryText}>INVESTOR</h3>
									</div>
									<div>
										<p className={secondaryText}>Terabyte</p>
									</div>
								</div>
							}
							backgroundColor={"#b32017"}
							foregroundColor={"#ffffff"}
							raised={true}
							clickAction={() => {}}
						/>
					</div>					
					<div className={buttonContainer}>
						<Button
							children={
								<div >
									<div>
										<h3 className={primaryText}>BUSINESS</h3>
									</div>
									<div>
										<p className={secondaryText}>Gigabyte</p>
									</div>
								</div>
							}
							backgroundColor={"#b32017"}
							foregroundColor={"#ffffff"}
							raised={true}
							clickAction={() => {}}
						/>
					</div>					
					<div className={buttonContainer}>
						<Button
							children={
								<div >
									<div>
										<h3 className={primaryText}>PROFESSIONAL</h3>
									</div>
									<div>
										<p className={secondaryText}>Megabyte</p>
									</div>
								</div>
							}
							backgroundColor={"#b32017"}
							foregroundColor={"#ffffff"}
							raised={true}
							clickAction={() => {}}
						/>
					</div>					
					<div className={buttonContainer}>
						<Button
							children={
								<div >
									<div>
										<h3 className={primaryText}>STUDENT</h3>
									</div>
									<div>
										<p className={secondaryText}>Kilobyte</p>
									</div>
								</div>
							}
							backgroundColor={"#b32017"}
							foregroundColor={"#ffffff"}
							raised={true}
							clickAction={() => {}}
						/>
					</div>					
					<div className={buttonContainer}>
						<Button
							children={
								<div >
									<div>
										<h3 className={primaryText}>FUTURES</h3>
									</div>
									<div>
										<p className={secondaryText}>Microbyte</p>
									</div>
								</div>
							}
							backgroundColor={"#b32017"}
							foregroundColor={"#ffffff"}
							raised={true}
							clickAction={() => {}}
						/>
					</div>					
				</div>
			</div>
		)
	}
}

export default SelectAccount
