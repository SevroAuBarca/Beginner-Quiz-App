import { menu, form, select, result, datalist } from "./variables.js";
import { getQuestions } from "./getQuestions.js";
import { filterData } from "./filterData.js";
import { startQuiz } from "./quizMenu.js";
let questions;

const showMenu = () => {
  result.style.display = "none";
  menu.style.display = "block";
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let data;
  const difficult = select.options[select.selectedIndex].value;
  const numCategorie = datalist.options[datalist.selectedIndex].value;
  switch (difficult) {
    case "easy":
      data = await getQuestions("10", numCategorie, difficult);
      break;
    case "medium":
      data = await getQuestions("15", numCategorie, difficult);
      break;
    case "hard":
      data = await getQuestions("20", numCategorie, difficult);
      break;
  }
  questions = filterData(data);

  startQuiz(difficult);
});

export { questions, showMenu };
