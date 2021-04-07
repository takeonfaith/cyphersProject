
function check(number, a, b, len = 26){
	return number < a? b - ((a - Math.abs(number) -1) % len): number > b? a + ((Math.abs(number) - b-1) % len): number
}

function letterSubstitutuion(text, keyword, newText, otherSymbols, sign){
	var k = 0;
	for(var i = 0; i < text.length; i++){
		if(otherSymbols.includes(text.substr(i, 1))){
			newText+= text.substr(i, 1)
		}
		else{
			console.log(text.substr(i, 1).charCodeAt(0) + "("+text.substr(i, 1)+")")
			var oldLetterNum = sign?parseInt(text.substr(i, 1).charCodeAt(0)) + (parseInt(keyword.substr(k, 1).charCodeAt(0))%97):parseInt(text.substr(i, 1).charCodeAt(0)) - (parseInt(keyword.substr(k, 1).charCodeAt(0))%97)
			var newLetterNum = check(oldLetterNum, 97, 122)
			newText += String.fromCharCode(check(newLetterNum, 97, 122))
			k++;
			if(k == keyword.length) k = 0
		}
	}
	console.log("New Text: "+newText)
	return newText
}

function normalize(text){
	text = text.toLowerCase()
	text = text.replace(/\s+/g, '')
	return text
}

function Vernam(text, lang, keyword, action) {
	var newText = ""
	var otherSymbols = [",", ".", " ", "-", "\\", "[", "]", "(", ")", "?", "!", "'"]
	keyword = normalize(keyword)
	text = normalize(text)
	if(action == "Code"){
		newText = letterSubstitutuion(text, keyword, newText, otherSymbols, 1)
	}
	else if(action == "Decode"){
		newText = letterSubstitutuion(text, keyword, newText, otherSymbols, 0)
	}
	
	return newText
}

export default Vernam
