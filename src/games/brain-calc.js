import startGamesProcess from '../games-process';
import getRandomNumber from '../random-number';

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

const getOperation = () => operations[getRandomNumber(1, 3)];

const getPuzzle = () => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const operation = getOperation();

  return {
    question: `${firstOperand} ${operation} ${secondOperand}`,
    answer: String(resultOperations(firstOperand, secondOperand, operation)),
  };
};

export default () => {
  const description = 'What is the result of the expression?.';
  startGamesProcess(description, getPuzzle);
};
