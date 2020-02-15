// Your code goes here
let imgContent = document.querySelectorAll('.img-content');
imgContent.forEach(img => { 
    img.addEventListener('mouseenter', () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "all 0.3s";
    })
    img.addEventListener('mouseleave', () =>{
        img.style.transform = "scale(1.0)";
        img.style.transform = "all 0.3s";
    })
})


let h2 = document.querySelectorAll('h2');
h2.forEach(header => {
    header.addEventListener('click', () => {
        if(header.style.color === 'red') {
            header.style.color = "black";
        } else {
        header.style.color = 'red';
        }
    })
})

let imgDestination = document.querySelector('#img-destination');
imgDestination.addEventListener('dblclick', () => {
        imgDestination.style.display = "none";   
})
imgDestination.addEventListener('dragstart', () => {
    alert('Please stop doing that!');
})

let container = document.querySelector('.container');
container.addEventListener('mousedown', () => {
    container.style.background = "#b3d1ff";
})
container.addEventListener('mouseup', () => {
    container.style.background = 'white';
})

let imgIntro = document.querySelector('.intro img');
imgIntro.addEventListener('contextmenu', () => {
    imgIntro.style.transform = "scale(0.8)";
    imgIntro.style.transition = "all 0.4s";
})
imgIntro.addEventListener('drag', () => {
    imgIntro.style.display = 'none';
})

let pIntro = document.querySelector('.intro p');
window.addEventListener('scroll', () => {
    if(scrollY >= 120){
        pIntro.style.display = 'none';
    } else {
        pIntro.style.display = 'block';
    }
})



let home = document.querySelector('.home');
home.addEventListener('click', (e) => {
    home.style.background = '#ffb3d9';
})


let textContent = document.querySelector('.text-content');
textContent.addEventListener('click', (e) => {
    textContent.style.background = '#ccfff2';
    e.stopPropagation();
})

let a = document.querySelectorAll('a');
a.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    })
})

