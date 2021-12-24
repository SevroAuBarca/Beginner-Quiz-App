import { showMenu } from "./index.js";
import { answers } from "./quizMenu.js";
import { quiz, result } from "./variables.js";

const showScore = () => {
  quiz.style.display = "none";
  result.style.display = "block";
  result.innerHTML = "";

  result.innerHTML = `  
  <h2 class='res_data'>Total</h2>
  <p class='res_data'>Passed: ${answers.correct}</p>
  <p class='res_data'>Failed: ${answers.incorrect}</p>
  <h3 class='res_data'>${
    answers.correct > answers.incorrect
      ? "CONGRATULATIONS, YOU WON"
      : "SORRY, TRY AGAIN"
  }</h3>
  <button id='retry' class="cta" type="submit">
  <span>Retry</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>`;

  document.getElementById("retry").addEventListener("click", () => {
    answers.correct = 0;
    answers.incorrect = 0;
    showMenu();
  });
};

export { showScore };
