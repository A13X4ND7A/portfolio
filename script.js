var startText = document.getElementById('typing');
var spanText = document.getElementById('wd-txt');

const textToBeTyped = ['I am a ', 'Web Developer.'];
var currentMainPhrase = [];
var currentSpanPhrase = [];

let i = 0;
let j = 0;
let k = 0;
let nextWord = false;
let isDeleting1 = false;
let isDeleting = false;
let nextDelete = false;

function typeText() {
	if (i < textToBeTyped.length) {
		//first word add
		if (!isDeleting && !nextWord && j <= textToBeTyped[0].length) {
			currentMainPhrase.push(textToBeTyped[0][j]);
			j++;
			startText.innerText = currentMainPhrase.join('');
		}
		// after first word add
		if (j === textToBeTyped[0].length) {
			if (spanText == null) {
				startText.insertAdjacentHTML('beforeend', '<span id="wd-txt"></span>');
				spanText = document.getElementById('wd-txt');
			}
			console.log(startText);
			nextWord = true;
		}

		//second word add
		if (!isDeleting && nextWord && k <= textToBeTyped[1].length) {
			currentSpanPhrase.push(textToBeTyped[1][k]);
			k++;
			spanText.innerText = currentSpanPhrase.join('');
		}

		if (k === textToBeTyped[1].length) {
			isDeleting = true;
			nextWord = false;
		}

		if (isDeleting && !nextDelete && textToBeTyped[1].length >= k) {
			currentSpanPhrase.pop(textToBeTyped[1][k]);
			k--;
			spanText.innerText = currentSpanPhrase.join('');
			console.log('remove a letter from k', k);
		}
		if (isDeleting && !nextDelete && k === 0) {
			nextWord = false;
			nextDelete = true;
		}

		if (isDeleting && nextDelete && k === 0 && j <= textToBeTyped[0].length) {
			currentMainPhrase.pop(textToBeTyped[0][j]);
			j--;
			startText.innerText = currentMainPhrase.join('');
			console.log('remove a letter from j', j);
		}

		if (isDeleting && j === 0) {
			isDeleting = false;
			nextDelete = false;
			spanText = null;
		}
	}

	setTimeout(typeText, 200);
}
typeText();
