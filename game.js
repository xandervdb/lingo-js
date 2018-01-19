// Pak een willekeurig getal tussen 0 en 479
var random = Math.floor( Math.random() * 479 );
// Kies het woord op die positie in de words array
var answer = words[random];
// Hak het woord op in losse letters, door .split('') 
// uit te voeren op het answer
var answerArray = answer.split('');
// Zet het antwoord in de console
console.log(answer);
var rowCount = 0

function check(){


	for(var i = 0; i < 5; i++){
		var input = document.getElementById("letter"+rowCount+"_" + i);
		console.log(input.value);

		//Maakt geel
		if (answerArray.includes(input.value)) {
            input.style.backgroundColor = 'yellow';
            input.style.borderRadius = '50px'
        }

		//Maakt rood
		if(input.value == answerArray[i]){
			input.style.backgroundColor = "red";
		}
	}
	rowCount++

	//game over

	if (rowCount == 5) {
		 alert("Je hebt het woord niet geraden! Druk op F5 om Het opnieuw te proberen. Het woord was: " + answer)
		  title.innerHTML = "Game over"
	}

	// Woord goed
	var goed = document.getElementById("letter"+rowCount+"_" +i)
	for (var i = 0; i < 5; i++){
		if (goed.value == answerArray[i]) {
			goed = true
		}
		if (goed == true){
			alert("adasdsa")
		}
	}
}

function load(){
	var input = document.getElementById("letter0_0");
	input.value = answerArray[0]
}