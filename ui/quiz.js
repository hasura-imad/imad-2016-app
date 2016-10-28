var zoomlevel=1;

    $("body").dblclick(function(ev) {
        zoomlevel = zoomlevel == 1 ? 2 : 1;



        $(this).css({
            "-moz-transform":"scale("+zoomlevel+")",
            "-webkit-transform":"scale("+zoomlevel+")",
            "-o-transform":"scale("+zoomlevel+")",
            "-ms-transform":"scale("+zoomlevel+")"
        });


    });

//confirm('Ready for QUIZ? ')

var questions = ['What is your name',
                'Whats your age',
                'How are you feeling?',
                'How this page made?']
var answers = ['name1','16','good','JS']
var options = [
    ['name1','name2','name3','name4'],
    ['14','15','16','17'],
    ['awesome','good','bad','fine'],
    ['JS','c++','c','ruby'] ]

var READY = false;
var totalQuestions = 4;
var totalOptions = 4;
var correctAnswers = 0;
var currentQuestion = 0;
// I HATE JS OBJECTS </3

var minutes = 0, seconds = 0;

document.onreadystatechange = function () {
    if (document.readyState === "complete") { // PAGE HAS BEEN LOADED
        swal({
                title: "Are you ready?",
                text: "just a last confirmation...",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "success",
                confirmButtonText: "Yes",
                closeOnConfirm: false,
                //showLoaderOnConfirm = true,
                closeOnCancel: false
                },
                function(isConfirm) {
                    if (isConfirm) {
                        swal("Well...", "Good luck :)", "success");
                        READY = true
                    } else {
                        swal("Cancelled", "Its okay :)", "info");
                        swal(
                            {
                                title: "Redirecting to users' page...",
                                timer: 2000,
                                showConfirmButton: true
                            },function(isConfirm){
                                window.location.href = "user-work.html"
                            }
                        )
                        //setTimeout(window.location.href = "user-work.html",20000)
                    }
                }
            );
        var newOptions = options[currentQuestion]
        var newQuestion = questions[currentQuestion]
        var option = [
        document.getElementById("textOption1"),
        document.getElementById("textOption2"),
        document.getElementById("textOption3"),
        document.getElementById("textOption4") ]
        for(var i = 0; i < 4; i++){
            option[i].innerHTML = newOptions[i]
        }
        var Question = document.getElementById('question');
        Question.innerHTML = newQuestion;
    }
}

function getCheckedIndex() {
    var optionStatus = [
        document.getElementById("option1").checked,
        document.getElementById("option2").checked,
        document.getElementById("option3").checked,
        document.getElementById("option4").checked ]
    for(var i = 0; i < 4; i++){
        if(optionStatus[i]) { // true
            return i;
        }
    }
    return -1; // false
}

function updateOptions() {
    var newOptions = options[currentQuestion]
    var newQuestion = questions[currentQuestion]
    var option = [
    document.getElementById("textOption1"),
    document.getElementById("textOption2"),
    document.getElementById("textOption3"),
    document.getElementById("textOption4") ]
    for(var i = 0; i < 4; i++){
        option[i].innerHTML = newOptions[i]
    }
    var Question = document.getElementById('question');
    Question.innerHTML = newQuestion;
}

function result(score, outOf) {
    alert("You scored " + score + " out of " + outOf)
}

function next() {
    var index = getCheckedIndex()
    if(index !== -1){
        if(options[currentQuestion][index] === answers[currentQuestion]){
            correctAnswers++;
            alert(correctAnswers)
        }
        currentQuestion++;
    }
    if(currentQuestion === totalQuestions){
        //result(correctAnswers,totalQuestions)
        alert("You scored " + correctAnswers + " out of " + totalQuestions)
    }
    updateOptions()
}

var intervalId = setInterval(function timer() {
    if(READY){
        seconds++;
        if(seconds === 60){
            minutes++;
            seconds = 0;
        }
        setInterval(function checkInterval() {
            if(minutes === 30){
                clearInterval(intervalId)
                alert('You scored' + correctAnswers + ' out of ' + totalQuestions)
            }
        }, 1000)
        var gameTimer = document.getElementById('timer')
        gameTimer.innerHTML = 'TIME TAKEN YET : ' + (minutes < 10 ? 0 + ' ' + minutes : minutes) + ' : ' + (seconds < 10 ? 0 + ' ' + seconds : seconds)
    }
},1000)