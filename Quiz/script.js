const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const numQuestionr = document.getElementById('num-Questionr')
const numQuestionw = document.getElementById('num-Questionw')


let shuffledQuestions
let currentQuestionIndex

//let acertou = document.getElementById("num-Questionr").innerHTML
//let errou = document.getElementById("num-Questionw").innerHTML

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
//  addOne()
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
 // numQuestionr.innerText = 'Acertou: ' + 0
  //numQuestionw.innerText = 'Errou:   ' + 0
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = Math.floor(Math.random() * 11);
  questionContainerElement.classList.remove('hide')
 // numQuestionr.classList.remove('hide')
 // numQuestionw.classList.remove('hide')
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

function addOne(){
    acertou ++;
    document.getElementById("num-Questionr").innerHTML = 'Acertou: ' + acertou;
}

const questions = [




//=============================== Insulina ==============================================



// #1
  {
    question: 'Paciente precisa usar 15U de insulina de manhã, 5U à tarde e 10U à noite. Quantas caixas de 10 ml ela precisa levar para 30 dias?(1ml = 100U)',
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
    question: 'Paciente precisa usar 25U de insulina de manhã, 15U à tarde e 25U à noite. Quantas caixas de 10 ml ela precisa levar para 30 dias?(1ml = 100U)',
    answers: [
      { text: '1 Caixa', correct: false },
      { text: '2 Caixas', correct: true },
      { text: '4 Caixas', correct: false },
      { text: '3 Caixas', correct: false },
      { text: '5 Caixas', correct: false }
    ]
  },
//#3
  {
    question: 'Paciente precisa usar 30U de insulina pela manhã 30U à noite. Quantas refis de 3 ml são necessários para 20 dias de tratamento?(1ml =100U)',
    answers: [
      { text: '3 Refis', correct: false },
      { text: '2 Refis', correct: false },
      { text: '1 Refil', correct: false },
      { text: '5 Refis', correct: false },
      { text: '4 Refis', correct: true }
    ]
  },
//#4
  {
    question: 'Paciente precisa usar 25U de insulina de manhã, 25U à tarde e 25U à noite. Quantas caixas de 10 ml ela precisa levar para 90 dias?(1ml = 100U)',
    answers: [
      { text: '8 Caixas', correct: false },
      { text: '2 Caixas', correct: false },
      { text: '6 Caixas', correct: false },
      { text: '5 Caixas', correct: false },
      { text: '7 Caixas', correct: true }
    ]
  },
//#5
  {
    question: 'Paciente precisa usar 25U de insulina de manhã e 35U à noite. Sabendo que ainda restam 2 Refis de 3 ml na caixa, em quantos dias precisara comprar mais?(1ml = 100U)',
    answers: [
      { text: '5 Dias', correct: false },
      { text: '10 Dias', correct: true },
      { text: '15 Dias', correct: false },
      { text: '7 Dias', correct: false },
      { text: '4 Dias', correct: false }
    ]
  },
//#6





//=============================== Receitas ==============================================



// #1
  {
    question: 'Qual destas propriedades não pertence ao receituário B?',
    answers: [
      { text: 'Validade: 10 dias, Tratamento: 30 dias, Tarja: vermelha', correct: false },
      { text: 'Validade: 60 dias, Tratamento: 60 dias, Tarja: preta', correct: false },
      { text: 'Validade: 30 dias, Tratamento: 60 dias, Tarja: preta', correct: true },
      { text: 'Validade: 30 dias, Tratamento: 30 dias, Tarja: vermelha', correct: false },
      { text: 'Validade: 30 dias, Tratamento: 30 dias, Tarja: preta', correct: false }
    ]
  },
//#2
  {
    question: 'Qual destas propriedades pertence ao receituário C1?',
    answers: [
      { text: 'Receituário: Branco, Validade: 30 dias, Tratamento: 30 dias', correct: false },
      { text: 'Receituário: Amarelo, Validade: 30 dias, Tratamento: 60 dias', correct: false },
      { text: 'Receituário: Azul, Validade: 30 dias, Tratamento: 60 dias', correct: false },
      { text: 'Receituário: Azul, Validade: 30 dias, Tratamento: 30 dias', correct: false },
      { text: 'Receituário: Branco, Validade: 30 dias, Tratamento: 60 dias', correct: true }
    ]
  },
//#3
  {
    question: 'Receitas de antibióticos são:',
    answers: [
      { text: 'Brancas e válidas por 30 dias.', correct: false },
      { text: 'Com retenção de cópia e tratamento para 10 dias.', correct: false },
      { text: 'Com retenção de cópia e válida por 10 dias.', correct: true },
      { text: 'Válida por 7 dias e tratamento para 30 dias.', correct: false },
      { text: 'Nenhuma das Anteriores.', correct: false }
    ]
  },
//#4
  {
    question: 'Paciente apresenta uma receita de Durateston (lista C5) emitida há 45 dias, nós podemos:',
    answers: [
      { text: 'Vender o medicamento e a seringa, mas não aplicar.', correct: false },
      { text: 'Aplicar, desde que ele traga o medicamento.', correct: false },
      { text: 'Vender e Aplicar, pois não é controlado.', correct: false },
      { text: 'Não podemos nem vender nem aplicar.', correct: true },
      { text: 'Vender o medicamento sem a seringa.', correct: false }
    ]
  },
//#5
  {
    question: 'Para Vender antibióticos, a receita deve conter, entre outras coisas, os  seguinte dados:',
    answers: [
      { text: 'Idade do paciente, Validade da receita e Posologia.', correct: true },
      { text: 'Data da receita, Marca do produto e Posologia.', correct: false },
      { text: 'Poslogia, Conferência e Idade do comprador ', correct: false },
      { text: 'Nome do medicamento e Dosagem em 3 vias. ', correct: false },
      { text: 'Data da receita, Posologia e Assinatura do paciente.', correct: false }
    ]
  },
//#6
  {
    question: 'O receituário do tipo C2 corresponde a qual classe de medicamento? ',
    answers: [
      { text: 'Ansiolíticos', correct: false },
      { text: 'Opióides', correct: false },
      { text: 'retinóicos', correct: true },
      { text: 'Anorexígenos', correct: false },
      { text: 'Antidepressivos', correct: false }
    ]
  },




//=============================== Classe Terapêuticas ==============================================



// #1
  {
    question: 'Qual opção corresponde a medicamentos usados em caso de hipertensão',
    answers: [
      { text: 'Losartana, Omeprazol e Metiformina.', correct: false },
      { text: 'Hidroclorotiazida, Valsartana e Finasterida.', correct: false },
      { text: 'Furosemida, Atenolol e Losartana.', correct: true },
      { text: 'Levotiroxina, Amilorida e Salbutamol.', correct: false },
      { text: 'Espironolactona, Metoprolol e Sinvastatina.', correct: false }
    ]
  },
//#2
  {
    question: 'qual a afirmativa correta?',
    answers: [
      { text: 'Antihipertensivos são indicados para perda de peso.', correct: false },
      { text: 'Ansiolíticos são indicados para diabetes tipo II.', correct: false },
      { text: 'Analgésicos são todos controlados.', correct: false },
      { text: 'Todo antialérgico da sono.', correct: false },
      { text: 'Fluconazol e Cetoconazol pertencem a mesma classe.', correct: true }
    ]
  },
//#3
  {
    question: 'Qual destes medicamentos não é um Anti-inflamatório?',
    answers: [
      { text: 'Diclofenaco', correct: false },
      { text: 'Nimesulida', correct: false },
      { text: 'Prednisona', correct: false },
      { text: 'Cetotifeno', correct: true },
      { text: 'Piroxicam', correct: false }
    ]
  },
//#4




//=============================== Farmácia Popular ==============================================




]