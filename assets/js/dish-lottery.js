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
* Show the dish screen with dish draw and quiz
*/

function runDishScreen() {
    mainMealsScreen.style.display = "none";
    mainDishScreen.style.display = "block";
}

/**
 * Display a screen with the dish that was drawn and the quiz
 */

function selectDishLottery() {
    document.getElementById('main-container-dishes').addEventListener('click', function (event) {
        if (!event.target.className.includes("meal-box")) return; // prevent click over all div with three buttons
        let button = event.target;
        let mealDraw = button.getAttribute('data-type');
        runLottery(mealDraw);
    });
}

/**
 * Draw a dish idea for the selected meal.
 * Display selected meal.
 * Set up dishes to be drawn.
 * @param {string} mealDraw 
 */
function runLottery(mealDraw) {
    runDishScreen()
}

// document.getElementById("meal-text").innerHTML = `Today for ${mealDraw} let's eat:`; let lotteryParameters = lotterySettings



