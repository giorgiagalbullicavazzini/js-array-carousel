'use strict';

// Creation of an array containing all the images
const images = ['01', '02', '03', '04', '05'];

// Creation of a loop able to rotate between the different images dynamically
const slider = document.querySelector('.slider');

for (let i = 0; i < images.length; i++) {
    slider.innerHTML += `<div class="item"><img src="img/${images[i]}.webp" alt="Videogame"></div>`
}

// The first image will be visible thanks to a .show class;
const item = document.querySelector('.item');
item.classList.add('show');

// By CSS, the thumbnails will be covered by a dark layer, except the one corresponding to the active image
const thumbnail = document.querySelector('.thumbnail');
thumbnail.classList.add('selected');

// Creation of a function capable of add or remove the .show class according to the actual active image;
const topArrow = document.querySelector('.arrow.top');
const bottomArrow = document.querySelector('.arrow.bottom');
const items = document.querySelectorAll('.item');
const thumbnails = document.querySelectorAll('.thumbnail');

// The variable active sets a maximum number of clicks on the arrows (given by the number of the images)
let active = 0;

bottomArrow.addEventListener('click',
    function() {
        items[active].classList.remove('show');
        thumbnails[active].classList.remove('selected');

        // IF this is the last possible click, the index value returns to 0
        if (active === images.length - 1) {
            active = 0;
        } else {
            active++;
        }

        items[active].classList.add('show');
        thumbnails[active].classList.add('selected');
    })

topArrow.addEventListener('click',
    function() {
        items[active].classList.remove('show');
        thumbnails[active].classList.remove('selected');

        // IF this is the last possible click, the index value returns to the maximum index number
        if (active === 0) {
            active = images.length - 1;
        } else {
            active--;
        }

        items[active].classList.add('show');
        thumbnails[active].classList.add('selected');
    })