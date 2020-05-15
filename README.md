# mancala-game
GA SEI Project #1 - Mancala game

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