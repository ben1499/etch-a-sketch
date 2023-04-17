const container = document.querySelector('#container');
const reset = document.querySelector('.reset');
const gridSubmit = document.querySelector('.size-change');
const errorText = document.querySelector('.error');
const rainbow = document.querySelector('.rainbow');



let div;
let rowDiv;


let num = 0;
for (let i = 0; i < 16; i++) {
    rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    container.appendChild(rowDiv);
    for (let j = 0; j < 16; j++) {
        div = document.createElement('div')
        div.classList.add('block');
        rowDiv.appendChild(div);
    }
}

function changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.style.backgroundColor = 'black';
}

// const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

let blocks = document.querySelectorAll('.block');
blocks.forEach((block) => block.addEventListener('mouseenter', changeColor));


rainbow.addEventListener('click', )





reset.addEventListener('click', () => {
    blocks.forEach((block) => block.style.backgroundColor = 'white')
})

gridSubmit.addEventListener('click', () => {
    let gridSize = document.querySelector('.grid-size').value;
    if (gridSize < 0 || gridSize > 100) {
        errorText.textContent = 'Enter a valid number';
        return;
    }
    container.textContent = '';
    for (let i = 0; i < gridSize; i++) {
        rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        container.appendChild(rowDiv);
        for (let j = 0; j < gridSize; j++) {
            div = document.createElement('div')
            div.classList.add('block');
            rowDiv.appendChild(div);
        }
    }
    blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => block.addEventListener('mouseenter', changeColor));
})




