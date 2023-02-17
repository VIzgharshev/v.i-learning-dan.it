let ipUrl = 'https://api.ipify.org/?format=json';
let userDataUrl = 'http://ip-api.com/json/';
let searchBtn = document.querySelector('.search-btn');

searchBtn.onclick = firstRequest();

function firstRequest() {
	let getIp = async () => {
		await fetch(ipUrl)
			.then(resp => {
				return resp.json();
			})
			.then(resp => {
				fetch(`${userDataUrl}${resp.ip}`)
					.then(resp => {
						return resp.json();
					})
					.then(resp => {
						let continent = document.querySelector('.continent');
						let country = document.querySelector('.country');
						let rigion = document.querySelector('.rigion');
						let city = document.querySelector('.city');
						let district = document.querySelector('.district');

						continent.innerHTML = resp.timezone;
						country.innerHTML = resp.country;
						rigion.innerHTML = resp.regionName;
						city.innerHTML = resp.city;
						district.innerHTML = resp.region;
					});
			});
	};
	return getIp;
}
