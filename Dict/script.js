const searchBox = document.getElementById("search");
const answerBox = document.getElementById("answer-box");
const answerItem = document.getElementById("answer-item");
searchBox.addEventListener("keyup", searchInput);

function searchInput() {
  const dictionary = {
    HTTP: "Hyper Text Tranfer Protocol",
    XML: "eXtesible Markup Language",
    HTTPS: "Hyper Text Tranfer Protocol secure",
  };
  var inputText = searchBox.value.toUpperCase();
  var pro = dictionary[inputText];
  if (inputText in dictionary) {
    answerItem.innerText = pro;
  } else {
    answerItem.innerText = "I Don't Know...";
  }

  if (inputText == "") {
    answerItem.innerText = "...";
  }
}
