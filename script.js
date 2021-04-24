const startText = document.getElementsByClassName('typing');
const spanText = document.getElementsByClassName('wd-txt');
const mainPhrase = ['I am not a'];
const spanPhrase = ['web developer.'];

let i = 0;
let j = 0;

let x = 0;
let y = 0;

isDone = false;
isFinishedForward = false;

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
		if (y < spanPhrase[x].length) {
			console.log(spanPhrase[x][y]);
			y++;
			if (y === spanPhrase[x].length) {
				isDone = true;
			}
		}
	}

	setTimeout(typeingText, 200);
}

typeingText();
