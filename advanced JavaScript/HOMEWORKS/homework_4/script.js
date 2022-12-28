let linkFilmList = 'https://ajax.test-danit.com/api/swapi/films';

axios.get(linkFilmList).then(response => {
	let filmList = response;
   for (const film of filmList.data) {
      console.log(film);
		let wrapper = document.querySelector('.wrapper');
		let ul = document.createElement('ul');
      ul.classList.add('card');
      
		ul.insertAdjacentHTML(
			'beforeend',
			`<h1>${film.name}</h1><p>Episode id: ${film.episodeId}</p>`
		);
		ul.insertAdjacentHTML('beforeend', `<p>${film.openingCrawl}</p>`);

      wrapper.append(ul);
      
		for (const item of filmList.data) {
         let ul2 = document.createElement('ul');
			 for (const char of item.characters) {
				axios.get(char).then(resp => {
					ul2.insertAdjacentHTML('beforeend', `<li>Character name: ${resp.data.name}</li>`);
				});
         }
         ul.append(ul2)
		}
	}
});
