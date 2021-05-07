const copyrightDate = document.getElementById('copyright-date');

const getDate = new Date();
const getYear = getDate.getFullYear();

copyrightDate.innerText = 'Copyright ' + getYear;
