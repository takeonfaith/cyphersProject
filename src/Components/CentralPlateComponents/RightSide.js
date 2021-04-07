import React from 'react'
import '../../Styles/RightSide.css'
function RightSide(props) {
	function shiftNumChange(event){
		props.shiftValueCallBackFunc(event.target.value)
	}

	function textChange(event){
		props.userTextCallBackFunc(event.target.value)
	}

	function keywordChange(event){
		props.keywordCallBackFunc(event.target.value)
	}
	console.log(props.cypher)
	var inputImgURL
	var text
	if(props.cypher == "Caesar"){
		text = "shift"
		inputImgURL = "https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-256.png"
	}
	else if(props.cypher == "Vernam"){
		text = "keyword"
		inputImgURL = "https://cdn2.iconfinder.com/data/icons/ui-basic-glyph/512/UI_Basic_GLYPH-87-256.png"
	}
	else if(props.cypher == "ReverseVernam"){
		text = "final cypher"
		inputImgURL = "https://cdn4.iconfinder.com/data/icons/standard-free-icons/139/Safety01-256.png"
	}
	return (
		<div className="rightSide">
			<form style = {props.shiftNumBool && props.cypher == "Caesar"? {justifyContent:"flex-end"}:{}}>
				<div className="messageLen" style = {props.cypher == "Caesar"?{display:"none"}:{}}>{props.keyword.length}</div>
				<img className = "inputImg" src={inputImgURL} alt="" style={props.shiftNumBool?{display:"none"}:{}}/>
				{props.cypher == "Caesar"? 
					<input type="number" max = {26} min = {0} style={props.shiftNumBool?{display:"none"}:{}} onChange={shiftNumChange} value={props.shiftNumValue} placeholder={"Enter " + text}/>:
					<input type="text" placeholder={"Enter " + text} onChange = {keywordChange} value = {props.keyword}/>
				}
				<div className = "bottomText">
					<div className="messageLen">{props.userText.replace(/ /g, "").length}</div>
					<textarea 
						value = {props.userText}
						type="text" 
						className="textInput"
						placeholder={props.action == "Code"? "Enter open message": "Enter Cypher"}
						onChange = {textChange}
					/>
				</div>
				
				
			</form>
		</div>
	)
}

export default RightSide
