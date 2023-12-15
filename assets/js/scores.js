// Score.js 
var highScoresCont = document.querySelector('#highscores');
var clearScoresBtn = document.querySelector('#clear');

function displayScores() {
	var highscores = JSON.parse( window.localStorage.getItem( "highscores") ) || [];
	for (var i = 0; i < highscores.length; i++) {
		var highScoreItem = document.createElement('li');
		highScoreItem.textContent = `score: ${highscores[i].score} initials: ${highscores[i].initials}`
		highScoresCont.appendChild(highScoreItem)	
	}
}
displayScores()

function clearScores() {
	highScoresCont.innerHTML = ''
}

clearScoresBtn.onclick = clearScores;