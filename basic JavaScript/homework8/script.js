// 1 Знайти всі параграфи на сторінці та встановити колір фону #ff0000
//
// 2 Знайти елемент із id="optionsList". Вивести у консоль. Знайти батьківський елемент та вивести в консоль. Знайти дочірні ноди, якщо вони є, і вивести в консоль назви та тип нод.
//
// 3 Встановіть в якості контента елемента з класом testParagraph наступний параграф -
//   This is a paragraph
//
// 4  Отримати елементи, вкладені в елемент із класом main-header і вивести їх у консоль. Кожному      з елементів присвоїти новий клас nav-item.
// 5  Знайти всі елементи із класом section-title. Видалити цей клас у цих елементів.

//----------------First Task----------------//
// let pCollection = document.getElementsByTagName("p");
// for (let i of pCollection) {
//     i.style.backgroundColor = '#ff0000';
// }

//----------------Second Task----------------//
// let elem = document.getElementById('optionsList');
// console.log(elem);
// console.log(elem.parentElement);
// let elemChildren = elem.children;
// for (let child of elemChildren) {
//     console.log(child.nodeName, child.nodeType);
// }

//----------------Third Task----------------//
// document.querySelector('#testParagraph').textContent = 'This is a paragraph';

//----------------Fourth Task----------------//
let mainHeader = document.getElementsBy('main-header')
console.log(mainHeader.firstChild);
