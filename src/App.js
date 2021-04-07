import React, {useState} from 'react'
import './App.css';
import CentralCypherPlate from './Components/CentralCypherPlate';
import MessagePlate from './Components/CentralPlateComponents/MessagePlate';
import CypherWindow from './Components/CypherWindow';
import Caesar from './Cyphers/Caesar'
import Vernam from './Cyphers/Vernam'
import FreqAnalysis from './Cyphers/FreqAnalysis'
import { act } from 'react-dom/test-utils';
import ReverseVernam from './Cyphers/ReverseVernam';
import AutoDecypher from './Cyphers/AutoDecypher';

function App() {
  const [cypherWindow, setCypherWindow] = useState(false)
  const [message, setMessage] = useState("")
  const [darkTheme, setDarkTheme] = useState(true)
  const [cypher, setCypher] = useState("Caesar")
  const [action, setAction] = useState("Code")
  const [lang, setLang] = useState("Eng")
  const [shiftNumBool, setShiftNumBool] = useState(false)
  const [freqBool, setFreqBool] = useState(false)
  const [shiftNumValue, setShiftNumValue] = useState(0)
  const [keyword, setKeyword] = useState("somewordhere")
  const [userText, setUserText] = useState("")
  const [openFreqAnalysis, setopenFreqAnalysis] = useState(false)
  function cypherCallBackFunc(cypher){
    console.log(cypher)
    setCypher(cypher)
    if(cypher != "Caesar"){
      if(cypher == "AutoDecypher") setFreqBool(true)
      else setFreqBool(false)   
      
    }
    setMessage("Cypher has changed to " + cypher)
  }

  function actionCallBackFunc(action){
    console.log(action)
    setAction(action)
    setMessage("Action has changed to " + action)
  }

  function langCallBackFunc(lang){
    console.log(lang)
    setLang(lang)
    setMessage("Language is now " + lang)
  }

  function shiftBoolCallBackFunc(bool){
    setShiftNumBool(bool)
    setMessage("Shift number is now " + (bool? "auto":"manual"))
  }

  function freqCallBackFunc(bool){
    setFreqBool(bool)
    if(!bool) setopenFreqAnalysis(false)
    else setopenFreqAnalysis(true)
    
    setMessage("Frequency Analysis is now " + (bool?"on":"off"))
  }

  function shiftValueCallBackFunc(shift){
    console.log(shift)
    setShiftNumValue(shift)
  }

  function keywordCallBackFunc(keyword){
    console.log(keyword)
    setKeyword(keyword)
  }

  function cypherWindowCallBackFunc(bool){
    console.log(bool)
    setCypherWindow(bool)
  }

  function userTextCallBackFunc(text){
    console.log(text)
    setUserText(text)
  }

  function themeCallBackFunc(bool){
    console.log(bool)
    setDarkTheme(bool)
    setMessage("Theme has changed to " + (bool?"dark":"light"))
  }

  function messageCallBackFunc(m){
    setMessage(m)
  }

  function openFreqAnalysisCallBackFunc(bool){
    setopenFreqAnalysis(bool)
    

  }



  if(darkTheme) document.documentElement.setAttribute('color-theme', 'dark')
  else document.documentElement.setAttribute('color-theme', 'light')

  var resultText
  var analysisObject = FreqAnalysis(userText, freqBool)
  console.log("What am i: " + analysisObject)
  var resultAnalysis = "" 
  Object.keys(analysisObject).map(function(key, index) {
    resultAnalysis += analysisObject[key].letter + ": " + analysisObject[key].freq + '%\n';
  });
  if(cypher == "Caesar") resultText =  Caesar(userText, lang, shiftNumBool, shiftNumValue, action)
  else if(cypher == "Vernam") resultText = Vernam(userText, lang, keyword, action)
  else if(cypher == "ReverseVernam") resultText = ReverseVernam(userText, lang, keyword, action)
  else if(cypher == "AutoDecypher") resultText = AutoDecypher(userText, analysisObject)
  

   
  var a = 0
  a+=1
  return (
    <div className="App">
      <div className ="wrapper" style = {cypherWindow?{filter:"brightness(0.3)"}:{}}>

        <CentralCypherPlate 
          cypher = {cypher} 
          action = {action}
          lang = {lang}
          shiftNumBool = {shiftNumBool} 
          freqBool = {freqBool}
          shiftNumValue = {shiftNumValue} 
          cypherWindow = {cypherWindow}
          userText = {userText}
          keyword = {keyword}
          darkTheme = {darkTheme}
          freqCallBackFunc = {freqCallBackFunc}
          shiftBoolCallBackFunc = {shiftBoolCallBackFunc}
          langCallBackFunc = {langCallBackFunc}
          shiftValueCallBackFunc = {shiftValueCallBackFunc}
          cypherCallBackFunc = {cypherCallBackFunc}
          actionCallBackFunc = {actionCallBackFunc}
          keywordCallBackFunc = {keywordCallBackFunc}
          cypherWindowCallBackFunc = {cypherWindowCallBackFunc}
          userTextCallBackFunc = {userTextCallBackFunc}
          themeCallBackFunc = {themeCallBackFunc}
          messageCallBackFunc = {messageCallBackFunc}
          />
        
        <MessagePlate message={message}/>
        <img
          className="bgImage" 
          src="https://products.ls.graphics/mesh-gradients/images/01.-Royal-Heath.jpg" alt=""/>
        {/* https://products.ls.graphics/mesh-gradients/images/19.-Can-Can_1.jpg */}
      </div>
      <CypherWindow
        cypher = {cypher}
        action = {action}
        userText = {userText}
        resultText = {resultText}
        cypherWindow = {cypherWindow}
        resultAnalysis = {resultAnalysis}
        freqBool = {freqBool}
        openFreqAnalysis = {openFreqAnalysis}
        cypherWindowCallBackFunc = {cypherWindowCallBackFunc}
        openFreqAnalysisCallBackFunc = {openFreqAnalysisCallBackFunc}
      />
    </div>
    
    
  );
}

export default App;
