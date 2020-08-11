// question here
var questionsArray = [
  {
    id: 1,
    question: "1: What is the original name of JavaScript?",
    answer: "C. Mocha",
    options: ["A. LiveScript", "B. EScript", "C. Mocha", "D. JavaScript"],
  },
  {
    id: 2,
    question: "2: HTML stands for?",
    answer: "B. Hyper Text Markup Language",
    options: [
      "A. High Text Markup Language",
      "B. Hyper Text Markup Language",
      "C. Hyper Tabular Markup Language",
      "D. None of these",
    ],
  },
  {
    id: 3,
    question: "3: How old is Sir Ali Mughal?",
    answer: "A. 18",
    options: ["A. 18", "B. 22", "C. 32", "D. 20"],
  },
  {
    id: 4,
    question: "4: Which company developed JavaScript??",
    answer: "A. Netscape",
    options: ["A. Netscape", "B.	Bell Labs", "C.	Sun Microsystems", "D. IBM"],
  },
];

function showQuestion(e) {
  //show question
  var questionElement = document.getElementById("qustionElement");
  questionElement.innerHTML = questionsArray[e].question;

  //show option
  var optionElement = document.getElementsByClassName("optionElement");
  for (var i = 0; i < optionElement.length; i++) {
    optionElement[i].innerHTML = questionsArray[e].options[i];
  }
}

var questionCount = 0;
var score = 0;
var c = 0;

function nextQuestion() {
  var nextBtn = document.getElementById("nextBtn");
  validate(questionCount);
  questionCount++;

  if (questionCount == 4) {
    // stop()
    location.href = "result.html";
    return;
  }
  showQuestion(questionCount);
  removeActiveClass();
}

function putActiveClass(e) {
  removeActiveClass();
  e.classList.add("active");
  // validate(questionCount)
}

function removeActiveClass() {
  var active = document.getElementsByClassName("active");
  for (var i = 0; i < active.length; i++) {
    active[i].classList.remove("active");
  }
}

function validate(e) {
  // var active = document.getElementsByClassName("active")[0]
  if (
    document.getElementsByClassName("active")[0].innerHTML ==
    questionsArray[e].answer
  ) {
    score += 10;
    c++;
    sessionStorage.setItem("Correct", c);
    sessionStorage.setItem("score", score);
    var point = document.getElementById("score");
    point.innerHTML = score;
  }
}
