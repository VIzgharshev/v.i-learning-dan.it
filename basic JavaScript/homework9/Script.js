let arr1 = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];

function getInList(a, b = document.body) {
    let listParent = document.createElement(b);
    listParent.classList.add('list')
    document.body.append(listParent);
    for (let i = 0; i < a.length; i++) {
        let li = document.createElement('li');
        li.classList.add('list-item')
        li.innerHTML = a[i];
        listParent.append(li);
    }
}

getInList(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"], 'ul');