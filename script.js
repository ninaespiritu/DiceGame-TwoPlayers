const body = document.getElementById("game");
const header = document.querySelector(".header");

// PLAYER 1 VARIABLES
const areaPlayer1 = document.getElementById("areaPlayer1");
const scoreContainer1 = document.querySelector(".score-container-1");
const scorePlayer1 = document.getElementById("scorePlayer1");
const imageContainer1 = document.querySelector(".image-container-1");
const imagePlayer1 = document.getElementById("imagePlayer1");
const rollText1 = document.getElementById("rollText1");
const rollPlayer1 = document.getElementById("rollPlayer1");
const passPlayer1 = document.getElementById("passPlayer1");
const playAgain1 = document.getElementById("playAgain1");

// PLAYER 2 VARIABLES
const areaPlayer2 = document.getElementById("areaPlayer2");
const scoreContainer2 = document.querySelector(".score-container-2");
const scorePlayer2 = document.getElementById("scorePlayer2");
const imageContainer2 = document.querySelector(".image-container-2");
const imagePlayer2 = document.getElementById("imagePlayer2");
const rollText2 = document.getElementById("rollText2");
const rollPlayer2 = document.getElementById("rollPlayer2");
const passPlayer2 = document.getElementById("passPlayer2");
const playAgain2 = document.getElementById("playAgain2");

let player1Total = 0;
let player2Total = 0;
let currentPlayer = 1;

// WHICH PLAYER WILL ROLL FIRST

if ((currentPlayer = 1)) {
	areaPlayer1.style.backgroundColor = "#313a60";
	imageContainer1.style.backgroundColor = "#272e4d";
	scoreContainer1.style.backgroundColor = "#272e4d";
	rollText2.textContent = "Player 1 is rolling";
} else if ((currentPlayer = 2)) {
	areaPlayer2.style.backgroundColor = "#313a60";
	imageContainer2.style.backgroundColor = "#272e4d";
	scoreContainer2.style.backgroundColor = "#272e4d";
	rollText1.textContent = "Player 2 is rolling";
}

// CSS CHANGES

const winPlayer1 = () => {
	scorePlayer1.textContent = `${player1Total} - Winner!`;
	scorePlayer1.style.fontWeight = "bold";
	areaPlayer1.style.backgroundColor = "#00C288";
	imageContainer1.style.backgroundColor = "#00af7a";
	scoreContainer1.style.backgroundColor = "#00af7a";
	rollPlayer1.style.display = "none";
	passPlayer1.style.display = "none";
	playAgain1.style.display = "block";
	playAgain1.style.backgroundColor = "#00885f";
	player1Total = 0;
};
const losePlayer1 = () => {
	scorePlayer1.textContent = `${player1Total} - You lost!`;
	scorePlayer1.style.fontWeight = "bold";
	areaPlayer1.style.backgroundColor = "#AA0039";
	imageContainer1.style.backgroundColor = "#990033";
	scoreContainer1.style.backgroundColor = "#990033";
	rollPlayer1.style.display = "none";
	passPlayer1.style.display = "none";
	playAgain1.style.display = "block";
	playAgain1.style.backgroundColor = "#770028";
	player1Total = 0;
};
const winPlayer2 = () => {
	scorePlayer2.textContent = `${player2Total} - Winner!`;
	scorePlayer2.style.fontWeight = "bold";
	areaPlayer2.style.backgroundColor = "#00C288";
	imageContainer2.style.backgroundColor = "#00af7a";
	scoreContainer2.style.backgroundColor = "#00af7a";
	rollPlayer2.style.display = "none";
	passPlayer2.style.display = "none";
	playAgain2.style.display = "block";
	playAgain2.style.backgroundColor = "#00885f";
	player2Total = 0;
};
const losePlayer2 = () => {
	scorePlayer2.textContent = `${player2Total} - You lost!`;
	scorePlayer2.style.fontWeight = "bold";
	areaPlayer2.style.backgroundColor = "#AA0039";
	imageContainer2.style.backgroundColor = "#990033";
	scoreContainer2.style.backgroundColor = "#990033";
	rollPlayer2.style.display = "none";
	passPlayer2.style.display = "none";
	playAgain2.style.display = "block";
	playAgain2.style.backgroundColor = "#770028";
	player2Total = 0;
};

// PLAYER 1
rollPlayer1.addEventListener("click", () => {
	if (currentPlayer == 1) {
		let currentRoll = Math.ceil(Math.random() * 6);

		rollText1.style.display = "none";
		imageContainer1.style.display = "block";
		imagePlayer1.src = `images/${currentRoll}.png`;

		areaPlayer1.style.backgroundColor = "#313a60";
		imageContainer1.style.backgroundColor = "#272e4d";
		scoreContainer1.style.backgroundColor = "#272e4d";

		player1Total += currentRoll;
		scorePlayer1.textContent = player1Total;

		if (player1Total >= 40) {
			// PLAYER 1 WINS
			body.style.backgroundColor = "#161822";
			winPlayer1();
			// PLAYER 2 LOSES
			rollText2.textContent = "Better luck next time.";
			losePlayer2();
		} else {
			if (currentRoll == 1) {
				// PLAYER 1 LOSES
				body.style.backgroundColor = "#161822";
				losePlayer1();
				// PLAYER 2 WINS
				rollText2.textContent = "It's your lucky day!";
				winPlayer2();
			}
		}
	}
});

// PLAYER 2
rollPlayer2.addEventListener("click", () => {
	if (currentPlayer == 2) {
		let currentRoll = Math.ceil(Math.random() * 6);

		rollText2.style.display = "none";
		imageContainer2.style.display = "block";
		imagePlayer2.src = `images/${currentRoll}.png`;

		player2Total += currentRoll;
		scorePlayer2.textContent = player2Total;

		if (player2Total >= 40) {
			// PLAYER 2 WINS
			body.style.backgroundColor = "#161822";
			winPlayer2();
			// PLAYER 1 LOSES
			rollText1.textContent = "Maybe don't pass next time.";
			losePlayer1();
		} else {
			if (currentRoll == 1) {
				// PLAYER 2 LOSES
				body.style.backgroundColor = "#161822";
				losePlayer2();
				// PLAYER 1 WINS
				rollText1.textContent = "It's your lucky day!";
				winPlayer1();
			}
		}
	}
});

// PASS BUTTONS

passPlayer1.addEventListener("click", () => {
	if (currentPlayer == 1) {
		currentPlayer = 2;
		rollText2.textContent = "Roll your dice!";
		areaPlayer1.style.backgroundColor = "#161822";
		imageContainer1.style.backgroundColor = "#1b1e2b";
		scoreContainer1.style.backgroundColor = "#1b1e2b";
		areaPlayer2.style.backgroundColor = "#313a60";
		imageContainer2.style.backgroundColor = "#272e4d";
		scoreContainer2.style.backgroundColor = "#272e4d";
	}
});
passPlayer2.addEventListener("click", () => {
	if (currentPlayer == 2) {
		currentPlayer = 1;
		areaPlayer2.style.backgroundColor = "#161822";
		imageContainer2.style.backgroundColor = "#1b1e2b";
		scoreContainer2.style.backgroundColor = "#1b1e2b";
		areaPlayer1.style.backgroundColor = "#313a60";
		imageContainer1.style.backgroundColor = "#272e4d";
		scoreContainer1.style.backgroundColor = "#272e4d";
	}
});

// PLAY AGAIN BUTTONS

playAgain1.addEventListener("click", () => {
	window.location.reload();
});
playAgain2.addEventListener("click", () => {
	window.location.reload();
});
