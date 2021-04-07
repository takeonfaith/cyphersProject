import React from 'react'
import Switch from './Switch';
import ThemeToggle from './ThemeToggle';
import '../../Styles/LeftSide.css'
function LeftSide(props) {
	
	function changeCypher(event){
		props.cypherCallBackFunc(event.target.value);
	}

	function changeAction(event){
		props.actionCallBackFunc(event.target.value);
	}

	function changeLang(event){
		props.langCallBackFunc(event.target.value);
	}	

	function shiftSwitch(){
		props.shiftBoolCallBackFunc(!props.shiftNumBool)
	}

	function freqSwitch(){
		props.freqCallBackFunc(!props.freqBool)
	}

	function openCypherWindow(){
		console.log(props.userText)
		if(props.cypher == "ReverseVernam" && props.keyword.length != props.userText.replace(/ /g, "").length){
			props.messageCallBackFunc("The length of your result cypher must me = your text")
		}
		else{
			if(props.userText != "")
				props.cypherWindowCallBackFunc(!props.cypherWindow)
			
			else props.messageCallBackFunc("You need to type something");
		}
		
	}

	
	return (
		<div className="leftSide">
			<ThemeToggle darkTheme = {props.darkTheme} themeCallBackFunc = {props.themeCallBackFunc}/>
			<h1>Cypher Program</h1>
			<form>
				<div className="cypherOptions">	
					<select value = {props.cypher} onChange={changeCypher}>
						<option value="Caesar">Caesar Cypher</option>
						<option value="Vernam" >Vernam Cypher</option>
						<option value="ReverseVernam" >Reverse Vernam Cypher</option>
						<option value="AutoDecypher" >Auto Decypher</option>
					</select>
					<select value = {props.action} onChange={changeAction}>
						<option value="Code">Code</option>
						<option value="Decode">Decode</option>
					</select>
					<select value = {props.lang} onChange={changeLang}>
						<option value="Eng">English Alphabet</option>
						<option value="Rus">Russian Alphabet</option>
						<option value="EngNum">English Alphabet+Nums</option>
					</select>
					<div className="Switches" style={
						props.cypher == "Caesar"?{}:{display:"none"}}>
						<Switch 
							title = "Shift"
							class="shiftNumSwitch" 
							func = {shiftSwitch}
							bool = {props.shiftNumBool}
						/>
						<Switch 
							title = "Frequency"
							class="shiftNumSwitch" 
							func = {freqSwitch}
							bool = {props.freqBool}
						/>
					</div>
					
						
				</div>
				<input type="button" value="Let's go!" onClick={openCypherWindow}/>
			</form>
		</div>
	)
}

export default LeftSide
