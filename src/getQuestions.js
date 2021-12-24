const getQuestions = async (amount, categorie, difficult) => {
  // const API = `"https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${difficult}&type=multiple"`;

  const data = await fetch(
    `https://opentdb.com/api.php?amount=${amount}&category=${categorie}&difficulty=${difficult}&type=multiple`
  );
  const { results } = await data.json();
  return results;
};

export { getQuestions };
