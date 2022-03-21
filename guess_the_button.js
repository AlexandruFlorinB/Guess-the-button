function Button() {
	return Math.floor(Math.random() * 3 + 1)
}

function fiftyFifty(attempt) {
	let selectButton = Button()
	if (attempt === 1) {
		if (attempt === selectButton) {
			document.getElementById("myBtn1").innerHTML="You won"
		} else {
			document.getElementById("myBtn1").innerHTML="You lose"
		}

	} else if (attempt === 2) {
		if (attempt === selectButton) {
			document.getElementById("myBtn2").innerHTML="You won"
		} else {
			document.getElementById("myBtn2").innerHTML="You lose"
		}
		
	} else {
		if (attempt === selectButton) {
			document.getElementById("myBtn3").innerHTML="You won"
		} else {
			document.getElementById("myBtn3").innerHTML="You lose"
		}
	}
}