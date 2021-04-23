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

var stringToBeTyped = "k am not <span class='wd-txt'>Web Developer</span>",
	x = 0,
	isTags,
	text2;

function type2() {
	text2 = stringToBeTyped.slice(0, ++x);
	if (text2 === stringToBeTyped) return;

	document.getElementById('typing2').innerHTML = text2;

	var char = text2.slice(-1);
	if (char === '<') isTags = true;
	if (char === '>') isTags = false;

	if (isTags) return type2();
	setTimeout(type2, 80);
}
type2();
