let is_the_winner
function Button() {
	is_the_winner =  Math.floor(Math.random() * 3 + 1)
	alert(is_the_winner)	
}

function fiftyFifty(nrOrd, attempt) {
	if (nrOrd === attempt) {
		document.getElementById(nrOrd).innerHTML = "You won"
	} else {
		document.getElementById(nrOrd).innerHTML = "You lose"
	}
}	
