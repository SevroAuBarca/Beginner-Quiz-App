const filterData = (data) => {
  const questions = [];

  data.forEach((element) => {
    questions.push({
      question: element.question,
      correct_answer: element.correct_answer,
      answers: resolve(element.correct_answer, element.incorrect_answers),
    });
  });
  console.table(questions);
  return questions;
};

const resolve = (correct, incorrect) => {
  const answers = [correct, ...incorrect];
  const randomAnswer = answers.sort(() => {
    return Math.random() - 0.5;
  });
  return [...randomAnswer];
};

export { filterData };
