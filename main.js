const container = document.querySelector('#container');
const reset = document.querySelector('.reset');
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

function changeColor() {
    this.style.backgroundColor = 'black';
}


blocks.forEach((block) => block.addEventListener('mouseenter', changeColor));


reset.addEventListener('click', () => {
    blocks.forEach((block) => block.style.backgroundColor = 'white')
})

