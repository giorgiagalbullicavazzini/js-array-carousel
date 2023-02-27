# Carosello Mono Array

- The purpose of the code is to create a simple JavaScript image carousel;

## Milestone 1

- The first thing to do is to create a static markup to use as a layout for the final project;
- The static markup will be made of a container, a single image and two arrows;

## Milestone 2

- We can now work on the static markup to transform it in a dynamic one;
- For the purpose, we can create an array, containing all the images;
- Using a `for` loop, we can then create a literal template capable of rotate between the different images dynamically;
- All the images, except the first one, will be hidden with a `display: none`;
- The first one will be visible thanks to a `.show` class;
- The final result will be the same of the one of the first milestone, but this one will be completely built using JavaScript and it will be able to become dynamic during the third and last milestone;

## Milestone 3

- In order to transform the carousel in a full dynamic one, we need to create two variables for the markup arrows;
- Using an `EventListener`, we can then create a function capable of changing the visible image after a mouse click on the arrows;
- In order to do so, we need to work on a new variable, `active`, able to set a maximum number of clicks on the arrows (given by the number of the images);
- We then need to create a function capable of add or remove the `.show` class according to the actual active image;

## Bonus 1

- Working on the final project, we can then transform the given result in an infinite loop;
- To do so, we need to modify our function in order to change the previous behaviour of the arrows;
- With this edit, we will then be able to click on them limitless;
- In order to do so, we can add a simple instruction to the `EventListener`;
- IF this is the last possible click, the index value returns to 0 (next arrow) or to the maximum index number (previous arrow);

## Bonus 2

- To complete our project, we can now add some HTML graphic elements: the thumbnails of our images;
- By CSS, the thumbnails will be covered by a dark layer, except the one corresponding to the active image;
- This special one will have a border color;
- In order to transform this final part in a dynamic one, we can now add to the `EventListener` the ability to change the thumbnails style with a class according to the actual active image, just like we did with the `.show` class.