const container = document.querySelector('#container');
let div;

let num = 0;
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        div = document.createElement('div')
        div.classList.add('block');
        container.appendChild(div);
    }
}

const blocks = document.querySelectorAll('.block');


blocks.forEach((block) => block.addEventListener('mouseenter', () => {
    block.style.backgroundColor = 'black';
}))