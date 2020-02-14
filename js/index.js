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