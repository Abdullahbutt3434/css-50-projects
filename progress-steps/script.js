const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const steps = document.querySelectorAll('.circle');
let line = document.querySelector('.progress');
let count = 0;
let progressLen = 0;
let stepLength = steps.length-1; 
console.log();
next.addEventListener('click',()=>{
    count++
    progressLen = progressLen+32;
    
    if(count <= stepLength){
        steps[count].classList.add('active');
        line.style.width = progressLen+'%'; 
    }
    prev.disabled = false;
    if(count == stepLength){
        next.disabled = true;
    }
})
prev.addEventListener('click',()=>{
    
    progressLen = progressLen-32;
    next.disabled = false;
    if(count <= stepLength){
        steps[count].classList.remove('active');
        line.style.width = progressLen+'%'; 
    }
    count--
    if(count == 0){
        prev.disabled = true;
    }
})