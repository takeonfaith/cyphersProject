function check(number, a, b, len = 26){
	return number < a? b - ((a - Math.abs(number) -1) % len): number > b? a + ((Math.abs(number) - b-1) % len): number
}

function letterSubstitutuion(text, shiftNum, newText, otherSymbols, sign){
	for(var i = 0; i < text.length; i++){
		if(otherSymbols.includes(text.substr(i, 1))){
			newText+= text.substr(i, 1)
		}
		else{
			var oldLetterNum = sign? parseInt((text.substr(i, 1).charCodeAt(0))) + parseInt(shiftNum): parseInt((text.substr(i, 1).charCodeAt(0))) - parseInt(shiftNum)
			var newLetterNum = check(oldLetterNum, 97, 122)
			newText += String.fromCharCode(check(newLetterNum, 97, 122))
		}
	}
	return newText
}

function letterIncrementSubstitutuion(text, newText, otherSymbols, sign){
	for(var i = 0; i < 26; i++){
		newText += "[" + (i) + "] "
		for(var j = 0; j < text.length; j++){
			if(otherSymbols.includes(text.substr(i, 1))){
				newText += text.substr(j, 1)
			}
			else{
				var oldLetterNum = sign? parseInt((text.substr(j, 1).charCodeAt(0))) + parseInt(i): parseInt((text.substr(j, 1).charCodeAt(0))) - parseInt(i)
				var newLetterNum = check(oldLetterNum, 97, 122)
				newText += String.fromCharCode(check(newLetterNum, 97, 122))
			}
		}
		newText += "\n"
	}
	return newText
}

function Caesar(text, lang, shiftNumBool, shiftNum, action) {
	var engAlphaBet = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"]
	var UpperEngAlphaBet = engAlphaBet.map(letter => letter.toUpperCase())
	text = text.toLowerCase()
	var newText = "";
	var otherSymbols = [",", ".", " ", "-", "\\", "[", "]", "(", ")"]
	text = text.replace(/\s+/g, '');
	if(action == "Code"){
		newText = "";
		if(!shiftNumBool){
			newText = letterSubstitutuion(text, shiftNum, newText, otherSymbols, 1)
		}
		else{
			newText = letterIncrementSubstitutuion(text, newText, otherSymbols, 1)
		}
	}
	else if(action == "Decode"){
		newText = "";
		if(!shiftNumBool){
			newText = letterSubstitutuion(text, shiftNum, newText, otherSymbols, 0)
		}
		else{
			newText = letterIncrementSubstitutuion(text, newText, otherSymbols, 0)
		}
	}
	return newText
}

export default Caesar
