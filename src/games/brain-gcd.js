const gcd = (firstOperand, secondOperand) =>
  (!secondOperand
    ? firstOperand
    : gcd(secondOperand, firstOperand % secondOperand));

const getQuestion = (getRandomNumber) => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();

  return {
    question: `${firstOperand} ${secondOperand}`,
    answer: gcd(firstOperand, secondOperand),
  };
};

const welcome = 'What is the result of the expression?. \n';

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
