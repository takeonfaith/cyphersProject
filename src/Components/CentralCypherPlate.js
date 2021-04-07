import React, {useState} from 'react'
import '../Styles/CentralCypherPlate.css'
import LeftSide from './CentralPlateComponents/LeftSide';
import RightSide from './CentralPlateComponents/RightSide';
function CentralCypherPlate(props) {

	return (
		<div className="CentralCypherPlate">
			<LeftSide 
				cypher = {props.cypher} 
				action = {props.action}
				langCallBackFunc = {props.langCallBackFunc}
				shiftNumBool = {props.shiftNumBool} 
				keyword = {props.keyword}
				freqBool = {props.freqBool}
				userText = {props.userText}
				cypherWindow = {props.cypherWindow}
				darkTheme = {props.darkTheme}
				freqCallBackFunc = {props.freqCallBackFunc}
				shiftBoolCallBackFunc = {props.shiftBoolCallBackFunc}
				cypherCallBackFunc = {props.cypherCallBackFunc}
				actionCallBackFunc = {props.actionCallBackFunc}
				cypherWindowCallBackFunc = {props.cypherWindowCallBackFunc}
				themeCallBackFunc = {props.themeCallBackFunc}
				messageCallBackFunc = {props.messageCallBackFunc}
			/>
			<RightSide
				cypher = {props.cypher} 
				action = {props.action}
				shiftNumBool = {props.shiftNumBool}
				keyword = {props.keyword}
				shiftNumValue = {props.shiftNumValue}
				userText = {props.userText}
				keywordCallBackFunc = {props.keywordCallBackFunc}
				shiftValueCallBackFunc = {props.shiftValueCallBackFunc}
				userTextCallBackFunc = {props.userTextCallBackFunc}
			/>
		</div>
	)
}

export default CentralCypherPlate
