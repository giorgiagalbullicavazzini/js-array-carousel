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




// - In order to transform the carousel in a full dynamic one, we need to create two variables for the markup arrows;
// - Using an `EventListener`, we can then create a function capable of changing the visible image after a mouse click on the arrows;
// - In order to do so, we need to work on a new variable, `active`, able to set a maximum number of clicks on the arrows (given by the number of the images);
// - We then need to create a function capable of add or remove the `.show` class according to the actual active image;

// ## Bonus 1

// - Working on the final project, we can then transform the given result in an infinite loop;
// - To do so, we need to modify our function in order to change the previous behaviour of the arrows;
// - With this edit, we will then be able to click on them limitless;
// - In order to do so, we can add a simple instruction to the `EventListener`;
// - IF this is the last possible click, the index value returns to 0 (next arrow) or to the maximum index number (previous arrow);

// ## Bonus 2

// - To complete our project, we can now add some HTML graphic elements: the thumbnails of our images;
// - By CSS, the thumbnails will be covered by a dark layer, except the one corresponding to the active image;
// - This special one will have a border color;
// - In order to transform this final part in a dynamic one, we can now add to the `EventListener` the ability to change the thumbnails style with a class according to the actual active image, just like we did with the `.show` class.