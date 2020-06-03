const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const numQuestionr = document.getElementById('num-Questionr')
const numQuestionw = document.getElementById('num-Questionw')

let shuffledQuestions
let currentQuestionIndex

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  numQuestionr.innerText = 'Acertou: ' 
  numQuestionw.innerText = 'Errou: ' 
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  numQuestionr.classList.remove('hide')
  numQuestionw.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } 
  else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
// #1
  {
    question: 'Dona Maria precisa usar 15U de insulina de manhã, 5U à tarde e 10U à noite. Quantas caixas de 10 ml ela precisa levar para 30 dias?(1ml = 100U)',
    answers: [
      { text: '1 Caixa', correct: true },
      { text: '2 Caixas', correct: false },
      { text: '3 Caixas', correct: false },
      { text: '4 Caixas', correct: false },
      { text: '5 Caixas', correct: false }
    ]
  },
//#2
  {
    question: 'Dona Rosa precisa usar 25U de insulina de manhã, 15U à tarde e 25U à noite. Quantas caixas de 10 ml ela precisa levar para 30 dias?(1ml = 100U)',
    answers: [
      { text: '1 Caixa', correct: false },
      { text: '2 Caixas', correct: true },
      { text: '3 Caixas', correct: false },
      { text: '4 Caixas', correct: false },
      { text: '5 Caixas', correct: false }
    ]
  },
//#3
  {
    question: 'Qual destes medicamentos não é um Anti-inflamatório?',
    answers: [
      { text: 'Nimesulida', correct: false },
      { text: 'Prednisona', correct: false },
      { text: 'Piroxicam', correct: false },
      { text: 'Bromoprida', correct: true },
      { text: 'Diclofenaco', correct: false }
    ]
  },
//#4
  {
    question: 'Dona Maria precisa usar 15U de insulina de manhã, 5U à tarde e 10U à noite, quatas caixas de 10 ml ela precisa levar para 30 dias?(1ml = 100U)',
    answers: [
      { text: '1 Caixa', correct: true },
      { text: '2 Caixas', correct: false },
      { text: '3 Caixas', correct: false },
      { text: '4 Caixas', correct: false },
      { text: '5 Caixas', correct: false }
    ]
  },
//#5
  {
    question: 'Dona Maria precisa usar 15U de insulina de manhã, 5U à tarde e 10U à noite, quatas caixas de 10 ml ela precisa levar para 30 dias?(1ml = 100U)',
    answers: [
      { text: '1 Caixa', correct: true },
      { text: '2 Caixas', correct: false },
      { text: '3 Caixas', correct: false },
      { text: '4 Caixas', correct: false },
      { text: '5 Caixas', correct: false }
    ]
  },
//#6
  {
    question: 'Dona Maria precisa usar 15U de insulina de manhã, 5U à tarde e 10U à noite, quatas caixas de 10 ml ela precisa levar para 30 dias?(1ml = 100U)',
    answers: [
      { text: '1 Caixa', correct: true },
      { text: '2 Caixas', correct: false },
      { text: '3 Caixas', correct: false },
      { text: '4 Caixas', correct: false },
      { text: '5 Caixas', correct: false }
    ]
  }
]
