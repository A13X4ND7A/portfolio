const startText = document.getElementsByClassName('typing');
const spanText = document.getElementsByClassName('wd-txt');
const mainPhrase = ['I am a '];
const spanPhrase = ['web developer'];

let i = 0;
let j = 0;

isDone = false;

function typeingText() {
	if (i < mainPhrase.length) {
		if (j < mainPhrase[i].length) {
			console.log(mainPhrase[i][j]);
			j++;
			if (j === mainPhrase[i].length) {
				isDone = true;
			}
		}
	}

	if (isDone) {
		console.log('hooray');
	}

	setTimeout(typeingText, 800);
}

typeingText();
