import './less/index.less'

// Your code goes here!

// EDIT 1 - mouseover
let picfbHover = document.querySelector(".funbusimg");
picfbHover.addEventListener('mouseover', (evt) => {
    picfbHover.title = "We promise the Fun Bus is not a bus for ants!"
});

//EDIT 2 - copy

window.addEventListener('copy', () => {
    navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text;
        })
});

// EDIT 3 - onload

window.onload = function (evt) {
const heading = document.querySelector('h1');
heading.textContent = "THE FUNNEST BUS!"
}

//EDIT 4 - click
document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})


// EDIT 5 - double click
document.body.addEventListener('dblclick', evt => {
    evt.target.innerHTML = ''
})

// EDIT 6 - keydown
window.addEventListener('keydown', evt => {
    if (evt.key == 6) {
        document.body.innerHTML = '<h1>YOU RAN ORDER 66</h1>'
    }
})

// EDIT 7 - mousemove
document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY} = evt;
    // console.log (`mouse is at ${clientX}, ${clientY}`)
})

// EDIT 8 - mouseenter
const destinations = document.querySelectorAll('.destination')

for (let destination of destinations) {
    
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
        });
    destination.addEventListener('mouseleave', () => {
        setTimeout(() => {
            destination.style.fontWeight = 'initial'
            }, 500)
        });
}

