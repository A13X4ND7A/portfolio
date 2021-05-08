const download = document.getElementById('cv');
const response = document.getElementById('cap-Response');

download.onclick = () => {
	var response = grecaptcha.getResponse();

	if (response.length == 0) {
		response.classList.add('showResponse');
	}
};
