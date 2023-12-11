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

// Quiz's initial state 
var currentQuestionIndex = 0; 
var time = questions.length * 15; 
var timerId; 