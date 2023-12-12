// highScore.js 
/* var highscoreslist = document.querySelector("#highscores");
var highscores = JSON.parse( window.localStorage.getItem( "highscores") ) || []; 
console.log( highscores.map(newScore =>
    {
        return `<li> ${newScore.initials}-${newScore.score}</li>`;

    })
.join("")
);  */
 function saveHighscore() { 
	var initials = initialsEl.value.trim(); 
	if (initials !== "") { 
		var highscores = 
			JSON.parse( 
				window.localStorage.getItem( 
					"highscores"
				) 
			) || []; 
		var newScore = { 
			score: time, 
			initials: initials, 
		}; 
		highscores.push(newScore); 
		window.localStorage.setItem( 
			"highscores", 
			JSON.stringify(highscores) 
		); 
        console.log(highscores);
		alert( 
			"Your Score has been Submitted"
		); 
	} 
    
} 
saveHighscore()
initialsEl.onkeyup = checkForEnter; 
submitBtn.onclick = saveHighscore; 