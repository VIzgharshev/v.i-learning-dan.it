let ulrUsers = 'https://ajax.test-danit.com/api/json/users';
let ulrPosts = 'https://ajax.test-danit.com/api/json/posts';
const template = document.querySelector('.card');
let postCounter = 100;

//--------------------------anim-------------------------------
window.onload = () => {
  setTimeout(() => {
    let anim = document.querySelector('.anim');
    anim.style.display = 'none';
  }, 4000);
};
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
      }).then((resp) => {
        document.getElementById(`${idForDelete}`).remove();
      });
    }
    //-------------------------------------------------------------------------

    card.removeAttribute('style');
    return card;
  }
}

class post extends card {
  sendForm() {
    async function send() {
      await fetch('https://ajax.test-danit.com/api/json/posts', {
        method: 'POST',
        body: {
          title: this.title,
          text: this.text,
          userName: this.userName,
          userEmail: this.userMail,
          userId: this.idUser,
          cardId: this.idCard,
        },
      });
    }
  }
}

//-------------------------------Запити на сервер-----------------------------------

const allUsers = fetch(ulrUsers, { method: 'GET' }).then((response) => {
  return response.json();
});

const allPosts = fetch(ulrPosts, { method: 'GET' }).then((response) => {
  return response.json();
});

const fullInfo = Promise.all([allUsers, allPosts]);
fullInfo
  .then((resp) => {
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
  })
  .then((resp) => {
    document.querySelector('.card').remove();
  });

//-------------------------------Змінні для модального вікна-----------------------------------

let createPostBtn = document.querySelector('.header__btn');
let modalWindow = document.querySelector('.modal');
let closeModalWindow = document.querySelector('.form__close');
let formSubmit = document.querySelector('.form__btn');

//-------------------------------Відкриття модального вікна-----------------------------------

createPostBtn.onclick = newPost;
function newPost() {
  //  event.preventDefault();
  modalWindow.classList.remove('hidden');
}

//-------------------------------закриття модального вікна-----------------------------------

closeModalWindow.onclick = closeForm;
function closeForm() {
  event.preventDefault();
  modalWindow.classList.add('hidden');
}

//-------------------------------Відправка форми-----------------------------------

formSubmit.onclick = createNewPost;

function createNewPost() {
  let newTitle = document.querySelector('.form__title').value;
  let newText = document.querySelector('.form__text').value;

  allUsers.then((resp) => {
    let user1 = resp[0];

    const newPost = new post(
      newTitle,
      newText,
      user1.name,
      user1.email,
      user1.id,
      postCounter++
    );
    document.querySelector('.wrapper').prepend(newPost.render());
    newPost.sendForm();
  });

  modalWindow.classList.add('hidden');
}
