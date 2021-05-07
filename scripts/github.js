const APIURL = 'https://api.github.com/users/A13X4ND7A';
const avatar = document.getElementById('avatar');
const bio = document.getElementById('github-bio');
const following = document.getElementById('following');
const followers = document.getElementById('followers');
const repositories = document.getElementById('repositories');
const repoList = document.getElementById('repos');

async function getUser() {
	try {
		const { data } = await axios(APIURL);
		console.log(data);
		//set the html properties to the data brought in
		avatar.src = data.avatar_url;
		bio.innerText = data.bio;
		following.innerHTML = data.following + '<strong>Following</strong>';
		followers.innerHTML = data.followers + '<strong>Followers</strong>';
		repositories.innerHTML =
			data.public_repos + '<strong>Repositories</strong>';
	} catch (err) {
		console.log(err);
	}
}

async function getRepos() {
	const { data } = await axios(APIURL + '/repos');

	let length = data.length;
	let lastFive = length - 5;

	repoList.innerHTML = data
		.slice(lastFive, length)
		.map((repoInfo) => {
			return `<a href="${repoInfo.html_url}" class="repo box-shadow" target="_blank"> ${repoInfo.name}</a>`;
		})
		.join('');
}

getUser();
getRepos();
