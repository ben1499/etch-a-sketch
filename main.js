const container = document.querySelector('#container');
const reset = document.querySelector('.reset');
const gridSubmit = document.querySelector('.size-change');
const errorText = document.querySelector('.error');

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

let blocks = document.querySelectorAll('.block');
blocks.forEach((block) => block.addEventListener('mouseenter', changeColor));



function changeColor() {
    this.style.backgroundColor = 'black';
}




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




