$(document).ready(function() {
    //onload functions
    //window.onload = function() {
    $("#reset").on("click", reset);
    $("#start").on("click", start);
    $("#prevButton").on("click", previousQuestion);
    $("#nextButton").on("click", nextQuestion);
    //$("#nextButton").on("click", nextChoices);
    // The array of questions for our quiz game.
    //CHECK API FOR QUESTIONS!!!!
    var questions = [
    { 
        question: "The sky is?",
        choices:["blue", "green", "yellow", "pink"],
        correctAnswer: "a"},
    { 
        question: "There are ___ days in a year.",
        choices: ["365", "355", "465", "280"],
        correctAnswer: "a"},
    { 
        question: "There are ___ ounces in a pound.",
        choices: ["42", "18", "67", "16"],
        correctAnswer:  "d"},
    { 
        question: "The Declaration of Independence was created?", 
        choices: ["1765", "1787","1776", "2018"],
        correctAnswer: "c" },
    { 
        question: "Bananas are?",
        choices: ["vegetales", "fruit", "meat", "fish"], 
        correctAnswer: "b" }
    ];
    //console.log(questions[0]);
   
    //Variables for array
    var questionArray = [];
    var answerArray = [];
    var currentQuestions = 0;
    var currentChoices = 0;
         
    //setup function for next question
    function nextQuestion(){  
     if (currentQuestions === questions.length - 1) {
        currentQuestions = 0;
     } else {
        currentQuestions++;
        console.log(currentQuestions);
        $("#questions").html(questions[currentQuestions].question);
        }
    }
    //setup function for previous question
    function previousQuestion(){ 
       if (currentQuestions <= 0 || currentQuestions === questions.length - 1) {
            currentQuestions = 0;
         } else {
           currentQuestions--;
            console.log(currentQuestions);
            $("#questions").html(questions[currentQuestions].question);
         }
     }
    
     //variables for timer
    var number = 100;
    var intervalId;
    var clockRunning = false;
    
    //timer button
        function start() {
            if (!clockRunning) {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
            clockRunning = true;
            }
        };

    //  The decrement timer function.
    function decrement() {
        number--;
        $("#show-number").html("<h2>" + number + "</h2>");
            if (number === 0) {
            stop();
            alert("Time Up!");
        }
    }
    //  The stop function
    function stop() {
        clockRunning = false;
        clearInterval(intervalId);
        window.location.reload();
    }

    function reset() {
        window.location.reload();
    }
});


