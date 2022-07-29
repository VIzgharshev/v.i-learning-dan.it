let arr1 = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];

function getInList(a, b = Node.parentElement) {
    b.innerHTML = '';
    for (let i = 0; i < a.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = a[i];
        b.innerHTML += li;
    }

}

getInList(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"], 'document.body');