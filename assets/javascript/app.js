



$(document).ready(function() {
    
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var skipped = 0;
    var gameStart = ".endStats"
    var questions = ".trivia-questions"
    // var questions = ".response"

    $(gameStart).hide();

    
    function displayStats (){
        $("#correctScore").text("Number of Correct Answers " + correctAnswers)
        $(gameStart).show();
        console.log("inside function")
        
    }


    
    $('#game-done').on('click', function(){
        $(questions).hide();
        console.log("hello");
        displayStats();
        console.log("after display")

        
        
    });
    
    
    
    $('input[type=radio]').on ('change', function(){
        correctAnswers = $("input[value='correct']:checked").length;
        wrongAnswers = $("input[value='wrong']:checked").length;
        console.log(correctAnswers);
    });







});