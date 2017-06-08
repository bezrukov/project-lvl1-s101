const answerYes = 'yes';
const answerNo = 'no';
const isEven = number => number % 2 === 0;

const getQuestion = (getRandomNumber) => {
  const question = getRandomNumber();

  return {
    question,
    answer: isEven(question) ? answerYes : answerNo,
  };
};

const welcome = 'Answer "yes" if number even otherwise answer "no". \n';

export default () =>
  (message) => {
    switch (message) {
      case 'getWelcome':
        return welcome;
      case 'getQuestion':
        return getQuestion;
      default:
        return welcome;
    }
  };
