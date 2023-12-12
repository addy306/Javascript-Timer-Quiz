// Retrieves the  JSON questions string from question.js and
// stores it as an array of questions
var questions = JSON.parse(localStorage.getItem("questions"));

//Get Dom Elements 

var questionsEl = 
	document.querySelector( 
		"#questions"
	);  

var timerEl = 
	document.querySelector("#timer"); 
var choicesEl = 
	document.querySelector("#choices"); 
var submitBtn = document.querySelector( 
	"#submit"
); 
var startBtn = 
	document.querySelector("#start"); 
var initialsEl = 
	document.querySelector("#initials"); 
var feedbackEl = document.querySelector( 
	"#feedback"
); 
var reStartBtn = 
	document.querySelector("#restart"); 
var landingScreenEl = 
    document.querySelector( 
        "#start-screen"
    ); 
var highscores = 
    JSON.parse( 
        window.localStorage.getItem( 
            "highscores"
        ) 
    ) || [];     

// Quiz's initial state 
var currentQuestionIndex = 0; 
var time = questions.length * 15; 
var timerId; 

// The start quiz function
function quizStart() { 
	timerId = setInterval( 
		clockTick, 
		1000 
	); 
	timerEl.textContent = time; 
	
	landingScreenEl.setAttribute( 
		"class", 
		"hide"
	); 
	questionsEl.removeAttribute( 
		"class"
	); 
	getQuestion(); 
} 

// Loop through array of questions and 
// Answers and create list with buttons 
function getQuestion() { 
	var currentQuestion = 
		questions[currentQuestionIndex]; 
	var questionEl = 
		document.getElementById( 
			"question-title"
		); 
	questionEl.textContent = 
		currentQuestion.question; 
	choicesEl.innerHTML = ""; 
	currentQuestion.options.forEach( 
		function (choice, i) { 
			var choiceBtn = 
				document.createElement( 
					"button"
				); 
			choiceBtn.setAttribute( 
				"value", 
				choice 
			); 
			choiceBtn.textContent = 
				i + 1 + ". " + choice; 
			choiceBtn.onclick = 
				questionClick; 
			choicesEl.appendChild( 
				choiceBtn 
			); 
		} 
	); 
} 

// Check for right answers and deduct 
// Time for wrong answer, go to next question 

function questionClick() { 
	if ( 
		this.value !== 
		questions[currentQuestionIndex] 
			.correctAnswer 
	) { 
		time -= 10; 
		if (time < 0) { 
			time = 0; 
		} 
		timerEl.textContent = time; 
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`; 
		feedbackEl.style.color = "red"; 
	} else { 
		feedbackEl.textContent = 
			"Correct!"; 
		feedbackEl.style.color = 
			"green"; 
	} 
	feedbackEl.setAttribute( 
		"class", 
		"feedback"
	); 
	setTimeout(function () { 
		feedbackEl.setAttribute( 
			"class", 
			"feedback hide"
		); 
	}, 2000); 
	currentQuestionIndex++; 
	if ( 
		currentQuestionIndex === 
		questions.length 
	) { 
		quizEnd(); 
	} else { 
		getQuestion(); 
	} 
} 

// End quiz by hiding questions, 
// Stop timer and show final score 

function quizEnd() { 
	clearInterval(timerId); 
	var endScreenEl = 
		document.getElementById( 
			"end-screen"
		); 
	endScreenEl.removeAttribute( 
		"class"
	); 
	var finalScoreEl = 
		document.getElementById( 
			"final-score"
		); 
	finalScoreEl.textContent = time; 
	questionsEl.setAttribute( 
		"class", 
		"hide"
	); 
} 

// End quiz if timer reaches 0 

function clockTick() { 
	time--; 
	timerEl.textContent = time; 
	if (time <= 0) { 
		quizEnd(); 
	} 
} 
// Save score in local storage 
// Along with users' name 
function saveHighscore(event) {
    
    event.preventDefault();
    var newScore = { 
        score: time, 
        initials: initialsEl.value, 
       
    };
    highscores.push(newScore);
    highscores.sort((a,b) => b.score - a.score);
    highscores.splice(5);

    console.log(highscores);
}
/* function saveHighscore() { 
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
 */
initialsEl.onkeyup = checkForEnter; 

// Save users' score after clicking submit 

submitBtn.onclick = saveHighscore; 

// Start quiz after clicking start quiz 

startBtn.onclick = quizStart;