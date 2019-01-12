
// targetScore, currentScore, wins and losses //

var targetScore = 0;
var currentScore = 0;

var winCounter = 0;
var lossCounter = 0;

// Crystal Objects //

var crystal = {
    
    green: {value: 0},
    red: {value: 0},
    yellow: {value: 0},
    blue: {value: 0},
    
};

// Random Number Generator //

function rNG (mn, mx) {
    return Math.floor(Math.random() * (mx-mn)) + mn;
      
};

// Start Game Function //

function startGame () {
    currentScore = 0;
    targetScore = rNG(30,100);
    crystal.green.value = rNG(1,10);
    crystal.red.value = rNG(1,10);
    crystal.yellow.value = rNG(1,10);
    crystal.blue.value = rNG(1,10);
    $("#trgt-score").text(targetScore);
    $("#current-score").text(currentScore);

};

// Click Events //

function adder(clicked) {
    currentScore += clicked;
    $("#current-score").text(currentScore)
   
    // We must call function "win" after each click //
    
    win()
};

// To load on Document Ready //

startGame();

$("#greengem").click(function() {
    adder(crystal.green.value);
});

$("#redgem").click(function() {
    adder(crystal.red.value);
});

$("#yellowgem").click(function() {
    adder(crystal.yellow.value);
});

$("#bluegem").click(function() {
    adder(crystal.blue.value);
});


// Win ||| lose Logic //

function win () {

if (currentScore === targetScore) {
    alert("You Win!");
    winCounter++;
    $("#wins").text(winCounter);
    startGame();
    
    }

else if (currentScore > targetScore) {
    alert("You Lose");
    lossCounter ++;
    $("#losses").text(lossCounter);
    startGame();
    
    }

};

