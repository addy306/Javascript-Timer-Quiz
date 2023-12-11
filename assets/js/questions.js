// An array of questions, options and correct answers
var questions = [
    {
      question: "What does 'DOM' stand for?",
      options: ["Document Object Model", "Data Object Model", "Digital Ordinance Model", "Dynamic Output Mechanism"],
      correctAnswer: "Document Object Model"
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "let", "const", "all of the above"],
      correctAnswer: "all of the above"
    },
    {
      question: "What is the purpose of 'JSON' in JavaScript?",
      options: ["JavaScript Object Notation", "JavaScript Operational Network", "Java Syntax Object Notation", "Java Systematic Object Naming"],
      correctAnswer: "JavaScript Object Notation"
    },
    {
      question: "What is a 'closure' in JavaScript?",
      options: ["A function that has access to variables in its own scope", "A function that returns another function", "A function that can be passed as an argument", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "Which method is used to add a new element at the end of an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: "push()"
    },
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      options: ["To refer to the current object", "To refer to the previous object", "To refer to the next object", "To refer to a specific object"],
      correctAnswer: "To refer to the current object"
    },
    {
      question: "What is the role of 'NaN ' in JavaScript?",
      options: ["Not a Number", "No and No", "Null and NaN", "None of the above"],
      correctAnswer: "Not a Number"
      }
    ];

    // Convert the array of questions into a JSON-formatted string
    localStorage.setItem("questions", JSON.stringify(questions))
  