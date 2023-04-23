const container = document.querySelector('#container');
const reset = document.querySelector('.reset');
const gridSubmit = document.querySelector('.size-change');
const errorText = document.querySelector('.error');
const black = document.querySelector(".black");
const rainbow = document.querySelector('.rainbow');
const opaque = document.querySelector('.opaque');
const eraser = document.querySelector('.eraser');

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
// blocks.forEach((block) => block.addEventListener('mouseenter', () => {
//     block.style.backgroundColor = 'black';
// }));

let alpha = 0;

changeColor('black');

function changeColor(selectedColor) {
    blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        block.addEventListener('mouseenter', () => {
            if (selectedColor === 'rainbow') {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                block.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            } else if (selectedColor == 'opaque') {
                block.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                let currentColorValue = block.style.getPropertyValue('background-color');
                console.log(currentColorValue);
                let currentAlphaValue = currentColorValue.slice(-2, -1);
                currentAlphaValue = +currentAlphaValue;
                if (currentAlphaValue <= 0.9) {
                    block.style.backgroundColor = `rgba(0, 0, 0, ${currentAlphaValue + 0.1})`;
               }
            } else if (selectedColor == 'eraser') {
                block.style.backgroundColor = '#fff';
            }
            block.style.backgroundColor = selectedColor;
        })
    })

}


black.addEventListener('click', () => {
    changeColor('black');
});

rainbow.addEventListener('click', () => {
    changeColor('rainbow');
});

opaque.addEventListener('click', () => {
    changeColor('opaque');
})

eraser.addEventListener('click', () => {
    changeColor('eraser');
})

reset.addEventListener('click', () => {
    blocks.forEach((block) => {
        block.style.backgroundColor = 'white';
    })
})













// function changeBlack() {
//     blocks = document.querySelectorAll('.block');
//     blocks.forEach((block) => block.addEventListener('mouseenter', () => {
//         block.style.backgroundColor = 'black';
//     }));
// }

// function changeWhite() {
//     blocks = document.querySelectorAll('.block');
//     blocks.forEach((block) => block.addEventListener('mouseenter', () => {
//         block.style.backgroundColor = 'white';
//     }));
// }

// function changeRainbow() {
//     blocks = document.querySelectorAll('.block');
//     blocks.forEach((block) => block.addEventListener('mouseenter', () => {
//         const r = Math.floor(Math.random() * 256);
//         const g = Math.floor(Math.random() * 256);
//         const b = Math.floor(Math.random() * 256);
//         block.style.opacity = 1;
//         block.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     }));
// }

// let a = 0; //alpha value for rgba

// function changeOpaque() {
//     blocks = document.querySelectorAll('.block');
//     blocks.forEach((block) => {
//         block.addEventListener('mouseenter', () => {
//             block.style.opacity = (block.style.opacity == 0) ?
//             0.1 : (block.style.opacity == 0.1) ?
//             0.2 : (block.style.opacity == 0.2) ?
//             0.3 : (block.style.opacity == 0.3) ?
//             0.4 : (block.style.opacity == 0.4) ?
//             0.5 : (block.style.opacity == 0.5) ?
//             0.6 : (block.style.opacity == 0.6) ?
//             0.7 : (block.style.opacity == 0.7) ?
//             0.8 : (block.style.opacity == 0.8) ?
//             0.9 : (block.style.opacity == 0.9) ?
//             1.0 : 1.0;
//     })});
// }

// black.addEventListener('click', changeBlack);
// rainbow.addEventListener('click', changeRainbow);
// opaque.addEventListener('click', changeOpaque);
// eraser.addEventListener('click', changeWhite);

// //Reset button
// reset.addEventListener('click', () => {
//     blocks.forEach((block) => block.style.backgroundColor = 'white')
// })


// Set grid size
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




