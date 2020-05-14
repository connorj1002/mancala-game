/* ==== MANCALA ==== */

/* EQUIPMENT */
// game board
	// 12 cups (6 on each side)
	// 2 banks (1 on each end)
	// counters at each cup and bank
// 48 stones
// 2 players (2 humans || 1 human && 1 computer)


/* SETUP */
// 4 stones in each cup


/* INSTRUCTIONS (specific/explicit) */
// players sit across from one another, with 6 cups in front and 1 bank on either end
// the bank on the right hand side of each player is that player's bank; the bank on the left hand side is the opponent's bank
// player1 takes a turn
	// player1 selects 1 of 6 cups of stones on their side
	// player1 takes stones from the selected cup and places one stone into the cup or bank to the right
	// this continues to each following cup/bank, moving counter-clockwise around the board until the stones from the selected cup run out
	// player should always skip their opponent's bank when placing stones
	// IF the last stone from the selected cup lands in an empty cup on player1's side, player1 collects the stones from the opposing cup on player2/computer's side and places these stones into their own (player1's) bank
	// IF the last stone from the selected cup lands in player1's bank, player1 takes another turn
	// ELSE, player1's turn ends
// player2/computer takes a turn
	// player2/computer's turn should follow the same steps as player1's turn
// player1 and player2/computer alternate turns until a player has 0 stones in all 6 of the cups on their side
// the player with 0 stones in all 6 of the cups on their side then takes the remaining stones in the 6 cups on the opposing player's side and places them in their own bank
// the game has now ended; all stones should be in the game board banks
// the player with the most stones in their bank wins


/* == USER STORIES == */

/* game board and setup */

// display rectanglular board
	// 6 circular cups on each long side, spaced apart evenly across side
	// 1 oval / rounded rectangle "bank" on each short side, taking up length of side
	// counters above each cup and bank indicate number of stones contained
// display icon containing simple instructions
	// on icon click, instructions appear and disappear
// display button to start game

// --- assign a stone a value of 1 and give it a class of "stone"
// --- cups and banks sum the total value contained
// --- display sum in counters
// --- cups and banks assigned a class of "hole"
// --- cups assigned a class of "cup"; banks assigned a class of "bank"
// --- cups on bottom of board assigned class of "player-cup"; cups on top of board assigned class of "opponent-cup"
// --- bank on right of board assigned class of "player-bank"; bank on left of board assigned class of "opponent-bank"
// --- hole's have an integer ID from 0 through 13
// --- ID 0 is the cup on the bottom left of the board as it is displayed to the user
// --- the ID integers should increment to each hole counter-clockwise from ID 0

/* game play */

// on start button click, start button disappears
// 4 round stones appear in each cup
// display player's turn on corresponding side

/* on a player's turn */

// on click of a player's cup, take sum of selected cup
// clear stones from selected cup
// negatively increment counter of selected cup
// increment +1 stone to each cup or bank to the right at the same rate
// skip opponent-bank on increment

// if last hole to increment === .bank; player takes another turn
// if last hole to increment === .cup && 0; player bank collects value of adjacent opposing cup and opposing cup clears

// else, prompt next player's turn

/* game end */

// if all player-cup's === 0, then collect value of all opponent-cup's into player-bank; clear opponent-cup's
// if all opponent-cup's === 0, then collect value of all player-cup's into opponent-bank; clear player-cup's
// if player-bank > opponent-bank, display: "Player wins!"
// if opponent-bank > player-bank, display: "Opponent wins!"


/* MVP */
// a game board in the DOM with dynamic counters that keep track of bank and cup values so that a full game can be played with all rules
// click to play

/* Stretch Goals */
// show physical "stones" changing in cups and banks as players take turns
// design robust CSS
// allow players to modify player names
// super stretch: build in a one player mode against a CPU with simple intelligence (if statements)


/* RENDER PAGE */
$(".player-submission").hide();
$("#master-stone").hide();
$("#inst-toggle").hide();
$(".game-board").hide();
$("#opponent").hide();
$("#player").hide();


/* START BUTTON */
$("#start-game").on("click", function(event){
	console.log("select players");
	$(".instructions").toggle();
	$(".player-submission").show();
	this.remove();
});

/* SUBMIT BUTTON */
const setCounters = () => {
	$(".opponent__counters > .counter").text(4);
	$(".player__counters > .counter").text(4);
	$("#opponent__bank-counter").text(0);
	$("#player__bank-counter").text(0);
};

$("#inst-toggle").on("click", function(event){
	$(".instructions").toggle();
});

$("#submit-button").on("click", function(event){
	console.log("Mancala has started!");
	$(".player-submission").hide();
	$("#inst-toggle").show();
	$(".game-board").show();
	$("#opponent > h3").text($("#player--two").val());
	$("#player > h3").text($("#player--one").val());
	$("#opponent").show();
	$("#player").show();
	setCounters();
});


/* JQUERY SELECTOR LIBRARY */
const $counterOne = $("#counter-one");
const $counterTwo = $("#counter-two");
const $counterThree = $("#counter-three");
const $counterFour = $("#counter-four");
const $counterFive = $("#counter-five");
const $counterSix = $("#counter-six");
const $playerCounter = $("#player__bank-counter");
const $counterSeven = $("#counter-seven");
const $counterEight = $("#counter-eight");
const $counterNine = $("#counter-nine");
const $counterTen = $("#counter-ten");
const $counterEleven = $("#counter-eleven");
const $counterTwelve = $("#counter-twelve");
const $opponentCounter = $("#opponent__bank-counter");

const $cupOne = $("#cup-one");
const $cupTwo = $("#cup-two");
const $cupThree = $("#cup-three");
const $cupFour = $("#cup-four");
const $cupFive = $("#cup-five");
const $cupSix = $("#cup-six");
const $playerBank = $("#player__bank");
const $cupSeven = $("#cup-seven");
const $cupEight = $("#cup-eight");
const $cupNine = $("#cup-nine");
const $cupTen = $("#cup-ten");
const $cupEleven = $("#cup-eleven");
const $cupTwelve = $("#cup-twelve");
const $opponentBank = $("#opponent__bank");

/* GAME LOGIC ARRAYS */ 
const gameSequence = {
	player: {
		key: {
			"cup-one": 0,
			"cup-two": 1,
			"cup-three": 2,
			"cup-four": 3,
			"cup-five": 4,
			"cup-six": 5
		},
		arrayPair: {
			0: 12,
			1: 11,
			2: 10,
			3: 9,
			4: 8,
			5: 7
		},
		counter: [
			$counterOne, 
			$counterTwo, 
			$counterThree, 
			$counterFour, 
			$counterFive, 
			$counterSix, 
			$playerCounter, 
			$counterSeven, 
			$counterEight, 
			$counterNine, 
			$counterTen, 
			$counterEleven, 
			$counterTwelve,
			// loop hack - fix after MVP
			$counterOne, 
			$counterTwo, 
			$counterThree, 
			$counterFour, 
			$counterFive, 
			$counterSix, 
			$playerCounter, 
			$counterSeven, 
			$counterEight, 
			$counterNine, 
			$counterTen, 
			$counterEleven, 
			$counterTwelve
		],
		hollow: [
			$cupOne, 
			$cupTwo, 
			$cupThree, 
			$cupFour, 
			$cupFive, 
			$cupSix, 
			$playerBank, 
			$cupSeven, 
			$cupEight, 
			$cupNine, 
			$cupTen, 
			$cupEleven, 
			$cupTwelve
		]
	},
	opponent: {
		key: {
			"cup-seven": 0,
			"cup-eight": 1,
			"cup-nine": 2,
			"cup-ten": 3,
			"cup-eleven": 4,
			"cup-twelve": 5
		},
		arrayPair: {
			0: 12,
			1: 11,
			2: 10,
			3: 9,
			4: 8,
			5: 7
		},
		counter: [
			$counterSeven, 
			$counterEight, 
			$counterNine, 
			$counterTen, 
			$counterEleven, 
			$counterTwelve,
			$opponentCounter,
			$counterOne, 
			$counterTwo, 
			$counterThree, 
			$counterFour, 
			$counterFive, 
			$counterSix,
			// loop hack - fix after MVP
			$counterSeven, 
			$counterEight, 
			$counterNine, 
			$counterTen, 
			$counterEleven, 
			$counterTwelve,
			$opponentCounter,
			$counterOne, 
			$counterTwo, 
			$counterThree, 
			$counterFour, 
			$counterFive, 
			$counterSix
		],
		hollow: [
			$cupSeven, 
			$cupEight, 
			$cupNine, 
			$cupTen, 
			$cupEleven, 
			$cupTwelve,
			$opponentBank,
			$cupOne, 
			$cupTwo, 
			$cupThree, 
			$cupFour, 
			$cupFive, 
			$cupSix
		]
	}
};

/* PLAYER TURN */
$(".cup").on("click", function(event){
		let clickedCup = event.target.id;
		let cupKey = gameSequence.player.key[clickedCup];
		let $getCounter = gameSequence.player.counter[cupKey];
		if ($getCounter.text() === "0") {
			return console.log("invalid move")};
		let $protectFlow = parseFloat($getCounter.text());
		let i;
		for (i=1; i <= $protectFlow; i++){
			let impactIndex = cupKey+i;
			let $impactCounter = gameSequence.player.counter[impactIndex];
			let incrementCounter = $impactCounter.text(parseFloat($impactCounter.text())+1);
			$getCounter.text(parseFloat($getCounter.text())-1);
		};
		if (gameSequence.player.counter[cupKey+i-1].text() === "1" && gameSequence.player.counter[cupKey+i-1] !== $playerCounter) {
			if (cupKey+i > 12){
				i = i-13;
			};
			let counterPair = gameSequence.player.arrayPair[cupKey+i-1];
			let $captureCounter = parseFloat(gameSequence.player.counter[counterPair].text());
			let $printPlayerCounter = parseFloat($playerCounter.text());
			$playerCounter.text($printPlayerCounter + $captureCounter);
			gameSequence.player.counter[counterPair].text(0);
		}
		if (gameSequence.player.counter[cupKey+i-1] === $playerCounter) {
			console.log("go again!");	
		} else console.log("opponent's turn");
	});



/* OPPONENT TURN */
$(".cup").on("click", function(event){
		let clickedCup = event.target.id;
		let cupKey = gameSequence.opponent.key[clickedCup];
		let $getCounter = gameSequence.opponent.counter[cupKey];
		if ($getCounter.text() === "0") {
			return console.log("invalid move")};
		let $protectFlow = parseFloat($getCounter.text());
		let i;
		for (i=1; i <= $protectFlow; i++){
			let impactIndex = cupKey+i;
			let $impactCounter = gameSequence.opponent.counter[impactIndex];
			let incrementCounter = $impactCounter.text(parseFloat($impactCounter.text())+1);
			$getCounter.text(parseFloat($getCounter.text())-1);
		};
		if (gameSequence.opponent.counter[cupKey+i-1].text() === "1" && gameSequence.opponent.counter[cupKey+i-1] !== $opponentCounter) {
			if (cupKey+i > 12){
				i = i-13;
			};
			let counterPair = gameSequence.opponent.arrayPair[cupKey+i-1];
			let $captureCounter = parseFloat(gameSequence.opponent.counter[counterPair].text());
			let $printOpponentCounter = parseFloat($opponentCounter.text());
			$opponentCounter.text($printOpponentCounter + $captureCounter);
			gameSequence.opponent.counter[counterPair].text(0);
		}
		if (gameSequence.opponent.counter[cupKey+i-1] === $opponentCounter) {
			console.log("go again!");	
		} else console.log("player's turn");
	});


// ATTEMPTED BOARD LOOP
// let cupKey = gameSequence.player.key[clickedCup];
// 		let $getCounter = gameSequence.player.counter[cupKey];
// 		let $protectFlow = parseFloat($getCounter.text());
// 		let i;
// 		let impactIndex;
// 		for (i=1; i <= $protectFlow; i++){
// 			impactIndex = cupKey+i;
// 			if (impactIndex > 12){
// 				impactIndex=0;
// 				$protectFlow-i;
// 			};
// 			let $impactCounter = gameSequence.player.counter[impactIndex];
// 			let incrementCounter = $impactCounter.text(parseFloat($impactCounter.text())+1);
// 		};

// player
//  --opponent
//  --player





class Game {
	constructor(playerOne, playerTwo){
		this.player = playerOne;
		this.opponent = playerTwo;
	}
	announcePlayers(){
		console.log(`this is ${this.player}`)
		console.log(`this is ${this.opponent}`)
	}
}

const players = new Game($("#player--one").val(), $("#player--two").val());

// const player = new Participant($("opponent"));
// const player = new Participant($("opponent"));

// turn
//  --turn indicator??

// if player

// end of game / outcome





















