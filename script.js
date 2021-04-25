var startText = document.getElementById('typing');
var spanText = document.getElementById('wd-txt');

const textToBeTyped = ['I am a', 'Web Developer..'];
var currentMainPhrase = [];
var currentSpanPhrase = [];

let i = 0;
let j = 0;
let k = 0;
let nextWord = false;
let isDeleting1 = false;
let isDeleting = false;
let nextDelete = false;
let isPausing = false;

function typeText() {
	isPausing = false;
	if (i < textToBeTyped.length) {
		//first word add
		if (!isDeleting && !nextWord && j <= textToBeTyped[0].length) {
			currentMainPhrase.push(textToBeTyped[0][j]);
			j++;
			startText.innerText = currentMainPhrase.join('');
		}
		// after first word add
		if (j === textToBeTyped[0].length) {
			//check to see if the span div exists, if not then add it before the end of the outer div
			if (spanText == null) {
				startText.insertAdjacentHTML('beforeend', '<span id="wd-txt"></span>');
				spanText = document.getElementById('wd-txt');
			}
			nextWord = true;
		}

		//second word add
		if (!isDeleting && nextWord && k <= textToBeTyped[1].length) {
			currentSpanPhrase.push(textToBeTyped[1][k]);
			k++;
			spanText.innerText = currentSpanPhrase.join('');
		}

		if (k === textToBeTyped[1].length) {
			isPausing = true;
			isDeleting = true;
			nextWord = false;
		}

		//delete the second word
		if (isDeleting && !nextDelete && textToBeTyped[1].length >= k) {
			currentSpanPhrase.pop(textToBeTyped[1][k]);
			k--;
			spanText.innerText = currentSpanPhrase.join('');
		}
		if (isDeleting && !nextDelete && k === 0) {
			nextWord = false;
			nextDelete = true;
		}
		//delete the first word
		if (isDeleting && nextDelete && k === 0 && j <= textToBeTyped[0].length) {
			currentMainPhrase.pop(textToBeTyped[0][j]);
			j--;
			startText.innerText = currentMainPhrase.join('');
		}

		if (isDeleting && j === 0) {
			isDeleting = false;
			nextDelete = false;
			spanText = null;
		}
		const spedUp = Math.random() * (80 - 50) + 50;
		const normalSpeed = Math.random() * (300 - 200) + 200;
		const time = isPausing ? 9000 : isDeleting ? spedUp : normalSpeed;
		setTimeout(typeText, time);
	}
}
typeText();
