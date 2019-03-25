// Creating the timer
var sec = 45;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec ;
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Times Up!");
    }
}

// Questions and Answers
var quizQuestions = [
{
    question: "How many NBA Championships do the Bulls have?",
    options: {
        option1: "3",
        option2: "8",
        option3: "6",
        option4: "16"},
    answer: "6"
},
{
    question: "What team plays in Houston?",
    options: {
        option1: "Rockets",
        option2: "Bucks",
        option3: "Pistons",
        option4: "Spurs"},
    answer: "Rockets"
},
{
    question: "Which backcourt duo makes up 'The Splash Brothers'?",
    options: {
        option1: "Stephen Curry and Klay Thompson",
        option2: "Damian Lillard and Cj McCollum",
        option3: "James Harden and Chris Paul",
        option4: "John Wall and Bradley Beal"},
    answer: "Stephen Curry and Klay Thompson",
},
{
    question: "Which team has LeBron James not played on?",
    options: {
        option1:"Cleveland Caviliers",
        option2:"Miami Heat",
        option3:"Brooklyn Nets",
        option4:"LA Lakers"},
    answer: "Brooklyn Nets",
},
{
    question: "Which is not a basketball position? ",
    options: {
        option1:"Center",
        option2:"Gaurd",
        option3:"Forward",
        option4:"Shooter"},
    answer: "Shooter",
},
]



// To display elements on screen
var quizText = document.getElementById('quiz');
var resultsText = document.getElementById('results');
var submitButton = document.getElementById('submit');


// Hold all Quiz Content
function quizContent (questions,quizText, resultsText, submitButton){

    function viewQuestions (questions, quizText){

        var output = [];
        var options;


    }

    viewQuestions(questions, quizText)






}