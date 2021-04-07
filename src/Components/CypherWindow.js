import React from 'react'
import '../Styles/CypherWindow.css'
import FrequencyAnalysis from './CypherWindowComponents/FrequencyAnalysis'
function CypherWindow(props) {
	function closeMenu(){
		props.cypherWindowCallBackFunc(!props.cypherWindow)
	}

	function openFreqAnalysis(){
		if(props.freqBool){
			props.openFreqAnalysisCallBackFunc(!props.openFreqAnalysis)
		}
		
	}
	return (
		<div className = "CypherWindow" style={
			!props.cypherWindow?
			{
				opacity: 0,
				transform: "translateY(0%)  scale(.9)",
				zIndex: "-1",
				filter:"blur(20px)",
				borderRadius:"100px"
			}:
			{
				opacity: 1,
				transform: "translateY(0%) scale(1)",
				zIndex: "2",
				filter:"blur(0px)",
				borderRadius:"20px"
			}
		}>
			<div className="titleAndClose">
				<div className = "titleAndInfo">
					<h1>Result of the 
						<span style = {{marginLeft: "10px", borderRadius:"10px",padding:"0 10px",color: "#fff", background:"var(--btnColor)"}}>{props.userText.substr(0, 10)}{props.userText.length >= 8?"...":""}</span>
						<div className = "cypherInfo">{props.action}</div>
						<div className = "cypherInfo">{props.cypher}</div>
					</h1>
					
				</div>

				<div className="cypherWindowBtns">
					<div className="freqAnalysisBtn" 
						onClick = {openFreqAnalysis} 
						style = 
						{
							props.cypher == "Caesar"?
							props.openFreqAnalysis?{transform:"scale(.9)"}:
							props.freqBool?
							{}:
							{
								opacity:".7"
							}:
							{
								display:"none"
							}
						}
					>
						<img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_statistics-256.png" alt=""/>
					</div>
					<div className="closeBtn">
						<img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_exit-256.png" alt="" onClick={closeMenu}/>
					</div>
				</div>
			</div>
			<div className="resultText">
				<FrequencyAnalysis 
					resultAnalysis = {props.resultAnalysis} 
					openFreqAnalysis = {props.openFreqAnalysis}
					freqBool = {props.freqBool}
				/>
				<textarea value = {props.resultText} readOnly name="" id=""></textarea>
			</div>
		</div>
	)
}

export default CypherWindow
