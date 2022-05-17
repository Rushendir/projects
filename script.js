const quizData = [
    {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
    },
    {
      question: "who is the main author of the HTML",
      a: "Brendan Eich",
      b: "Tim Berners-Lee",
      c: "Web developer",
      d: "Google Inc",
      correct: "b",
    },
    {
      question: "If we want to place text around an image, which CSS property should we use?",
      a: "push",
      b: "float",
      c: "align",
      d: "wrap",
      correct: "b",
    },
    {
      question: " Which event is specific to the keyboard?",
      a: "onkeypress",
      b: "onkeydown",
      c: "onclick",
      d: "onkeyup",
      correct: "a",
    },
    {
      question: "Which of the attributes is mandatory in the <img> tag?",
      a: "src",
      b: "href",
      c: "Id",
      d: "alt",
      correct: "a",
    },
    {
      question: "In css, what h1 can be called as",
      a: "Selector",
      b: "Attribute",
      c: "Value",
      d: "Label",
      correct: "a",
    },
    {
      question: "Which of the following functions of “Number” object returns a string of the current number?",
      a: "toString()",
      b: "toFixed()",
      c: "toLocaleString()",
      d: "toPrecision()",
      correct: "a",
    },
    {
      question: "Which of the following functions sorts the elements of an array?",
      a: "toSource()",
      b: "sort()",
      c: "toString()",
      d: "unshift()",
      correct: "b",
    },
    {
      question: "Which one is not a comparison operator?",
      a: "<",
      b: ">",
      c: "=",
      d: "!=",
      correct: "c",
    },
    {
      question: "Which of the following tags are related to a table in HTML?",
      a: "<table> <row> <column>",
      b: "<table> <tr> <td>",
      c: " <table> <head> <body>",
      d: "<table> <header> <footer>",
      correct: "b",
    },
    {
      question: "What is the purpose of HTML forms?",
      a: "To display the content of an email.",
      b: "To display animation effect.",
      c: "To collect user input.",
      d: "None of the above",
      correct: "c",
    },
    {
      question: " What is iframe used for in HTML?",
      a: "To display a web page within a web page.",
      b: "To display a web page with an animation effect.",
      c: "To display a web page without a browser.",
      d: "All the answers are true",
      correct: "a",
    },
  ];
  
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitButton = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
  
  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };
  
  loadQuiz();
  
  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>
          `;
      }
    }
  });