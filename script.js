let questionBank = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Modern Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: "Django"
  },
  {
    question: "Which HTML tag is used to display an image?",
    options: ["<img>", "<image>", "<src>", "<pic>"],
    answer: "<img>"
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    answer: "<script>"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Microsoft", "Sun Microsystems", "Oracle"],
    answer: "Netscape"
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: ["var colors = (1:'red', 2:'green')", "var colors = ['red', 'green']", "var colors = 'red', 'green'", "var colors = {'red', 'green'}"],
    answer: "var colors = ['red', 'green']"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "#", "<!-- -->", "/* */"],
    answer: "//"
  },
  {
    question: "Which tag is used to link an external CSS file?",
    options: ["<style>", "<link>", "<css>", "<script>"],
    answer: "<link>"
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: ["msg('Hello World');", "msgBox('Hello World');", "alert('Hello World');", "alertBox('Hello World');"],
    answer: "alert('Hello World');"
  },
  {
    question: "Which attribute is used in HTML to define inline styles?",
    options: ["style", "font", "class", "styles"],
    answer: "style"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onchange", "onmouseover", "onmouseclick", "onclick"],
    answer: "onclick"
  }
];

let shuffledQuestions = [];
let currentQuestion = 0;
let score = 0;

function shuffleQuestions() {
  // Shuffle and pick the first 10
  shuffledQuestions = questionBank
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);
}

function loadQuestion() {
  const q = shuffledQuestions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const buttons = document.querySelectorAll(".option");
  buttons.forEach((btn, index) => {
    btn.innerText = q.options[index];
    btn.disabled = false;
    btn.style.backgroundColor = "#ea580c";
  });
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("score").innerText = "";
}

function checkAnswer(button) {
  const selected = button.innerText;
  const correct = shuffledQuestions[currentQuestion].answer;
  if (selected === correct) {
    score++;
    button.style.backgroundColor = "green";
  } else {
    button.style.backgroundColor = "red";
  }
  document.querySelectorAll(".option").forEach(btn => btn.disabled = true);
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < shuffledQuestions.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("score").innerHTML = `
    <h2>Your score is ${score}/${shuffledQuestions.length}</h2>
    <button onclick="restartQuiz()" class="btn">Restart Quiz</button>
  `;
}

function restartQuiz() {
  score = 0;
  currentQuestion = 0;
  shuffleQuestions();
  document.getElementById("quiz").style.display = "block";
  loadQuestion();
}

shuffleQuestions();
loadQuestion();
