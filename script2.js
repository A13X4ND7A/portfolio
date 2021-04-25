const textDisplay = document.getElementById('typing2');
const phrases = 'Hello, my name is tosser.';
let x = 0;
let y = 0;
let currentPhrase = [];
let isDeletingg = false;
// let isEnd = false;

function loop() {
	isEnd = false;
	textDisplay.innerHTML = currentPhrase.join('');

	if (x < phrases.length) {
		if (!isDeletingg && y <= phrases.length) {
			currentPhrase.push(phrases[y]);
			y++;
			textDisplay.innerHTML = currentPhrase.join('');
		}

		if (isDeletingg && y <= phrases.length) {
			currentPhrase.pop(phrases[y]);
			y--;
			textDisplay.innerHTML = currentPhrase.join('');
		}

		if (y == phrases.length) {
			// isEnd = true;
			isDeletingg = true;
		}

		if (isDeletingg && y === 0) {
			currentPhrase = [];
			isDeletingg = false;
			x++;
			if (x === phrases.length) {
				x = 0;
			}
		}
	}
	// const spedUp = Math.random() * (80 - 50) + 50;
	// const normalSpeed = Math.random() * (300 - 200) + 200;
	// const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
	setTimeout(loop, 300);
}

loop();
