let linkFilmList = 'https://ajax.test-danit.com/api/swapi/films';

axios.get(linkFilmList).then(response => {
	let filmList = response;
   for (const film of filmList.data) {
      console.log(film);
		let wrapper = document.querySelector('.wrapper');
      let ul = document.createElement('ul');
      let h1 =document.createElement('h1')
      let p = document.createElement('p')
      let p2 = document.createElement('p')
      ul.classList.add('card');
      
      h1.innerHTML = film.name;
      p.innerHTML = `EpisodeId: ${film.episodeId}`;
      p2.innerHTML = film.openingCrawl;
      ul.append(h1)
      ul.append(p)
      ul.append(p2)

      wrapper.append(ul);
      
		for (const item of filmList.data) {
         let ul2 = document.createElement('ul');
			 for (const char of item.characters) {
				axios.get(char).then(resp => {
					ul2.insertAdjacentHTML('beforeend', `<li>${resp.data.name}</li>`);
				});
         }
         p.after(ul2)
		}
	}
});
