//Variables Declared
const startBtn = document.getElementById("startBtn")
const nextBtn = document.getElementById("nextBtn")
const questionContainerElement = document.getElementById("questionContainer")
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answerButtons')
let shuffledQuestions, currentQuestionIndex




//The funtion for the start of the quiz. 
startGame = () => {
startBtn.classList.add("hide")
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}
startBtn.addEventListener('click', startGame)

setNextQuestion = () => {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function showQuestion(question)  {
questionElement.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    //checking if the answer is correct
    if(answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtons.appendChild(button)
})
}

resetState = () => {
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

selectAnswer = (e) => {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
    }
   

}

setStatusClass = (element, correct) => {
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

clearStatusClass = (element) => {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
question: 'Is a Boolean a true or false statement?',
answers: [
    {text: 'True', correct: true},
    {text: 'False', correct: false}
]
    },
    {
        question: 'What is the speed limit in a built up area',
        answers: [
            {text: '30', correct: true},
            {text: '20', correct: false},
            {text: '40', correct: false},
            {text: '50', correct: false}
        ]
            },
            {
                question: 'What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?',
                answers: [
                    {text: 'While', correct: true},
                    {text: 'For', correct: false},
                    {text: 'Boolean', correct: false},
                    {text: 'do/while', correct: false},
                ]
                    }
]



