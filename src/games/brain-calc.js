const getRandomNumber = (minValue = 1, maxValue = 100) =>
  parseInt(Math.random() * ((maxValue - minValue) + minValue), 10);

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

let firstOperand = 0;
let secondOperand = 0;
let operation = '+';

const getOperation = () => operations[getRandomNumber(1, 3)];

const getWelcome = () =>
  'What is the result of the expression?. \n';

const getQuestion = () => {
  firstOperand = getRandomNumber();
  secondOperand = getRandomNumber();
  operation = getOperation();

  return `${firstOperand} ${operation} ${secondOperand}`;
};

const checkAnswer = answer =>
  parseInt(answer, 10) === resultOperations(firstOperand, secondOperand, operation);

export default () =>
  (message) => {
    switch (message) {
      case 'getWelcome':
        return getWelcome;
      case 'getQuestion':
        return getQuestion;
      case 'checkAnswer':
        return checkAnswer;
      default:
        return getWelcome;
    }
  };
