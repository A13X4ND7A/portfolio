const startText = document.getElementById('typing');

const mainPhrase = ['and I am a'];
const spanPhrase = ['web developer.'];
const currentMainPhrase = [''];
const currentSpanPhrase = [''];

let i = 0;
let j = 0;
let x = 0;
let y = 0;

isDone = false; //check if the first loop is finished
isFinishedForward = false; //check to see if the loops have finished printing overall

function typeingText() {
	if (!isFinishedForward) {
		//loop one for the first half of the text
		if (i < mainPhrase.length) {
			if (j < mainPhrase[i].length) {
				currentMainPhrase.push(mainPhrase[i][j]); //push each letter into a new array to be displayed
				j++;
				if (j === mainPhrase[i].length) {
					isDone = true;
				}
			}
		}
		startText.innerText = currentMainPhrase.join('');

		//create a span element for the second loop
		startText.insertAdjacentHTML('beforeend', '<span id="wd-txt"></span>');
		var spanText = document.getElementById('wd-txt'); //get the Element from the dom to allow input

		setTimeout(() => {
			if (isDone) {
				//loop through the array and push to a second new array in order to output into the span
				if (y < spanPhrase[x].length) {
					currentSpanPhrase.push(spanPhrase[x][y]);
					y++;
					if (y === spanPhrase[x].length) {
						isFinishedForward = true;
					}
				}
			}
		}, 2000);

		spanText.innerText = currentSpanPhrase.join('');
	}

	setTimeout(typeingText, 200);
}

typeingText();
