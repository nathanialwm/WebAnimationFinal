//-------------------Table of Contents----------------------------------
//|   Navigation......................................................Line 9            |
//|   Hi-Low............................................................Line 56           |
//|   Simon..............................................................Line 112         |
//|   Rock Paper Scissors.....................................                         |
//|   Dance Dance..................................................                        |
//-----------------------------------------------------------------------------

//navigation
//hilow
$('#hilolink').click(function() {
    $('body, html').animate({
        scrollLeft: $('#hiLo').offset().left
    }, 500);
});
$('.hiloback').click(function() {
    $('body, html').animate({
        scrollLeft: $('#allGames').offset().left
    }, 500);
});
//simon
$('#simonSays').click(function() {
    $('body, html').animate({
        scrollTop: $('#simon').offset().top
    }, 500);
});
$('.simonback').click(function() {
    $('body, html').animate({
        scrollTop: $('#allGames').offset().top
    }, 500);
});
//rockpaper
$('#rock').click(function() {
    $('body, html').animate({
        scrollTop: $('#rockPaper').offset().top
    }, 500);
});
$('.rockback').click(function() {
    $('body, html').animate({
        scrollTop: $('#allGames').offset().top
    }, 500);
});
//pong
$('#pong').click(function() {
    $('body, html').animate({
        scrollLeft: $('#danceDance').offset().left
    }, 500);
});
$('.pongback').click(function() {
    $('body, html').animate({
        scrollLeft: $('#allGames').offset().left
    }, 500);
});


//Hi Low Game code
//create random number
var number = Math.round(Math.random() * 100);
console.log(number);

//used when play again button is clicked
function newNumber() {
    var number = Math.round(Math.random() * 100);
    console.log(number);
    return number;
}

//play again button, clear everything and generate new number
$('#playAgain').click(function() {
    $('#youKnow').empty();
    $('#playAgain').css('opacity', '0');
    $('#result').empty();
    $('#guessinput').val('');
    number = newNumber();
});

//Submit button. changes p element based on guess, and creates list element
$('#submitguess').click(function() {
  var guess = parseInt(document.getElementById("guessinput").value);

  //create list element depending on guess value
  function newLi() {
      var newLi = document.createElement('LI');
      $('#youKnow').append(newLi);
      var text;
      if (guess < number) {
        text = document.createTextNode("x > " + guess);
        newLi.appendChild(text);
      } else {
        text = document.createTextNode("x < " + guess);
        newLi.appendChild(text);
      }
}
//if condition that backs the whole game
  if (guess === number) {
    $('#result').text('Congratulations you guessed the right number! Play again?');
    $('#playAgain').css('opacity', '1');
  } else if (guess > 100) {
    $('#result').text("Please enter a number between 1 and 100");
  } else if (guess < number) {
    $('#result').text("The number I'm thinking of is greater than " + guess);
    newLi();
  } else if (guess > number) {
    $('#result').text("The number I'm thinking of is less than " + guess);
    newLi();
  } else {
    $('#result').text("Please enter a real number");
  }
});


//simon game code
//initialize color memory and variables
var colors = [];
var red, yellow, blue, green;

var Wheel = function() {
    var self = this;
    this.red = $('#red');
    this.green = $('#green');
    this.yellow = $('#yellow');
    this.blue = $('#blue');
};
var wheel = new Wheel();
//random number
mathF = function() {
    return Math.random();
}

//determine what color is added
function newColorF() {
    var math = mathF();
    if(math <= .25) {
        newColor = 'red';
    }
    else if(math <= .5) {
        newColor = 'green';
    }
    else if(math <= .75) {
        newColor = 'yellow';
    }
    else {
        newColor = 'blue';
    }
    return newColor;
}

function computerTurn() {
    newColor = newColorF();
    colors.push(newColor);
    var colorlength = colors.length;

    var i = 0; // Our iteration variable

    var check = function() { // the function to increment i and go to next step of animation, or exit
        i++;
        if (i < colorlength) {
            step();
        }
    };

    var step = function() {
        x = colors[i];
        console.log(x);
        if (x === 'red') {
            $('#red').animate({
                    backgroundColor: '#ff9e9e'
                }, 300)
                .delay(250)
                .animate({
                    backgroundColor: 'red'
                }, 300, check); // <--- attached check function here
        } else if (x === 'green') {
            $('#green').animate({
                    backgroundColor: '#bdffbd'
                }, 300)
                .delay(250)
                .animate({
                    backgroundColor: 'green'
                }, 300, check); // <--- attached check function here
        } else if (x === 'yellow') {
            $('#yellow').animate({
                    backgroundColor: '#ffffc2'
                }, 300)
                .delay(250)
                .animate({
                    backgroundColor: 'yellow'
                }, 300, check); // <--- attached check function here
        } else {
            $('#blue').animate({
                    backgroundColor: '#a3a3ff'
                }, 300)
                .delay(250)
                .animate({
                    backgroundColor: 'blue'
                }, 300, check); // <--- attached check function here
        }
    };

    step(); // For the initial step in the animation
}//when begin button is pushed

$('contian4').on('click', function() {
  for (let i = 0; i < colors.length; i++) {
      if (this === x) {
        computerTurn();
      }
      else {
        console.log("you lose");
      }
    };
})

function beginGame() {
    computerTurn();
}

$('#startGame').on('click', function() {
    beginGame();
});

//RPS
var choice, tie, win, lose;
function computerPlay() {
    var computerChoice;
    var computerMath = Math.random();
    if(computerMath <= 0.33333) {
        computerChoice = 'Rock';
    }
    else if(computerMath <= 0.66666) {
        computerChoice = 'Paper';
    }
    else {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

tie = 0;
win = 0;
lose = 0;
$('#stats').text("Wins: " + win + "    Losses: " + lose + "   Ties: " + tie);
$('#chooseRPS').submit(function() {
    var computerChoice = computerPlay();
    var chosen = $('input[name="choose"]:checked').val();
    if(chosen === 'Rock') {
        choice = 'Rock';
        if(computerChoice === 'Rock'){
            $('#thisTurn').text("The result is a tie you have both picked rock");
            tie += 1;
        }
        else if(computerChoice === 'Paper'){
            $('#thisTurn').text("You have lost, The computer chose paper");
            lose += 1;
        }
        else {
            $('#thisTurn').text("You have won, the computer chose scissors");
            win += 1;
        }
    }
    else if(chosen === 'Paper') {
        choice = 'Paper';
        if(computerChoice === 'Rock'){
            $('#thisTurn').text("You have won, the computer chose rock");
            win += 1;
        }
        else if(computerChoice === 'Paper'){
            $('#thisTurn').text("The result is a tie you have both picked paper");
            tie += 1;
        }
        else {
            $('#thisTurn').text("You have lost, the computer chose scissors");
            lose += 1;
        }
    }
    else if(chosen === 'Scissors') {
        choice = 'Scissors';
        if(computerChoice === 'Rock'){
            $('#thisTurn').text("You have lost, the computer chose rock");
            lose += 1;
        }
        else if(computerChoice === 'Paper'){
            $('#thisTurn').text("You have won, The computer chose paper");
            win += 1;
        }
        else {
            $('#thisTurn').text("The result is a tie you both chose scissors");
            tie += 1;
        }
    }
    else {
        alert("Please choose rock, paper or scissors");
    }
    $('#stats').text("Wins: " + win + "    Losses: " + lose + "   Ties: " + tie);
    return false;
});

//Master Mind

$('#circle1, #circle2, #circle3, #circle4').click(function() {
		if($(this).attr("data-color") === 'red'){
		$(this).animate({
			backgroundColor: 'green'
		}, 200);
		$(this).attr("data-color", "green");
	}
	else if($(this).attr("data-color") === "green"){
		$(this).animate({
			backgroundColor: 'blue'
		}, 200);
		$(this).attr("data-color", "blue");
	}
	else if($(this).attr("data-color") === "blue"){
		$(this).animate({
			backgroundColor: 'yellow'
		}, 200);
		$(this).attr("data-color", "yellow");
	}
	else if($(this).attr("data-color") === "yellow"){
		$(this).animate({
			backgroundColor: 'red'
		}, 200);
		$(this).attr("data-color", "red");
	}
	else {
		alert("Something went wrong");
	}
});

function createColor() {
	var masterColorMath = Math.random();
	var masterColor;
	if(masterColorMath <= 0.25) {
		masterColor = 'red';
	}
	else if(masterColorMath <= 0.50) {
		masterColor = 'green';
	}
	else if(masterColorMath <= 0.75) {
		masterColor = 'blue';
	}
	else {
		masterColor = 'yellow';
	}
	return masterColor
}

function newSequence() {
	var color1, color2, color3, color4;
	color1 = createColor();
	color2 = createColor();
	color3 = createColor();
	color4 = createColor();
	var computerColors = [color1, color2, color3, color4];
	return computerColors;
}

computerColors = newSequence();
var tries = 0;
$('#tries').text("Tries: " + tries);

$('#masterButton').click(function() {
	var allColors = [$('#circle1').attr("data-color"), $('#circle2').attr("data-color"), $('#circle3').attr("data-color"), $('#circle4').attr("data-color")];
	var i = 0;

	function check() {
		i++;
		if(i < 4){
			step();
		}
	};

	function step() {
		var pColors = [$('#color1'), $('#color2'), $('#color3'), $('#color4')]
		var x = allColors[i];
		var y = computerColors[i];
		var p = pColors[i];

		if( x === y) {
			p.text("This is correct");
			check();
		}
		else {
			p.text("This is incorrect");
			check();
		}
	};
	step();
	console.log(computerColors);
	tries += 1;
	$('#tries').text("Tries: " + tries);
    if(allColors[0] === computerColors[0] && allColors[1] === computerColors[1] && allColors[2] === computerColors[2] && allColors[3] === computerColors[3]) {
        $('#whenCorrect').text("That is correct, you beat the game!");
        $('#playAgainButton').animate({
            opacity: '1'
        }, 200);
    }
    if(tries >= 5){
        $('#whenCorrect').text("You have exceeded the maximum tries and lost");
        $('#playAgainButton').animate({
            opacity: '1'
        }, 200);
            if(allColors[0] === computerColors[0] && allColors[1] === computerColors[1] && allColors[2] === computerColors[2] && allColors[3] === computerColors[3]) {
                $('#whenCorrect').text("That is correct, you beat the game!");
                $('#playAgainButton').animate({
                    opacity: '1'
                }, 200);
            }
    }
});

$('#playAgainButton').click(function() {
    computerColors = newSequence();
    tries = 0;
    $('#tries').text("Tries: " + tries);
    $('#whenCorrect').empty();
    $('#playAgainButton').animate({
        opacity: '0'
    }, 200);
    $('#circle1, #circle2, #circle3, #circle4').animate({
        backgroundColor: 'red'
    }, 200);
    $('#circle1, #circle2, #circle3, #circle4').attr('data-color', 'red');
});
