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
    
    if (mealType === 'breakfast') { //draw a dish for the chosen meal
        drawBreakfastDish();     
    } else if (mealType === 'lunch') {
         drawLunchDish(); 
    } else if (mealType === 'dinner') {
        drawDinnerDish();
    } else if (mealType === 'dessert') {
        drawDessertDish();
    };

    function recipeSearch() { //adds href to id=recipe-link
        let dishName = document.getElementById('dish-name').innerHTML
        document.getElementById('recipe-link').href=`https://www.google.com/search?q=recipes+for+${dishName}&hl=en&sxsrf=ALiCzsYR5CzJanwqS0khWpaqRrnCjg2A8w%3A1670087304524&ei=iIKLY_zQH8PB8gLl6o_oDw&ved=0ahUKEwj8tJ6E-N37AhXDoFwKHWX1A_0Q4dUDCA8&uact=5&oq=recipes+for&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIECCMQJzIFCAAQkQIyBQgAEJECMgQIABBDMgUIABCRAjIFCAAQkQIyBAgAEEMyBAgAEEMyBAgAEEM6CggAEEcQ1gQQsAM6BQgAEIAESgQIQRgASgQIRhgAUNABWPcCYLEFaAFwAXgAgAFqiAG7AZIBAzEuMZgBAKABAcgBCMABAQ&sclient=gws-wiz-serp`
    };

    document.getElementById('recipe').addEventListener("click", function() { //search for a recipe on google.com
        recipeSearch()
    });

    
    document.getElementById('different-dish').addEventListener("click", function() { //click on 'different-dish button to draw a different dish
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
    
    document.getElementById('return').addEventListener("click", function() { //return to main menu
        runMealsScreen();
    });
    
    startQuiz() 
};


