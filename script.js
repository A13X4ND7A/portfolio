// // const typingTextDiv = document.getElementsByClassName('.typing');

// const spanDiv = document.createElement('span');
// const div = document.createElement('div');
// const div2 = document.createElement('div');

var str = "I am a <span class='wd-txt'>Web Developer</span>",
	i = 0,
	isTag,
	text;

(function type() {
	text = str.slice(0, ++i);
	if (text === str) return;

	document.getElementById('typing').innerHTML = text;

	var char = text.slice(-1);
	if (char === '<') isTag = true;
	if (char === '>') isTag = false;

	if (isTag) return type();
	setTimeout(type, 80);
})();

var stringToBeTyped = "I am not a <span class='wd-txt'>Web Developer</span>";
var textDiv = document.querySelector('.typing2');
var x = 0;
var text2,
	isTags = true,
	isBeingAdded = true;

function type2() {
	setTimeout(function () {
		textDiv.innerHTML = text2;
		console.log(isBeingAdded);

		if (isBeingAdded) {
			if (x > stringToBeTyped.length) {
				console.log(x);
				console.log(stringToBeTyped.length);
				isBeingAdded = false;
				setTimeout(function () {
					type2();
				}, 2000);
				return;
			} else {
				x++;
			}
			text2 = stringToBeTyped.slice(1, x);
			if (text2 === stringToBeTyped) return;

			var char = text2.slice(-1);
			if (char === '<') {
				isTags = true;
				x++;
			}
			if (char === '>') {
				isTags = false;
				x++;
			}

			if (isTags) return type2();
			setTimeout(type2, 80);
		} else {
			console.log('inElse');
			text2 = stringToBeTyped.slice(x, 0);
			if (text2 === stringToBeTyped) return;

			var char = text2.slice(-1);
			if (char === '>') isTags = true;
			if (char === '<') isTags = false;

			if (isTags) return type2();
			setTimeout(type2, 80);
		}
	}, 120);
}
type2();
