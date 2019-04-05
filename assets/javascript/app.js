
// To display elements on screen
var quizText = document.getElementById('quiz');
var resultsText = document.getElementById('results');
var submitButton = document.getElementById('submit');


// Creating the timer
var sec = 45;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec;
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
            option4: "16"
        },
        answer: "6"
    },
    {
        question: "What team plays in Houston?",
        options: {
            a: "Rockets",
            b: "Bucks",
            c: "Pistons",
            d: "Spurs"
        },
        answer: "Rockets"
    },
    {
        question: "Which backcourt duo makes up 'The Splash Brothers'?",
        options: {
            a: "Stephen Curry and Klay Thompson",
            b: "Damian Lillard and Cj McCollum",
            c: "James Harden and Chris Paul",
            d: "John Wall and Bradley Beal"
        },
        answer: "Stephen Curry and Klay Thompson",
    },
    {
        question: "Which team has LeBron James not played on?",
        options: {
            a: "Cleveland Caviliers",
            b: "Miami Heat",
            c: "Brooklyn Nets",
            d: "LA Lakers"
        },
        answer: "Brooklyn Nets",
    },
    {
        question: "Which is not a basketball position? ",
        options: {
            a: "Center",
            b: "Gaurd",
            c: "Forward",
            d: "Shooter"
        },
        answer: "Shooter",
    },
]


// Hold all Quiz Content
function quizContent(questions, quizText, resultsText, submitButton) {

    function viewQuestions(questions, quizText) {

        var output = [];
        var options;

        for (i = 0; i < questions.length; i++) {

            answers = [];

            for (letter in questions[i].answers) {

                answers.push(

                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizText.innerHTML = output.join('');
    }

    viewQuestions(questions, quizText)

}

quizContent(quizQuestions, quizText, resultsText, submitButton)