

const container = document.querySelector('.container');
const open = document.querySelector('.openBtn');
const close = document.querySelector('.closeBtn');
const circle = document.querySelector('.circle');



open.addEventListener('click', () => {
    container.classList.add('show-nav')
    circle.classList.add('rotate');
})
close.addEventListener('click', () => {
    container.classList.remove('show-nav')
    circle.classList.remove('rotate');
})