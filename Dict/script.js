const searchBox = document.getElementById("search");
const answerBox = document.getElementById("answer-box");
const answerItem = document.getElementById("answer-item");
searchBox.addEventListener("keyup", searchInput);

function searchInput() {
  const dictionary = {
    HTTP: "HyperText Transfer Protocol",
    XML: "eXtesible Markup Language",
    HTTPS: "Hyper Text Tranfer Protocol Secure",
    URL: "Uniform Resource Locator",
    DNS: "Domain Name System",
    OOP: "Object Oriented Programming",
    HTML: "HyperText Markup Language",
    GUI: "graphical User Interface",
    CPU: "Central Processing Unit",
    GPU: "Graphics Processing Unit",
    RAM: "Random Access Memory",
    APU: "Accelerated Processing Unit",
    CSS: "Cascading Style sheets",
  };
  var inputText = searchBox.value.toUpperCase();
  var description = dictionary[inputText];
  if (inputText in dictionary) {
    answerItem.innerText = description;
  } else {
    answerItem.innerText = "I Don't Know...";
  }

  if (inputText == "") {
    answerItem.innerText = "...";
  }
}
