'use strict';
const btn = document.querySelector('.btn');

function myAnimation() {
    const box = document.querySelector('.box');
    let position = 0;
    const id = setInterval(frame,10);
    function frame() {
        if (position === 150) {
            clearInterval(id);
        } else {
            position++;
            box.style.top = position + 'px';
            box.style.left = position + 'px';
        }
    }
}

function myAnimation1() {
    const box = document.querySelector('.box1');
    
    let position = 0;
    const id = setInterval(frame,10);
    function frame() {
        if (position === 150) {
            clearInterval(id);
        } else {
            position++;
            box.style.top = position + 'px';
            box.style.right = position + 'px';
        }
    }
}


btn.addEventListener('click', (event) => {
    myAnimation();
    myAnimation1();
});