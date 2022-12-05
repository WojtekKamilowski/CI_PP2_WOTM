// dish lottery settings

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
        'Quinoa with pinto beans and fried zucchini',
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
        'Blackbeans stew with rice and bacon',
        'Overnight marinated chicken roasted with potatoes and steamed vegetables',
        'Orange chicken',
        'Grilled marinated chicken fillet with turmeric rice',
        'Spaghetti bolognese',
        'Red lentils tomato coconut stew',
        'White beans stew with sweet potatoes',
        'Oven chicken thighs with aubergine',
        'Baked salmon',
        'Chicken tomato stew'
    ];
    
    let getDinnerDish = dinnerDishes[Math.floor(Math.random() * dinnerDishes.length)];
    
    document.getElementById('dish-name').innerHTML = getDinnerDish;
}  

/**
 * Draws a random dish for dessert
 */
 function drawDessertDish() {
    let dessertDishes = [
        'Homemade chocolate ice cream',
        'Cheesecake',
        'Doce de Leite',
        'Pede Moca',
        'Tiramisu',
        'Beijinho',
        'Brigadeiro',
        'Sand cake',
        'Donuts',
        'Salted caramel ice cream',
        'Chocolate mousse'
    ];
    
    let getDessertDish = dessertDishes[Math.floor(Math.random() * dessertDishes.length)];
    
    document.getElementById('dish-name').innerHTML = getDessertDish;
}  


// quiz settings

let questions = [
    {
        question: 'Are tomatoes fruits or vegetables?',
        answers: [
            { text: 'They are fruits', correct: true },
            { text: 'They are vegetables', correct: false },
            { text: 'They are both fruits and vegetables', correct: false },
            { text: 'They are neither fruits no vegetables', correct: false }
        ]
    }
]
