const download = document.getElementById('cv');
const response = document.getElementById('cap-Response');

download.onclick = () => {
	var response = grecaptcha.getResponse();

	if (response.length == 0) {
		response.classList.add('showResponse');
	}
};

var onloadCallback = function () {
	grecaptcha.render('cv-download-recaptcha', {
		'sitekey': '6LcMsMsaAAAAAOzlEMXaX3wGkentyhOAj1RSYySB',
	});
};
