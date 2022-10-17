import './less/index.less'

// Your code goes here!

// EDIT 1
let picfbHover = document.querySelector(".funbusimg");
picfbHover.addEventListener('mouseover', (evt) => {
    picfbHover.title = "We promise the Fun Bus is not a bus for ants!"
});

//EDIT 2

document.addEventListener('copy', (evt) => {
    alert("Hey!! Don't touch me.");
});