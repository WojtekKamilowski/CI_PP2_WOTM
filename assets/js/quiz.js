let randomQuestions, currentQuestionIndex;
let questionElement = document.getElementById('quiz-question');
let answerButtonsElement = document.getElementById('answers');


function startQuiz() {
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    setNextQuestion();    
}

function setNextQuestion() {
    showQuestion(randomQuestions[currentQuestionIndex])  
}

function showQuestion(question) {
    document.getElementById('quiz-question').innerHTML = question.question;
}

function selectAnswer() {

}

