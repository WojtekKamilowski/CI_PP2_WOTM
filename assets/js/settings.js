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

/**
* questions for the quiz with possible correct or wrong answers
*/
let questions = [
    {
        question: 'Are tomatoes fruits or vegetables?',
        answers: [
            { text: 'They are fruits', correct: true },
            { text: 'They are vegetables', correct: false },
            { text: 'They are both fruits and vegetables', correct: false },
            { text: 'They are neither fruits no vegetables', correct: false }
        ]
    },
    {
        question: 'Why aubergines are also called eggplants?',
        answers: [
            { text: 'Because chickens like to eat them', correct: false },
            { text: 'Because they are high in protein', correct: false },
            { text: 'Becaue when they are not ripe, they are white and sometimes have shape similar to eggs', correct: true },
        ]
    },
    {
        question: 'Where pizza is from?',
        answers: [
            { text: 'Northern Africa - area around today country Libya', correct: false },
            { text: 'Campania region, Italy', correct: true },
            { text: 'Rome, Italy', correct: false },
            { text: 'Sicily, Italy', correct: false}
        ]
    },
    {
        question: 'Where coffee is from?',
        answers: [
            { text: 'Area of today country Ethiopia', correct: true },
            { text: 'Italy', correct: false },
            { text: 'Brazil', correct: false },
            { text: 'China', correct: false},
            { text: 'Arabian Peninsula', correct: false}
        ]
    },
    {
        question: 'Where tea is from?',
        answers: [
            { text: 'India', correct: false },
            { text: 'England', correct: false },
            { text: 'Africa', correct: false },
            { text: 'Russia', correct: false},
            { text: 'China', correct: true}
        ]
    },
    {
        question: 'What is the origin of sandwiches',
        answers: [
            { text: 'In 1762 the Earl of Sandwich asked his cook to prepare some simple dish', correct: true },
            { text: 'Idea of first British settlers in America', correct: false },
            { text: 'Idea of the XIX centrury factory workers in the US', correct: false },
            { text: 'Prepared for Polar exploration of Robert Falcon Scott', correct: false},
        ]
    },
    {
        question: 'Are all potatoes same?',
        answers: [
            { text: 'Yes, there are different potato species however you can use any of them with the same culinary effect', correct: false },
            { text: 'No, there are different varieties of potatoes, however, the most import is to know that there are 3 categories: A. low starch, B. medium starch, and C. high starch', correct: true },
            { text: 'All same as only one specie and variety is grown for human consumption', correct: false },
            { text: 'Each variety is completely different and should be used for only one specific dish', correct: false},
        ]
    },
    {
        question: 'What is the most expensive beef in the world?',
        answers: [
            { text: 'Irish beef', correct: false },
            { text: 'Argentinian beef', correct: false },
            { text: 'Japanese Wagyu beef', correct: true },
            { text: 'Italian beef', correct: false},
        ]
    },
    {
        question: 'Where burito is from?',
        answers: [
            { text: 'the United States', correct: true },
            { text: 'Mexico', correct: false },
            { text: 'Spain', correct: false },
            { text: 'Cuba', correct: false},
        ]
    },
    {
        question: 'Is chorizo same food in Spain and Mexico?',
        answers: [
            { text: 'Yes, it is a type of pork cured meat', correct: false },
            { text: 'Yes, it is made of ground pork', correct: false },
            { text: 'No, in Spain it is a type of pork cured meat, but in Mexico it is made of ground pork', correct: true },
        ]
    }
];
