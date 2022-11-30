/**
 * Add an event listener to the document and run the meals screen with buttons to choose for which meal idea the user is looking for
 */
document.addEventListener('DOMContentLoaded', function () {
    runMealsScreen();
})

/**
 * Set up of lottery variables to vary display/hide
 */

 let mainMealsScreen = document.getElementById('main-container-meals');
 let mainDishScreen = document.getElementById('main-container-dishes');

/**
* Show the meals screen with buttons to choose for which meal idea the user is looking for
*/
function runMealsScreen() {
    mainMealsScreen.style.display = "block";
    mainDishScreen.style.display = "none";

    document.getElementById('meal-buttons').addEventListener("click", function(event) {
        if (!event.target.className.includes('meal-box')) return; // to fire event only when a button is clicked
        let button = event.target;
        let mealType = button.getAttribute('data-type');
        runDishLottery(mealType);      
    });
}

/**
* Run the dish lottery with dish draw and quiz
*/
function runDishLottery(mealType) {
    mainMealsScreen.style.display = "none";
    mainDishScreen.style.display = "block";

    
    document.getElementById('meal-text').innerHTML = `Today for ${mealType} let's eat:`; // display selected meal type

    if (mealType === 'breakfast') {
        drawBreakfastDish();    
    } else if (mealType === 'lunch') {
         drawLunchDish(); 
    } else if (mealType === 'dinner') {
        drawDinnerDish();
    } else if (mealType === 'dessert') {
        drawDessertDish();
    };

    
    document.getElementById('different-dish').addEventListener("click", function() { // click on 'different-dish button to draw a different dish
        if (mealType === 'breakfast') {
            drawBreakfastDish();    
        } else if (mealType === 'lunch') {
             drawLunchDish(); 
        } else if (mealType === 'dinner') {
            drawDinnerDish();
        } else if (mealType === 'dessert') {
            drawDessertDish();
        };
    });
}


