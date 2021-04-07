
function FreqAnalysis(text, bool) {
	if(bool){
		var freqArray = [], lettersArray =[];
		var freqObject = []
		var count = 0
		var freqText = ""
		text = text.toLowerCase()
		for(var j = 0; j < 26; j++){
			freqArray[j] = 0
			lettersArray[j] = String.fromCharCode(97 + j)
		}
	
		for(var i = 0; i < text.length; i++){
			for(var j = 0; j < 26; j++){
				if(parseInt(text.substr(i, 1).charCodeAt(0)) == 97 + j){
					freqArray[j]++;
				}
			}
		}
	
		for(var i = 0; i < 26; i++){
			for(var j = 0; j < 25 - i; j++){
				if(freqArray[j] < freqArray[j + 1]){
					var t = freqArray[j]
					var c = lettersArray[j]
					freqArray[j] = freqArray[j + 1]
					lettersArray[j] = lettersArray[j+1]
					freqArray[j + 1] = t
					lettersArray[j+1] = c
				}
			}
		}
		freqText += '\n'
		for(var i = 0; i < 26; i++){
			if(freqArray[i] != 0){
				freqObject.push({letter: lettersArray[i], freq: ((freqArray[i]/text.length)*100).toPrecision(3)})
			}
		}
		return freqObject
	}
	else return ""
}

export default FreqAnalysis
