// Colors Project

// Instructions

// Use the BOM (local storage (window.localStorage or window.window.localStorage)) to store and set the color that the user selects.
// Use the DOM to let the '.container' element take the selected color when the user clicks on a colored square using the 'click' event.

// ------------------------------------------------------------------------------------------------------------

// Selecting HTML elements

// Use commas (,) to define constants that you store in them HTML elements with only one 'const'.

const colors = document.querySelector('.colors'),
    red = document.querySelector('.red'),
    green = document.querySelector('.green'),
    blue = document.querySelector('.blue'),
    black = document.querySelector('.black'),
    container = document.querySelector('.container');

// Storing 'chosenColor' property in the local storage (window.localStorage or window.window.localStorage)

// Use addEventListener() to add e listeners to the HTML elements.
// Use the parameter 'e' to use the event's target in the eevent using 'e.target'.
// When a colored square is clicked, activate it (set its opacity CSS property to '1').
// Use if, else if and else conditions.

if ('chosenColor' in window.localStorage) {
    container.style.backgroundColor = window.localStorage.chosenColor;
    document.querySelector(`.${window.localStorage.chosenColor}`).classList.add('active');
}

const deactivateSquares = (firstColor, secondColor, thirdColor) => {
    document.querySelector(`.${firstColor}`).classList.remove('active');
    document.querySelector(`.${secondColor}`).classList.remove('active');
    document.querySelector(`.${thirdColor}`).classList.remove('active');
};

const setColor = e => {
    if (e.target === red) {
        deactivateSquares('green', 'blue', 'black');
    } else if (e.target === green) {
        deactivateSquares('red', 'blue', 'black');
    } else if (e.target === blue) {
        deactivateSquares('red', 'green', 'black');
    } else if (e.target === black) {
        deactivateSquares('red', 'green', 'blue');
    }

    e.target.classList.add('active');

    window.localStorage.chosenColor = e.target.dataset.color;

    container.style.backgroundColor = window.localStorage.chosenColor;
};

colors.addEventListener('click', setColor);