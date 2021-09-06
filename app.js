var hours = document.querySelector("#hours");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");
var miliseconds = document.querySelector("#miliseconds");

var startButton = document.querySelector("#startButton");
var pauseButton = document.querySelector("#pauseButton");
var resetButton = document.querySelector("#resetButton");
var stopButton = document.querySelector("#stopButton");

var setTime;
var currentTime;
var difference;
var timer = 0;
var interval;
var timeRaw;
var timeMiliseconds;
var timeSeconds;
var timeMinutes;
var timeHours

var start = function(){
    setTime = Date.now();
    interval = setInterval(update, 100);
}

var pause = function(){
    clearInterval(interval);
}

var stop = function(){
    clearInterval(interval);
    timer = 0;
}

var reset = function(){
    timer = 0;
    updateScreen();
}

var update = function(){
    currentTime = Date.now();
    difference = currentTime - setTime;
    timer +=difference
    updateScreen();
    setTime = currentTime;   
}

var updateScreen = function(){
    timeRaw = timer/1000;
    timeMiliseconds = parseInt((timeRaw % 1) * 100);
    timeSeconds = Math.floor(timeRaw);
    timeMinutes = Math.floor(timeSeconds/60);
    timeHours = Math.floor(timeMinutes/60)

    miliseconds.textContent = twoDigiter(timeMiliseconds);
    seconds.textContent = twoDigiter(processSixty(timeSeconds));
    minutes.textContent = twoDigiter(processSixty(timeMinutes));
    hours.textContent = twoDigiter(timeHours);
}

var twoDigiter = function(number){
    var numString = number.toString();
    if(numString.length<2){
        return "0" + numString
    }else{
        return numString
    }    
}

var processSixty = function(number){
    var divisible = Math.floor(number/60);
    if(number/60 >= divisible){
        return number - 60 * divisible
    }
}



startButton.addEventListener("click",start)
pauseButton.addEventListener("click",pause)
stopButton.addEventListener("click",stop)
resetButton.addEventListener("click",reset)