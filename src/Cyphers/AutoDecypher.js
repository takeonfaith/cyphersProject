var letterFreq = [
	{
		letter:"e", 
		freq: 11.9
	},
	{
		letter:"t", 
		freq: 7.04,
	},
	{
		letter:"a", 
		freq: 6.79
	},
	{
		letter:"i", 
		freq: 6.36
	},
	{
		letter:"r", 
		freq: 6.10
	},
	{
		letter:"o", 
		freq: 5.41
	},
	{
		letter:"n", 
		freq: 4.90
	},
	{
		letter:"l", 
		freq: 4.73
	},
	{
		letter:"s", 
		freq: 3.87
	},
	{
		letter:"h", 
		freq: 3.78
	},
	{
		letter:"d", 
		freq: 3.44
	},
	{
		letter:"c", 
		freq: 2.32,
	},
	{
		letter:"m", 
		freq: 2.15
	},
	{
		letter:"u", 
		freq: 2.06
	},
	{
		letter:"f", 
		freq: 1.89
	},
	{
		letter:"p", 
		freq: 1.89
	},
	{
		letter:"g", 
		freq: 1.80
	},
	{
		letter:"b", 
		freq: 1.72
	},
	{
		letter:"y", 
		freq: 1.46
	},
	{
		letter:"w", 
		freq: 1.12
	},
	{
		letter:"k", 
		freq: 0.601
	},
	{
		letter:"v", 
		freq: 0.0859
	},
	{
		letter:"j", 
		freq: 0.0859
	},
	{
		letter:"x", 
		freq: 0.0859
	},
	{
		letter:"z", 
		freq: 0.08
	},
	{
		letter:"y", 
		freq: 0.07
	}
]



function findNewLetter(letter, realFreq, staticFreq){
	
}

function AutoDecypher(text, freqObject) {
	var resultSuggestion = " "
	text = text.toLowerCase()
	for (let i = 0; i < text.length; i++) {
		if(text.substr(i, 1) != " " && text.substr(i, 1) != ""){

			Object.keys(freqObject).map(function(key, index) {
				if(freqObject[key].letter == text.substr(i, 1)){
					resultSuggestion += letterFreq[key].letter
					
				}
				
			})
		}
		else{
			resultSuggestion += " "
		}
		// resultSuggestion += 
		
	}
	console.log(resultSuggestion)
	return resultSuggestion
}

export default AutoDecypher
