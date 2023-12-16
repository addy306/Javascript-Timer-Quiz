// Score.js 

// Declare variables
var highScoresCont = document.querySelector('#highscores');
var clearScoresBtn = document.querySelector('#clear');

// This is a function to display scores
function displayScores() {
	var highscores = JSON.parse( window.localStorage.getItem( "highscores") ) || [];
	for (var i = 0; i < highscores.length; i++) {
		var highScoreItem = document.createElement('li');
		highScoreItem.textContent = `score: ${highscores[i].score} initials: ${highscores[i].initials}`
		highScoresCont.appendChild(highScoreItem)	
	}
}
displayScores() //calling display scores function

//This function clears scores
function clearScores() {
	highScoresCont.innerHTML = ''
}
// Add event listner for clear scores button
clearScoresBtn.onclick = clearScores;