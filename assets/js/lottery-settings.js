/**
 * Draws a random dish for breakfast
 */
function drawBreakfastDish() {
    let breakfastDishes = [
        'Turkish eggs', 
        'Chocolate Porridge',
        'Scramble eggs',
        'Spanish Omelette',
        'Coconut pancakes',
        'Crapes',
        'Shakshuka',
        'Quick granola',
        'Panini',
        'Overnight oats'
    ];
    
    let getBreakfastDish = breakfastDishes[Math.floor(Math.random() * breakfastDishes.length)];
    
    document.getElementById('dish-name').innerHTML = getBreakfastDish;
}

/**
 * Draws a random dish for lunch
 */
function drawLunchDish() {
    let lunchDishes = [
        'Tuna sandwich',
        'Salmon and tomato sandwich',
        'Quinoa with pinto beans and fried vegetables',
        'Kale soup',
        'Tomato soup',
        'Buttenut squash soup',
        'Fried millet with tofu and vegetables',
        'Split pea soup',
        'Buckwheat with red beans and fried vegetables',
        'Broccoli soup'
    ];
    
    let getLunchDish = lunchDishes[Math.floor(Math.random() * lunchDishes.length)];
    
    document.getElementById('dish-name').innerHTML = getLunchDish;
}      

/**
 * Draws a random dish for dinner
 */
function drawDinnerDish() {
    let dinnerDishes = [
        
    ];
    
    let getdinnerDish = dinnerDishes[Math.floor(Math.random() * dinnerDishes.length)];
    
    document.getElementById('dish-name').innerHTML = getDinnerDish;
}  
