// get what we need from the dom
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// controller var
let currentActive = 1;

// add event listerner for next button
next.addEventListener('click', () => {
    currentActive < circles.length && currentActive++;
    progressControll()
})

// add event listerner for prev button
prev.addEventListener('click', () => {
    currentActive > 1 && currentActive--;
    progressControll()
})

function progressControll() {

    // comment this if you are using the alternative soluation
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    /*
    * Another Soluation
    */

    // switch (currentActive) {
    //     case 1:
    //         circles[1].classList.remove('active');
    //         prev.setAttribute('disabled', '');
    //         break;
    //     case 2:
    //         circles[1].classList.add('active');
    //         circles[2].classList.remove('active');
    //         prev.removeAttribute('disabled');
    //         break;
    //     case 3:
    //         circles[2].classList.add('active');
    //         circles[3].classList.remove('active');
    //         next.removeAttribute('disabled', '');

    //         break;
    //     case 4:
    //         circles[3].classList.add('active');
    //         next.setAttribute('disabled', '');
    //         break;
    // }

    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";

    // comment this if you are using the alternative soluation
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
