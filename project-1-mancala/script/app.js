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
$("#master-stone").hide();
$("#inst-toggle").hide();
$(".game-board").hide();
$("#opponent").hide();
$("#player").hide();


/* START BUTTON */
const setCounters = () => {
	$(".counter").text("4");
}

$("#inst-toggle").on("click", function(event){
	$(".instructions").toggle();
})

$("#start-game").on("click", function(event){
	console.log("Mancala has started!");
	$(".instructions").toggle();
	$("#inst-toggle").show();
	$(".game-board").show();
	$("#opponent").show();
	$("#player").show();
	setCounters();
	this.remove();
})


// if click cup
// then grab counter num
// then select counter num+1 in player counter array
// increment counter +1
// clone stone +1

const $counterOne = $(".player__counters > .counter").eq(0);
const $counterTwo = $(".player__counters > .counter").eq(1);
const $counterThree = $(".player__counters > .counter").eq(2);
const $counterFour = $(".player__counters > .counter").eq(3);
const $counterFive = $(".player__counters > .counter").eq(4);
const $counterSix = $(".player__counters > .counter").eq(5);
const $playerCounter = $("#player__bank-counter");
const $counterSeven = $(".opponent__counters > .counter").eq(5);
const $counterEight = $(".opponent__counters > .counter").eq(4);
const $counterNine = $(".opponent__counters > .counter").eq(3);
const $counterTen = $(".opponent__counters > .counter").eq(2);
const $counterEleven = $(".opponent__counters > .counter").eq(1);
const $counterTwelve = $(".opponent__counters > .counter").eq(0);
const $opponentCounter = $("#opponent__bank-counter");

const $cupOne = $(".player__cups > .cup").eq(0);
const $cupTwo = $(".player__cups > .cup").eq(1);
const $cupThree = $(".player__cups > .cup").eq(2);
const $cupFour = $(".player__cups > .cup").eq(3);
const $cupFive = $(".player__cups > .cup").eq(4);
const $cupSix = $(".player__cups > .cup").eq(5);
const $playerBank = $("#player__bank");
const $cupSeven = $(".opponent__cups > .cup").eq(5);
const $cupEight = $(".opponent__cups > .cup").eq(4);
const $cupNine = $(".opponent__cups > .cup").eq(3);
const $cupTen = $(".opponent__cups > .cup").eq(2);
const $cupEleven = $(".opponent__cups > .cup").eq(1);
const $cupTwelve = $(".opponent__cups > .cup").eq(0);
const $opponentBank = $("#opponent__bank");

const gameSequence = {
	player: [$counterOne, $counterTwo, $counterThree, $counterFour, $counterFive, $counterSix, $playerCounter, $counterSeven, $counterEight, $counterNine, $counterTen, $counterEleven, $counterTwelve],
	opponent: [$counterSeven, $counterEight, $counterNine, $counterTen, $counterEleven, $counterTwelve, $opponentCounter, $counterOne, $counterTwo, $counterThree, $counterFour, $counterFive, $counterSix]
};

$(".cup").on("click", function(event){
		console.log(event.target.id);
		const playerTurn = () => {

}
	});


// player
//  --opponent
//  --player

class Participant {
	constructor(name){
		this.name;
	}
}

// const player = new Participant($("opponent"));
// const player = new Participant($("opponent"));

// turn
//  --turn indicator??

// if player

// end of game / outcome





















