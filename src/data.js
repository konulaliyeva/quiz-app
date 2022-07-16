import questions from "./questions.json";

export default questions.map((question) => {
  const {
    id,
    question: text,
    answers,
    correct_answers,
    multiple_correct_answers,
  } = question;

  return {
    id,
    text,
    multiple: multiple_correct_answers === "true",
    answers: Object.entries(answers)
      .filter((entry) => entry[1] !== null) 
      .map((entry) => {
        const [key, value] = entry;
        const correctAnswersKey = key + "_correct";
        const isCorrect = correct_answers[correctAnswersKey];

        return {
          text: value,
          isCorrect: isCorrect === 'true',
        };
      }),
  };
});
