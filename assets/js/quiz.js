// quiz based on https://www.youtube.com/watch?v=riDzcEQbX6k

let randomQuestions, currentQuestionIndex; // declared variables to be defined
let questionElement = document.getElementById('quiz-question'); // quiz-question p
let answerButtonsElement = document.getElementById('answers'); // div with possible answers for the quiz
let nextButton = document.getElementById('next-btn') // ask me again! button 

nextButton.addEventListener('click', () => { // sets a random quiz after clicking ask me again! button
    currentQuestionIndex++
    setQuestion()
    if (randomQuestions.length > currentQuestionIndex + 1) { //restarts the quiz after all questions have been displayed
        startQuiz()
    }    
})

/**
* Starts quiz with a random question
*/
function startQuiz() {
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    setQuestion();    
}

/**
* Set up a next quiz question
*/
function setQuestion() {
    resetQuestion()
    showQuestion(randomQuestions[currentQuestionIndex])  
}

/**
* Displays the quiz question
* Add answers for the question
*/
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        let quizButton = document.createElement('button')
        quizButton.innerText = answer.text
        quizButton.classList.add('quiz-answer')
        if (answer.correct) {
            quizButton.dataset.correct = answer.correct
        }
        quizButton.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(quizButton)
    })
}

/**
* Resets the quiz to default state everytime a new question is set
*/
function resetQuestion() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

/**
* Activates quiz results after clicking on an answer
*/
function selectAnswer(e) {
    let selectedQuizButton = e.target
    let correct = selectedQuizButton.dataset.correct
    Array.from(answerButtonsElement.children).forEach(button => {
        checkAnswer(button, button.dataset.correct)  
    })
}

/**
*  Checks which answers is correct and which are not
*/
function checkAnswer(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

/**
* Removes correct/ wrong classes before checking the answer
*/
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

