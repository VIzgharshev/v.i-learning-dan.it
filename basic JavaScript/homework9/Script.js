let arr1 = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];

// function getInList(a, b) {
//     let listParent = document.createElement(b);
//     listParent.classList.add('list')
//     document.body.append(listParent);
//     for (let i = 0; i < a.length; i++) {
//         let li = document.createElement('li');
//         li.classList.add('list-item')
//         li.innerHTML = a[i];
//         listParent.append(li);
//     }
// }
//
// if (b !== undefined) {
//     let li = document.createElement('li');
//     li.innerHTML = elem;
//     let listWrapper = document.createElement(b);
//     document.body.append(listWrapper);
//     listWrapper.append(li);
// } else {
//     document.body.append(li);
// }
// if (b !== undefined) {
//     let listParent = document.createElement(b);
//     listParent.classList.add('list')
//     document.body.append(listParent);
//     for (let i = 0; i < a.length; i++) {
//         let li = document.createElement('li');
//         li.classList.add('list-item')
//         li.innerHTML = a[i];
//         listParent.append(li);
//     }
// } else {
//     let list = a.map((elem) => {
//         let li = document.createElement('li');
//         li.classList.add('list-item')
//         li.innerHTML = elem;
//         document.body.append(li);
//     });
// }


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