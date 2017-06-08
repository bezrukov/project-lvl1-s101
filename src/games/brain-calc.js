const operations = ['+', '-', '*'];

const resultOperations = (firstOperand, secondOperand, operation) => {
  switch (operation) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return firstOperand + secondOperand;
  }
};

const getOperation = getRandomNumber => operations[getRandomNumber(1, 3)];

const getQuestion = (getRandomNumber) => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const operation = getOperation(getRandomNumber);

  return {
    question: `${firstOperand} ${operation} ${secondOperand}`,
    answer: resultOperations(firstOperand, secondOperand, operation),
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
