const container = document.querySelector('#container');
const reset = document.querySelector('.reset');
const gridSubmit = document.querySelector('.size-change');
const errorText = document.querySelector('.error');
const black = document.querySelector(".black");
const rainbow = document.querySelector('.rainbow');
const opaque = document.querySelector('.opaque')

let div;
let rowDiv;

//Initial grid
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
blocks.forEach((block) => block.addEventListener('mouseenter', () => {
    block.style.backgroundColor = 'black';
}));

function changeBlack() {
    blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => block.addEventListener('mouseenter', () => {
        block.style.backgroundColor = 'black';
    }));
}

function changeRainbow() {
    blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => block.addEventListener('mouseenter', () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        block.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }));
}

let a = 0; //alpha value for rgba

function changeOpaque() {
    blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => block.addEventListener('mouseenter', () => {
        a += 0.1;
        a = a.toFixed(1);
        a = +a;
        if (a > 1) {
            a = 0.1;
        } 
        block.style.backgroundColor = `rgba(0, 0, 0, ${a})`;
    }));
}

black.addEventListener('click', changeBlack);
rainbow.addEventListener('click', changeRainbow);
opaque.addEventListener('click', changeOpaque);

//Reset button
reset.addEventListener('click', () => {
    blocks.forEach((block) => block.style.backgroundColor = 'white')
})


//Set grid size
gridSubmit.addEventListener('click', () => {
    let gridSize = document.querySelector('.grid-size').value;
    if (gridSize <= 0 || gridSize > 100) {
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
    gridSize = '';
    blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => block.addEventListener('mouseenter', () => {
        block.style.backgroundColor = 'black';
    }));
})




