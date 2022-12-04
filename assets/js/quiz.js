let randomQuestions, currentQuestionIndex;
let questionElement = document.getElementById('quiz-question');
let answerButtonsElement = document.getElementById('answers');

function startQuiz() {
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    setQuestion();    
}

function setQuestion() {
    showQuestion(randomQuestions[currentQuestionIndex])  
}

function showQuestion(question) {
    questionElement.innerHTML = question.question;
    question.answers.forEach(answer => {
        document.getElementsByClassName('quiz-answer').innerHTML = answer.text;
        if (answer.correct) {
            quizButton.dataset.correct = answer.correct
        }
        quizButton.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(quizButton)
    })
}

function selectAnswer() {

}

