// DEPENDENCIES
var startButton = document.getElementById("start");
var timeLeftEl = document.getElementById("time-left");
var questionEl = document.getElementById("question-display");
var ruleEl = document.getElementById("rules");
var answerListEl = document.getElementById("answer-list");
var answerChoice1 = document.getElementById("answer-1");
var answerChoice2 = document.getElementById("answer-2");
var answerChoice3 = document.getElementById("answer-3");
var answerChoice4 = document.getElementById("answer-4");

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
var correctAnswer = ["console.log (a x b);"]

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
        // when time reaches 0, what needs to happen
        if (timeLeft === 0){
            // timer stops
            clearInterval(timerInterval)
            // time is up message
            timesUp();

        } 
        // add in another if statement - if timeLeft > 0, but answer was incorrect, then deduct more
    }, 1000)
}

function timesUp() {
    questionEl.textContent = "Time's up!"
}


function showQuestion() {
    for (var i = 0; i < question.length; i++)
    questionEl.textContent = question[i];
    answerChoice1.textContent = answers.answerone;
    answerChoice2.textContent = answers.answertwo;
    answerChoice3.textContent = answers.answerthree;
    answerChoice4.textContent = answers.answerfour;
}

// based on which answer is clicked, check if correct (compare to object?)
function checkAnswer() {
    if 
    
}

// USER INTERACTIONS
// clicks button to start 
startButton.addEventListener("click", startQuiz)

// makes answer selection (clicks on answer)
answerChoice1.addEventListener("click", checkAnswer)
answerChoice2.addEventListener("click", checkAnswer)
answerChoice3.addEventListener("click", checkAnswer)
answerChoice4.addEventListener("click", checkAnswer)




    // IF time is not 0 and IF there are remaining questions
            // present next question & corresponding answers
            // if correct: time is unchanged, display correct message
            // if incorrect: time is subtracted, display incorrect message
    // types name
    // clicks button to view high scores



// INITILIZAITONS





