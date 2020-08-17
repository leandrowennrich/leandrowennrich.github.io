const antibioticosBtn = document.getElementById('ab-btn')
const psicotropicosBtn = document.getElementById('ps-btn')
const rdcBtn = document.getElementById('rdc-btn')
const dispensacaoBtn = document.getElementById('d-btn')
const backButton = document.getElementById('back-btn')

const antibioticoContainer = document.getElementById('ab-container')
const psicotropicoContainer = document.getElementById('ps-container')
const rdcContainer = document.getElementById('rdc-container')
const dispensacaoContainer = document.getElementById('d-container')
const buttonContainer = document.getElementById('btn-container')
const masterContainer = document.getElementById('teste2')

var accordions = document.getElementsByClassName("accordion-button")

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function () {
    var content = this.nextElementSibling;
    var answer = document.getElementsByClassName("answer")
    if (content.style.maxHeight) {
      content.style.maxHeight = null;  
    } else {
      for (var a = 0; a < answer.length; a++) {
      answer[a].style.maxHeight = null;
    }
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}



antibioticosBtn.addEventListener('click', abFctn)
psicotropicosBtn.addEventListener('click', psFctn)
rdcBtn.addEventListener('click', rdcFctn)
dispensacaoBtn.addEventListener('click', dFctn)
backButton.addEventListener('click', voltar)


function abFctn() {

  buttonContainer.classList.add('hide')
  antibioticoContainer.classList.remove('hide')
  masterContainer.classList.remove('hide')
  backButton.classList.remove('hide')

}

function psFctn() {

  buttonContainer.classList.add('hide')
  psicotropicoContainer.classList.remove('hide')
  masterContainer.classList.remove('hide')
  backButton.classList.remove('hide')

}

function rdcFctn() {

  buttonContainer.classList.add('hide')
  rdcContainer.classList.remove('hide')
  masterContainer.classList.remove('hide')
  backButton.classList.remove('hide')

}

function dFctn() {

  buttonContainer.classList.add('hide')
  dispensacaoContainer.classList.remove('hide')
  masterContainer.classList.remove('hide')
  backButton.classList.remove('hide')

}

function voltar() {
  buttonContainer.classList.remove('hide')
  antibioticoContainer.classList.add('hide')
  psicotropicoContainer.classList.add('hide')
  rdcContainer.classList.add('hide')
  dispensacaoContainer.classList.add('hide')
  backButton.classList.add('hide')
  masterContainer.classList.add('hide')
}