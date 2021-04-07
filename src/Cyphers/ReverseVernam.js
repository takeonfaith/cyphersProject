
function check(number, a, b, len = 26){
	return number < a? b - ((a - Math.abs(number) -1) % len): number > b? a + ((Math.abs(number) - b-1) % len): number
}

function letterSubstitutuion(text, finalCypher, newText, otherSymbols, sign){
	var k = 0;
	for(var i = 0; i < text.length; i++){
		if(otherSymbols.includes(text.substr(i, 1))){
			newText+= text.substr(i, 1)
		}
		else{
			for(var j = 0; j < 26; j++){
				if(sign == 1){
					if(check(text.substr(i, 1).charCodeAt(0) + ((97 + j)%97), 97, 122) == finalCypher.substr(i, 1).charCodeAt(0)){
						newText += String.fromCharCode(97 + j)
					}
				}
				else{
					if(check(text.substr(i, 1).charCodeAt(0) - ((97 + j)%97), 97, 122) == finalCypher.substr(i, 1).charCodeAt(0)){
						newText += String.fromCharCode(97 + j)
					}
				}
			}
		}
	}
	return newText
}

function ReverseVernam(text, lang, finalCypher, action) {
	var newText = ""
	var otherSymbols = [",", ".", " ", "-", "\\", "[", "]", "(", ")", "?", "!", "'"]
	text = text.toLowerCase()
	text = text.replace(/\s+/g, '');
	if(action == "Code"){
		newText = letterSubstitutuion(text, finalCypher, newText, otherSymbols, 1)
	}
	else if(action == "Decode"){
		newText = letterSubstitutuion(text, finalCypher, newText, otherSymbols, 0)
	}
	
	return newText
}

export default ReverseVernam
