// quiz based on https://www.youtube.com/watch?v=riDzcEQbX6k

let randomQuestions, currentQuestionIndex;
let questionElement = document.getElementById('quiz-question');
let answerButtonsElement = document.getElementById('answers');
let nextButton = document.getElementById('next-btn')

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    startQuiz()
})

function startQuiz() {
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    setQuestion();    
}

function setQuestion() {
    resetQuestion()
    showQuestion(randomQuestions[currentQuestionIndex])  
}

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

function resetQuestion() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    let selectedQuizButton = e.target
    let correct = selectedQuizButton.dataset.correct
    Array.from(answerButtonsElement.children).forEach(button => {
        checkAnswer(button, button.dataset.correct)  
    })
}

function checkAnswer(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

