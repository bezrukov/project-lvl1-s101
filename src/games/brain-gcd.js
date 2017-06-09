import gamesProcess from '../games-process';
import getRandomNumber from '../random-number';

const gcd = (firstOperand, secondOperand) =>
  (!secondOperand
    ? firstOperand
    : gcd(secondOperand, firstOperand % secondOperand));

const getPuzzle = () => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();

  return {
    question: `${firstOperand} ${secondOperand}`,
    answer: String(gcd(firstOperand, secondOperand)),
  };
};

export default () => {
  const description = 'What is the result of the expression?.';
  gamesProcess(description, getPuzzle);
};
