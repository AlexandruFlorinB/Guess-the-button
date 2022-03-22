function Button() {
	return Math.floor(Math.random() * 3 + 1)
}

function fiftyFifty(attempt) {
	let selectButton = Button()
	if (attempt === selectButton) {
		document.getElementById(attempt).innerHTML="You won"
	} else {
		document.getElementById(attempt).innerHTML="You lose"
	}
}
