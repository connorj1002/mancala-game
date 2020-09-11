/* RENDER PAGE */
$(".player-submission").hide();
$("#master-stone").hide();
$("#inst-toggle").hide();
$("#inst-close").hide();
$("#communicate").hide();
$(".game-board").hide();
$("#opponent").hide();
$("#player").hide();

/* BEGIN BUTTON */
$("#begin").on("click", function(event){
	console.log("select players");
	$(".instructions").toggle();
	$(".player-submission").show();
	this.remove();
});

/* START BUTTON */
const setCounters = () => {
	$(".opponent-container > .counter").text(4);
	$(".player-container > .counter").text(4);
	$("#opponent__bank-counter").text(0);
	$("#player__bank-counter").text(0);
};

$("#inst-toggle").on("click", function(event){
  $(".instructions").toggle();
  $("#inst-close").toggle();
});

$("#inst-close").on("click", function(event){
  $(".instructions").toggle();
  $("#inst-close").toggle();
});

$("#start-game").on("click", function(event){
  console.log("Mancala has started!");
  $(".player-submission").hide();
	$("#inst-toggle").show();
	$("#communicate").show();
	$(".game-board").show();
	$("#opponent > h3").text($("#player--two").val());
	$("#player > h3").text($("#player--one").val());
	$("#opponent").show();
	$("#player").show();
	setCounters();
	$communicate.text($("#player--one").val() + "'s move");
	runGame();
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

const $playerSet = $(".player-container > .counter");
const $opponentSet = $(".opponent-container > .counter");

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

const $communicate = $("#communicate");
const $stone = $("#master-stone > .stone");

/* GAME LOGIC ARRAYS */ 
const gameSequence = {
	player: {
		key: {
			"cup-one": 0,
			"cup-two": 1,
			"cup-three": 2,
			"cup-four": 3,
			"cup-five": 4,
			"cup-six": 5,
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
	},
	refreshStones: {
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
			$opponentCounter
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
			$cupTwelve,
			$opponentBank
		]
	}
};


let sideCleared = false;
let whichSideCleared = "";
let playerTurn = true;

const checkSides = () => {
	let totalPlayerCounters=0;
	let totalOpponentCounters=0;
	for (i=0; i <= 5; i++){
		let addPlayerCounters = parseInt($(".player-container > .counter").eq(i).text());
		totalPlayerCounters += addPlayerCounters;
		let addOpponentCounters = parseInt($(".opponent-container > .counter").eq(i).text());
		totalOpponentCounters += addOpponentCounters;
	};
	if (totalPlayerCounters === 0){
		sideCleared = true;
		whichSideCleared = "player"
	};
	if (totalOpponentCounters === 0){
		sideCleared = true;
		whichSideCleared = "opponent"
	};
};

const playerMove = () => {
$(".player-container > .cup").on("click", function(event){
		let clickedCup = event.target.id;
		let cupKey = gameSequence.player.key[clickedCup];
		let $getCounter = gameSequence.player.counter[cupKey];
		if ($getCounter.text() === "0") {
			return $communicate.text("Invalid Move");
		};
		let $protectFlow = parseFloat($getCounter.text());
		let i;
		for (i=1; i <= $protectFlow; i++){
			let impactIndex = cupKey+i;
			let $impactCounter = gameSequence.player.counter[impactIndex];
			$impactCounter.text(parseFloat($impactCounter.text())+1);
			$getCounter.text(parseFloat($getCounter.text())-1);
		};
		if (gameSequence.player.counter[cupKey+i-1].text() === "1" && gameSequence.player.counter[cupKey+i-1].attr("id") !== $playerCounter.attr("id") && gameSequence.player.counter[cupKey+i-1].parent().attr("class") === $playerSet.parent().attr("class")) {
			if (cupKey+i > 12){
				i = i-13;
			};
			let counterPair = gameSequence.player.arrayPair[cupKey+i-1];
			let $captureCounter = parseFloat(gameSequence.player.counter[counterPair].text());
			let $printPlayerCounter = parseFloat($playerCounter.text());
			$playerCounter.text($printPlayerCounter + $captureCounter);
			gameSequence.player.counter[counterPair].text(0);
			playerTurn = !playerTurn;
			$communicate.text($("#player--two").val() + "'s move");
		}
		else if (gameSequence.player.counter[cupKey+i-1] === $playerCounter) {
			playerTurn = playerTurn;
			$communicate.text("Go Again!");
		} else {
			playerTurn = !playerTurn;
			$communicate.text($("#player--two").val() + "'s move");
		};
		checkSides();
		$(".player-container > .cup").off("click");
		runGame();
	});
};

const opponentMove = () => {
$(".opponent-container > .cup").on("click", function(event){
		let clickedCup = event.target.id;
		let cupKey = gameSequence.opponent.key[clickedCup];
		let $getCounter = gameSequence.opponent.counter[cupKey];
		if ($getCounter.text() === "0") {
			return $communicate.text("Invalid Move");
		};
		let $protectFlow = parseFloat($getCounter.text());
		let i;
		for (i=1; i <= $protectFlow; i++){
			let impactIndex = cupKey+i;
			let $impactCounter = gameSequence.opponent.counter[impactIndex];
			$impactCounter.text(parseFloat($impactCounter.text())+1);
			$getCounter.text(parseFloat($getCounter.text())-1);
		};
		if (gameSequence.opponent.counter[cupKey+i-1].text() === "1" && gameSequence.opponent.counter[cupKey+i-1].attr("id") !== $opponentCounter.attr("id") && gameSequence.opponent.counter[cupKey+i-1].parent().attr("class") === $opponentSet.parent().attr("class")) {
			if (cupKey+i > 12){
				i = i-13;
			};
			let counterPair = gameSequence.opponent.arrayPair[cupKey+i-1];
			let $captureCounter = parseFloat(gameSequence.opponent.counter[counterPair].text());
			let $printOpponentCounter = parseFloat($opponentCounter.text());
			$opponentCounter.text($printOpponentCounter + $captureCounter);
			gameSequence.opponent.counter[counterPair].text(0);
			playerTurn = !playerTurn;
			$communicate.text($("#player--one").val() + "'s move");
		}
		else if (gameSequence.opponent.counter[cupKey+i-1] === $opponentCounter) {	
			playerTurn = playerTurn;
			$communicate.text("Go Again!");
		} else {
			playerTurn = !playerTurn;
			$communicate.text($("#player--one").val() + "'s move");
		};
		checkSides();
		$(".opponent-container > .cup").off("click");
		runGame();
	});
};

function runGame () {
	if (sideCleared === false){
		if (playerTurn) {
      $("#player > h3").css('color', 'rgba(0,0,0,1)');
      $("#player > h3").css('font-weight', '700');
      $("#opponent > h3").css('color', 'rgba(0,0,0,0.35)');
      $("#opponent > h3").css('font-weight', '400');
			playerMove();
		} else {
      $("#player > h3").css('color', 'rgba(0,0,0,0.35)');
      $("#player > h3").css('font-weight', '400');
      $("#opponent > h3").css('color', 'rgba(0,0,0,1)');
      $("#opponent > h3").css('font-weight', '700');
			opponentMove();
		};
	} else {
		if (whichSideCleared === "player"){
			for (i=0; i <= 5; i++){
				$playerCounter.text(parseInt($playerCounter.text()) + parseInt($opponentSet.eq(i).text()));
				$opponentSet.eq(i).text(0);
			};
		} else {
			for (i=0; i <= 5; i++){
				$opponentCounter.text(parseInt($opponentCounter.text()) + parseInt($playerSet.eq(i).text()));
				$playerSet.eq(i).text(0);
			};
		};
		if (parseInt($playerCounter.text()) > parseInt($opponentCounter.text())){
      $communicate.text($("#player--one").val() + " wins!");
      $communicate.css("color", "black");
      $communicate.css("background-color", "green");
      $("#player > h3").css('color', 'rgba(0,0,0,1)');
      $("#player > h3").css('font-weight', '700');
      $("#opponent > h3").css('color', 'rgba(0,0,0,0.35)');
      $("#opponent > h3").css('font-weight', '400');
		} else if(parseInt($playerCounter.text()) < parseInt($opponentCounter.text())){
      $communicate.text($("#player--two").val() + " wins!");
      $communicate.css("color", "black");
      $communicate.css("background-color", "red");
      $("#player > h3").css('color', 'rgba(0,0,0,0.35)');
      $("#player > h3").css('font-weight', '400');
      $("#opponent > h3").css('color', 'rgba(0,0,0,1)');
      $("#opponent > h3").css('font-weight', '700');
    } else { 
      $communicate.text("It's a Tie!");
      $communicate.css("color", "black");
      $communicate.css("background-color", "yellow");
      $("#player > h3").css('color', 'rgba(0,0,0,1)');
      $("#player > h3").css('font-weight', '700');
      $("#opponent > h3").css('color', 'rgba(0,0,0,1)');
      $("#opponent > h3").css('font-weight', '700');
    }
	};
	for (let i=0; i < 14; i++){
		let counterValue = parseInt(gameSequence.refreshStones.counter[i].text());
		let grabHollow = gameSequence.refreshStones.hollow[i]
		let clearHollows = grabHollow.empty();
		for (let i=1; i <= counterValue; i++){
			$("#master-stone > .stone").clone().appendTo(grabHollow);
			console.log("appended stone");
		};
	};
};