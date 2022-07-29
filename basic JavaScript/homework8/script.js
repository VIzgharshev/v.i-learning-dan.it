//----------------First Task----------------//
let pCollection = document.getElementsByTagName("p");
for (let i of pCollection) {
    i.style.backgroundColor = '#ff0000';
}

//----------------Second Task----------------//
let elem = document.getElementById('optionsList');
console.log(elem);

console.log(elem.parentElement);

let elemChildren = elem.children;
for (let child of elemChildren) {
    console.log(child.nodeName, child.nodeType);
}

//----------------Third Task----------------//
document.querySelector('#testParagraph').textContent = 'This is a paragraph';

//----------------Fourth Task----------------//
let mainHeader = document.body.firstElementChild.children;
for (let elem of mainHeader) {
    elem.className = 'nav-item';
}
console.log(mainHeader);

//----------------Fifth Task----------------//
let sectionElems = document.querySelectorAll('.section-title');
for (let elem of sectionElems) {
    elem.classList.remove('section-title');
}
    console.log(sectionElems);