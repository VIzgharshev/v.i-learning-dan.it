let arr1 = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];

function getInList(a, b = document.body) {
    const listUl = document.createElement('ul');
    a.map((elem) => {
        const li = document.createElement('li');
        li.innerHTML = elem;
        listUl.append(li);
    });
    if (b === document.body) {
        document.body.append(listUl);
    } else {
        const ulWrapper = document.createElement(b);
        document.body.append(ulWrapper);
        ulWrapper.append(listUl);
    }
}

getInList(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"], 'div');