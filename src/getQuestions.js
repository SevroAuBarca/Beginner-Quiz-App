const getQuestions = async (amount, category, difficult) => {
  // const API = `"https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${difficult}&type=multiple"`;

  const data = await fetch(
    `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficult}&type=multiple`
  );
  const { results } = await data.json();
  return results;
};

export { getQuestions };
