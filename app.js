
var min = 0
var sec = 0 
var milli = 0

var displayMin = document.getElementById("displayMin")
var displaySec = document.getElementById("displaySec")
var displayMilli = document.getElementById("displayMilli")
var startBtn = document.getElementById("startBtn")
var stopBtn = document.getElementById("stopBtn")
var resettBtn = document.getElementById("resettBtn")


function renderTime(){
    displayMin.innerHTML = min;
    displaySec.innerHTML = sec;
    displayMilli.innerHTML = milli;
}
renderTime();

function timer(){
    milli++;
    if(milli == 10){
        sec++;
        milli = 0;
        if(sec == 60){
            min++;
            sec = 0;
        }
    }
    renderTime();
}


// setInterval(function(){
//     timer();          
// },100) 


// setInterval(function(){},100)
          


var interval;

function startTimer(){
    interval = setInterval(function (){
        timer();
    },100)
    startBtn.disabled = true;
}


function stopTimer(){
    clearInterval(interval)
    startBtn.disabled = false;
}


function resetTimer(){
    min = 0;
    sec = 0;
    milli = 0;
    stopTimer();
    renderTime();
}