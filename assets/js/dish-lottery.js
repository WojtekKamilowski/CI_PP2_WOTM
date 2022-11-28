/**
 * Add an event listener to the document and run the meals screen with buttons to choose for which meal idea the user is looking for
 */
document.addEventListener("DOMContentLoaded", function () {
    runMealsScreen();
});

/**
 * Set up of lottery variables to vary display/hide
 */

 let mainMealsScreen = document.getElementById("main-container-meals");
 let mainDishScreen = document.getElementById("main-container-dishes");


/**
* Show the meals screen with buttons to choose for which meal idea the user is looking for
*/
function runMealsScreen() {
    mainMealsScreen.style.display = "block";
    mainDishScreen.style.display = "none";
}

/**
 * Display a screen with the dish that was drawn and the quiz
 */

function selectDishLottery() {
    document.getElementById('main-container-meals').addEventListener('click', function (event) {
        if (!event.target.className.includes("meal-box")) return; // prevent click over all div with three buttons
        let button = event.target;
        let dishLottery = button.getAttribute('data-type');
        setLottery(dishIdea);
    });
}



