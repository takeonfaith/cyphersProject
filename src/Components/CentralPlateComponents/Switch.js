import React from 'react'

function Switch(props) {
	return (
		<div className="SwitchContainer">
			<h4>{props.title}</h4>
			<div className={props.class} onClick={props.func}>
				<div className="yesOrNo">
					<span style={
						props.bool == false?
						{color:"#fff"}:
						{}
					}>No</span>
					<span style={
						props.bool == true?
						{color:"#fff"}:
						{}
					}>Yes</span>
					<div className="switchCircle" style={
						props.bool == true?
						{marginLeft:"50%"}:
						{marginRight:"50%", background:"grey"}
					}>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Switch
