// DEPENDENCIES
var startButton = document.getElementById("start");
var timeLeftEl = document.getElementById("time-left");
var questionEl = document.getElementById("question-display");
var ruleEl = document.getElementById("rules");
var answerListEl = document.getElementById("answer-list");

// DATA
// questions in quiz

var questions = [];
    // answers to each quesiton
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

// need to store questions (and answer options) in array, object
function showQuestion() {
    var question = getQuestion();

    questionEl.textContent = "Question 1?"

}

// ??? 
function getQuestion() {
    return "boolean"
}

// USER INTERACTIONS
// clicks button to start 
startButton.addEventListener("click", startQuiz)

// makes answer selection (clicks on answer)






        // IF time is not 0 and IF there are remaining questions
            // present next question & corresponding answers
            // if correct: time is unchanged, display correct message
            // if incorrect: time is subtracted, display incorrect message
    // types name
    // clicks button to view high scores




// INITILIZAITONS





