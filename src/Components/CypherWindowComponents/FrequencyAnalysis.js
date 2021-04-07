import React from 'react'

function FrequencyAnalysis(props) {
	return (
		<div className="FrequencyAnalysis" style = {props.openFreqAnalysis? {zIndex:"1", opacity:"1", transform:"translateX(0)"}:{zIndex:"-1", opacity:"0", transform:"translateX(50%)"}}>
			<textarea value = {props.resultAnalysis} readOnly name="" id=""></textarea>
		</div>
	)
}

export default FrequencyAnalysis
