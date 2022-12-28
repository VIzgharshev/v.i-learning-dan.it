let ulrUsers = 'https://ajax.test-danit.com/api/json/users';
let ulrPosts = 'https://ajax.test-danit.com/api/json/posts';
const template = document.querySelector('.card');

//--------------------------Створення класу картки-------------------------------

class card {
	constructor(title, text, userName, userMail, idUser, idCard) {
		this.title = title;
		this.text = text;
		this.userName = userName;
		this.userMail = userMail;
		this.idUser = idUser;
		this.idCard = idCard;
	}

	render() {
		let card = template.cloneNode(true);
		card.setAttribute('id', this.idCard);
		card.querySelector('.card__title').innerText = this.title;
		card.querySelector('.card__text').innerText = this.text;
		card.querySelector('.card__user-name').innerText = this.userName;
		card.querySelector('.card__user-mail').innerText = this.userMail;

		let idForDelete = this.idCard;

		let delBtn = card.querySelector('.card__del-btn');
		delBtn.onclick = delPost; //---------------------listener for delete

		//-------------------------------DELETE FUNC-------------------------------
		async function delPost() {
			await fetch(`https://ajax.test-danit.com/api/json/posts/${idForDelete}`, {
				method: 'DELETE',
			}).then(resp => {
				document.getElementById(`${idForDelete}`).remove();
			});
		}
		//-------------------------------------------------------------------------

      card.removeAttribute('style');
		return card;
	}
}

//-------------------------------Запити на сервер-----------------------------------

const allUsers = fetch(ulrUsers, { method: 'GET' }).then(response => {
	return response.json();
});

const allPosts = fetch(ulrPosts, { method: 'GET' }).then(response => {
	return response.json();
});

const fullInfo = Promise.all([allUsers, allPosts]);
fullInfo.then(resp => {
	let users = resp[0];
	let posts = resp[1];
	console.log(users, posts);

	for (const user of users) {
		for (const post of posts) {
			if (user.id === post.userId) {
				let cardReady = new card(
					post.title,
					post.body,
					user.name,
					user.email,
					user.id,
					post.id
				);
				document.querySelector('.wrapper').append(cardReady.render());
			}
		}
	}
}).then(resp => {
      document.querySelector('.card').remove();
})
