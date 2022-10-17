import './less/index.less'

// Your code goes here!

// EDIT 1
let picfbHover = document.querySelector(".funbusimg");
picfbHover.addEventListener('mouseover', (evt) => {
    picfbHover.title = "We promise the Fun Bus is not a bus for ants!"
});

//EDIT 2
let picViet = document.querySelector(".content-destination img");




picViet.addEventListener('mouseover', (evt) => {
    picViet.title = "Want to know where this is? CLICK ME!";

});

picViet.addEventListener('click', (evt) => {

const vietImgLink = document.createElement("a");

vietImgLink.src = "https://www.vietnamcoracle.com/phu-quy-island-travel-guide/";

picViet.append
});