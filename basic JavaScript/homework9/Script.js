let arr1 = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
const listUl = document.createElement('div');

function getInList(a, b = document.body) {
    b.insertAdjacentHTML("beforeend", `<ul>${a.map(elem => {
        return `<li>${elem}</li>`
    }).join('')}</ul>`);
}
document.body.append(listUl);
getInList(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"], listUl);