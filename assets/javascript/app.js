// Creating the timer
var sec = 45;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec ;
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Times Out!");
    }
}

// Questions and Answers
var quizQuestions = [
{
    "question": "How many NBA Championships do the Bulls have?",
    "options": ["3","8","6"],
    "answer": "6"
},
{
    "question": "What team plays in Houston?",
    "options": ["Rockets","Bucks","Pistons"],
    "answer": "Rockets"
},
{
    "question": "Which player duo makes up 'The Splash Brothers'?",
    "options": ["Stephen Curry and Klay Thompson","Damian Lillard and Cj McCollum","James Harden and Chris Paul"],
    "answer": "Stephen Curry and Klay Thompson",
},
{
    "question": "Which team has LeBron James not played on?",
    "options": ["Cleveland Caviliers","Miami Heat","Brooklyn Nets"],
    "answer": "Brooklyn Nets",
},
{
    "question": "Which is not a basketball position? ",
    "options": ["Center","Gaurd","Shooter"],
    "answer": "Shooter",
},
]
// To display elements on screen
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


// Quiz Content
function nbaquestions (nbaquestions){

    for (i = 0; i < nbaquestions.length; i++){
        var quizQuestions = nbaquestions [i];
        var answer = quizQuestions.length;
    }
    ;}