/* ==== MANCALA ==== */

/* EQUIPMENT */
// game board
	// 12 cups (6 on each side)
	// 2 stores (1 on each end)
	// counters at each cup and store
// 48 stones
// 2 players (2 humans || 1 human && 1 computer)


/* SETUP */
// 4 stones in each cup


/* INSTRUCTIONS (specific/explicit) */
// players sit across from one another, with 6 cups in front and 1 store on either end
// the store on the right hand side of each player is that player's store; the store on the left hand side is the opponent's store
// player1 takes a turn
	// player1 selects 1 of 6 cups of stones on their side
	// player1 takes stones from the selected cup and places one stone into the cup or store to the right
	// this continues to each following cup/store, moving counter-clockwise around the board until the stones from the selected cup run out
	// player should always skip their opponent's store when placing stones
	// IF the last stone from the selected cup lands in an empty cup on player1's side, player1 collects the stones from the opposing cup on player2/computer's side and places these stones into their own (player1's) store
	// IF the last stone from the selected cup lands in player1's store, player1 takes another turn
	// ELSE, player1's turn ends
// player2/computer takes a turn
	// player2/computer's turn should follow the same steps as player1's turn
// player1 and player2/computer alternate turns until a player has 0 stones in all 6 of the cups on their side
// the player with 0 stones in all 6 of the cups on their side then takes the remaining stones in the 6 cups on the opposing player's side and places them in their own store
// the game has now ended; all stones should be in the game board stores
// the player with the most stones in their store wins


/* == USER STORIES == */

/* game board and setup */

// display rectanglular board
	// 6 circular cups on each long side, spaced apart evenly across side
	// 1 oval / rounded rectangle "store" on each short side, taking up length of side
	// counters above each cup and store indicate number of stones contained
// display icon containing simple instructions
	// on icon click, instructions appear and disappear
// display button to start game

// --- assign a stone a value of 1 and give it a class of "stone"
// --- cups and stores sum the total value contained
// --- display sum in counters
// --- cups and stores assigned a class of "hole"
// --- cups assigned a class of "cup"; stores assigned a class of "store"
// --- cups on bottom of board assigned class of "player-cup"; cups on top of board assigned class of "opponent-cup"
// --- store on right of board assigned class of "player-store"; store on left of board assigned class of "opponent-store"
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
// increment +1 stone to each cup or store to the right at the same rate
// skip opponent-store on increment

// if last hole to increment === .store; player takes another turn
// if last hole to increment === .cup && 0; player store collects value of adjacent opposing cup and opposing cup clears

// else, prompt next player's turn

/* game end */

// if all player-cup's === 0, then collect value of all opponent-cup's into player-store; clear opponent-cup's
// if all opponent-cup's === 0, then collect value of all player-cup's into opponent-store; clear player-cup's
// if player-store > opponent-store, display: "Player wins!"
// if opponent-store > player-store, display: "Opponent wins!"


/* MVP */
// a game board in the DOM with dynamic counters that keep track of store and cup values so that a full game can be played with all rules
// click to play

/* Stretch Goals */
// show physical "stones" changing in cups and stores as players take turns
// design robust CSS
// allow players to modify player names
// super stretch: build in a one player mode against a CPU with simple intelligence (if statements)






// instructions
// game start

// player
//  --opponent
//  --player

// turn
//  --turn indicator??

// end of game / outcome























