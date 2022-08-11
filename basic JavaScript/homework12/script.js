const buttons = document.querySelectorAll('.btn');

for (let btn of buttons) {
    if (btn.innerHTML === "Enter") {
        btn.classList.add('enter');
    } else {
        btn.classList.add('key');
    }
}

const otherKeys = document.querySelectorAll('.key');
const enterKey = document.querySelector('.enter');
// console.log(enterKey)

window.addEventListener("keydown", event => {
    // console.log(event.code)
    // console.log(event.key)
    if (event.code === enterKey.innerHTML) {
        // buttons.forEach(btn => {
        //     btn.removeAttributeNode(style)
        // })
        enterKey.style.backgroundColor = 'blue';
    } else {
        const keyCode = 'Key' + key.innerHTML;
        if (event.code === keyCode) {
            buttons.forEach(btn => {
                btn.removeAttributeNode('style')
            })
            key.style.backgroundColor = 'blue';
        }
        // for (let key of otherKeys) {
        //
        //     break;
        // }
    }

})