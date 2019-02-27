



$(document).ready(function() {
    
    var correctAnswers = 0;
    var countDowntimer = 30;
    var wrongAnswers = 0;
    var skipped = 0;
    var gameStart = ".endStats";
    var questions = ".trivia-questions";
    // var questions = ".response"

    $(gameStart).hide();

    
    function displayStats (){
        $("#correctScore").text("Number of Correct Answers " + correctAnswers)
        $("#wrongScore").text("Number of Correct Answers " + wrongAnswers)
        $(gameStart).show();
        // console.log("inside function")
        
    }


    
    $('#game-done').on('click', function(){
        $(questions).hide();
        // console.log("hello");
        displayStats();
        // console.log("after display")

        
        
    });
    // 
    // function countdownTimer(){
    //     intervalId = setInterval(decrement, 1000);
    // }

  
    // function decrement(){
    //     countDowntimer--;
    //     $('#countdown').html(" " + countDowntimer + " " + "seconds");
    //     if (number ===1){
            // print time on screen
    //     }
    //     else if(number ===0) {
            // if you run out of time call on the displayStats function
    //     }
    // }
    
    
    
    $('input[type=radio]').on ('change', function(){
        correctAnswers = $("input[value='correct']:checked").length;
        wrongAnswers = $("input[value='wrong']:checked").length;
        console.log(correctAnswers);
    });







});