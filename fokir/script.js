let nums = document.querySelectorAll(".nums .num");
let section = document.querySelectorAll(".nums");
let started = false
nums.forEach((num) => startCount(num));

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            nums.forEach((num)=> startCount(num));
        }
    started = true
    }
}

function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() =>{
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 10);
}

const nave =document.querySelector('.nave');
window.addEventListener('scroll' , () => {
    if ( window.scrollY > 50) {
        nave.classList.add('nave1')
    }else if (window.scrollY <= 50) {
        nave.classList.remove('nave1')
    }
});