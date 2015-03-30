var playersTurn = 'x';
var playerOne = "<p class='x'>X</p>";
var playerTwo = "<p class='o'>O</p>";

var $box = $('.box');

var $box1 = $('.box1');
var $box2 = $('.box2');
var $box3 = $('.box3');
var $box4 = $('.box4');
var $box5 = $('.box5');
var $box6 = $('.box6');
var $box7 = $('.box7');
var $box8 = $('.box8');
var $box9 = $('.box9');

// DRY    //

var win = false;
var ADraw = false;
var replay = false;
var squaresFilled = 0;

$box.click(function(){

	var $this = $(this);

	if(!$this.has('p').length){
		nextTurn(playersTurn, $this);
	};
});


function nextTurn(player, thisBox){

	if(player === 'x'){
		thisBox.append(playerOne);
	} else {
		thisBox.append(playerTwo);
	}

	win = checkWin('.' + player);

	if(win){
		endOfGame(player);
		return;
	}else{
		ADraw = checkTie();
	}

	if(ADraw){
		endOfGame('tie');
		return;
	};

	if(player === 'x'){
		playersTurn = 'o';
	}else{
		playersTurn = 'x';
	};
};

function checkWin(playerspot){
	
	if(winningCombo($box1, $box2, $box3, playerspot)){
		return true;	
		
	}else if(winningCombo($box4, $box5, $box6, playerspot)){
		return true;
		
	}else if(winningCombo($box7, $box8, $box9, playerspot)){
		return true;
		
	}else if(winningCombo($box1, $box4, $box7, playerspot)){
		return true;
		
	}else if(winningCombo($box2, $box5, $box8, playerspot)){
		return true;
		
	}else if(winningCombo($box3, $box6, $box9, playerspot)){
		return true;
		
	}else if(winningCombo($box1, $box5, $box9, playerspot)){
		return true;
		
	}else if(winningCombo($box3, $box5, $box7, playerspot)){
		return true;
		
	}else{
		return false;	
	};
};

function winningCombo(a, b, c, playerspot){

	if(		a.has(playerspot).length 
		&& b.has(playerspot).length 
		&& c.has(playerspot).length){
		return true
	}else{
		return false
	}
};

function checkTie(){
	squaresFilled = $box.children('p').length;
	if(squaresFilled === 9){
		return true;
	}else{
		return false;
	}
};



function winAlert(player){

	if(player === 'x'){
		return 'X wins!';
	}else if(player === 'o'){
		return 'O wins!';
	}else{
		return 'You are both losers, get it together.'
	}
};

function endOfGame(playerOrDraw){

	alert(winAlert(playerOrDraw));
	playAgain = confirm('Do you want to play again?');
	if(playAgain){
		$('.board').hide().fadeIn(3000);
		$('#goodluck').html('<p>Good luck!</p>').hide().fadeIn(200);
		$('#goodluck').hide(2000);
		$box.empty();
		playersTurn = 'x';
	}else{
		$('.board').remove();
		$('#thanks').html('<p>thanks for playing!<p>').hide().fadeIn();
	};
};


