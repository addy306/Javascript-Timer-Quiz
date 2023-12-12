// highScore.js 
var highscoreslist = document.querySelector("highscores");
var highscores = JSON.parse( window.localStorage.getItem( "highscores") ) || []; 
console.log(highscoreslist = highscores.map(score =>
    {
        return `<li> ${newScore.initials}-${newScore.score}</li>`;

    })
.join("")
);