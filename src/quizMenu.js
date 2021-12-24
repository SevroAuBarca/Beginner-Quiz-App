import { menu, quiz } from "./variables.js";
import { questions } from "./index.js";
import { showScore } from "./resultMenu.js";

let counter = 0;
let progress = 0;

const answers = {
  correct: 0,
  incorrect: 0,
};

const numQuestions = {
  easy: 10,
  medium: 15,
  hard: 20,
};

const startQuiz = (difficult) => {
  menu.style.display = "none";
  quiz.style.display = "block";

  updateQuiz(difficult);
};

const updateQuiz = (difficult) => {
  quiz.innerHTML = "";

  quiz.innerHTML = `
  <h2>${questions[counter].question}</h2>
  <form id='formQuiz' action="">
    <label class="label_opttions" for="answer1">
      <input type="radio" class='radio' name="answer" id="answer1" value='${questions[counter].answers[0]}'> <p>
      ${questions[counter].answers[0]}
      </p></input>
    </label>
    <label class="label_opttions" for="answer2">
      <input type="radio" class='radio' name="answer" id="answer2" value='${questions[counter].answers[1]}'>
      <p>
      ${questions[counter].answers[1]}
      </p></input>
    </label>
    <label class="label_opttions" for="answer3">
      <input type="radio" class='radio' name="answer" id="answer3" value='${questions[counter].answers[2]}' > <p>
      ${questions[counter].answers[2]}
      </p></input>
    </label>
    <label class="label_opttions" for="answer4">
      <input type="radio" class='radio' name="answer" id="answer4" value='${questions[counter].answers[3]}'>
      <p>
      ${questions[counter].answers[3]}
      </p>
      </input>
    </label>
    <button class="cta" type="submit">
      <span>Next</span>
      <svg width="15px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </button>
    
    <progress max="${numQuestions[difficult]}" value="${progress}"></progress>
  </form>
  `;

  document.getElementById("formQuiz").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(questions.length, counter);
    if (counter !== questions.length - 1) {
      checkAnswer();
      counter++;
      progress += 1;
      updateQuiz(difficult);
    } else {
      checkAnswer();
      counter = 0;
      progress = 0;
      showScore();
    }
  });
};

const checkAnswer = () => {
  const options = document.querySelectorAll(".radio");
  let index;
  for (index = 0; index < options.length; index++) {
    if (options[index].checked) {
      break;
    }
  }
  console.log(options[index].value, questions[counter].correct_answer);
  if (options[index].value === questions[counter].correct_answer) {
    answers.correct++;
  } else {
    answers.incorrect++;
  }
  console.log(answers);
};

export { startQuiz, answers };
