const btn = document.querySelector('.button');
// btn.addEventListener('click', () => {
//     console.log(btn);
// });

const timerID = setTimeout(logger, 2000),
    timerID1 = setInterval(logger, 2000);

clearInterval();

function logger() {
   // console.log('vasea');
}

function myAnimation() {
    const element = document.querySelector('.box');
    console.log(element);
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            element.style.top = pos + 'px';
            element.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

const now = new Date();
console.log(now);   

for (let index = 0; index < 100000; index++) {
    index**3;
}
const end = new Date();

// alert(`${end-now}`); TO DO
