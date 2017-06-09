import startGamesProcess from '../games-process';
import getRandomNumber from '../random-number';

const gcd = (firstOperand, secondOperand) =>
  (!secondOperand
    ? firstOperand
    : gcd(secondOperand, firstOperand % secondOperand));

const game = () => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();

  return {
    question: `${firstOperand} ${secondOperand}`,
    answer: String(gcd(firstOperand, secondOperand)),
  };
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  startGamesProcess(description, game);
};
