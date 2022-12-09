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

    document.getElementById('recipe-link').addEventListener("click", function() { //search for a recipe on google.com
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

// quiz based on https://www.youtube.com/watch?v=riDzcEQbX6k

let randomQuestions, currentQuestionIndex; // declared variables to be defined
let questionElement = document.getElementById('quiz-question'); // quiz-question p
let answerButtonsElement = document.getElementById('answers'); // div with possible answers for the quiz
let nextButton = document.getElementById('next-btn'); // ask me again! button 

nextButton.addEventListener('click', () => { // sets a random quiz after clicking ask me again! button
    currentQuestionIndex++
    setQuestion();
    if (randomQuestions.length > currentQuestionIndex + 1) { //restarts the quiz after all questions have been displayed
        startQuiz();
    }    
})

/**
* Starts quiz with a random question
*/
function startQuiz() {
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setQuestion();    
}

/**
* Set up a next quiz question
*/
function setQuestion() {
    resetQuestion();
    showQuestion(randomQuestions[currentQuestionIndex]);  
}

/**
* Displays the quiz question
* Add answers for the question
*/
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        let quizButton = document.createElement('button');
        quizButton.innerText = answer.text;
        quizButton.classList.add('quiz-answer');
        if (answer.correct) {
            quizButton.dataset.correct = answer.correct
        };
        quizButton.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(quizButton);
    })
}

/**
* Resets the quiz to default state everytime a new question is set
*/
function resetQuestion() {
    clearStatusClass(document.getElementById('quiz'));
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    };
}

/**
* Activates quiz results after clicking on an answer
* Changes background color of quiz div (red for a wrong answer and green for correct answer)
*/
function selectAnswer(e) {
    let selectedQuizButton = e.target;
    let correct = selectedQuizButton.dataset.correct;
    checkAnswer(document.getElementById('quiz'), correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        checkAnswer(button, button.dataset.correct);
    });
}

/**
*  Checks which answers is correct and which are not
*/
function checkAnswer(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    };
}

/**
* Removes correct/ wrong classes before checking the answer
*/
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}


