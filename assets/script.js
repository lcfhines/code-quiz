// DEPENDENCIES
var startButton = document.getElementById("start");
var timerEl = document.getElementById("time-indicator");
var timeLeftEl = document.getElementById("time-left");
var questionEl = document.getElementById("question-display");
var ruleEl = document.getElementById("rules");
var answerListEl = document.getElementById("answer-list");
var answerChoice1 = document.getElementById("answer-1");
var answerChoice2 = document.getElementById("answer-2");
var answerChoice3 = document.getElementById("answer-3");
var answerChoice4 = document.getElementById("answer-4");
var questionResults = document.getElementById("question-results");

// DATA
// questions in quiz
var question = ["Which of the following is NOT an example of an arithmetic operator?"]

// answer options for each quesiton
var answers = {
    answerone: "console.log (a + b);",
    answertwo: "console.log (a - b);",
    answerthree: "console.log (a x b);",
    answerfour: "console.log (a / b);"
}

// correct answer for each question
var correctAnswer = ["answer-3"]

// time when wrong answer
// score at end of quiz
// player names + high scores


// FUNCTIONS

// need to clear conents of answerListEl when page reloads

function startQuiz(){
    // timer starts
    startTimer();
    // show the first question and corresponding answer choices
    showQuestion();
    // hide rules
    ruleEl.innerHTML="";
    // hide start button
// this doesn't get rid of the padding
    startButton.innerHTML="";
}
        
    
function startTimer() {
    console.log("The timer has started")
    var timeLeft = 30;
    timeLeftEl.textContent = timeLeft;
    var timerInterval = setInterval(function() {
        // deduct time by 1 second
        --timeLeft;
        timeLeftEl.textContent = timeLeft;
        localStorage.setItem("time left", timeLeft);
        // when time reaches 0, what needs to happen
        if (timeLeft === 0){
            // timer stops
            clearInterval(timerInterval)
            // timer is removed
            timerEl.innerHTML=""
            // time is up message
            timesUp();
        } 
    }, 1000)
}


function timesUp() {
    questionEl.textContent = "Time's up!"
    timerEl.innerHTML=""
// need to replace quiz sections with 1) score 2) form for submitting
    // 
}


function showQuestion() {
    for (var i = 0; i < question.length; i++)
    questionEl.textContent = question[i];
    answerChoice1.textContent = answers.answerone;
    answerChoice2.textContent = answers.answertwo;
    answerChoice3.textContent = answers.answerthree;
    answerChoice4.textContent = answers.answerfour;
}

// create variable for clicked answer
answerListEl.addEventListener("click", function(event) {
    event.preventDefault();
    var selectedAnswer = event.target.id;
    console.log(selectedAnswer);
    localStorage.setItem("selected answer", selectedAnswer);
    
// if answer is correct, display correct message; if incorrect, display incorrect message and deduct 10 second from time

    if (selectedAnswer === correctAnswer[0]) {
        console.log("YAY");
        questionResults.textContent = "Correct!"
    // go to next question
    } else {
        questionResults.textContent = "Incorrect"
    // DEDUCT 10 SECONDS IF QUESTION IS WRONG
    // go to next question
    }
});



// USER INTERACTIONS
// clicks button to start 
startButton.addEventListener("click", startQuiz)

    // types name
    // clicks button to view high scores



// INITILIZAITONS





