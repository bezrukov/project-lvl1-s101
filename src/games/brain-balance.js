import startGamesProcess from '../games-process';
import getRandomNumber from '../random-number';

const getBalancedNumber = (unBalancedNumber) => {
  const arrayDigits = String(unBalancedNumber).split('').map(e => Number(e));
  const minDigit = Math.min(...arrayDigits);
  const maxDigit = Math.max(...arrayDigits);
  if (Math.abs(minDigit - maxDigit) < 2) {
    return arrayDigits.sort().join('');
  }

  arrayDigits[arrayDigits.indexOf(minDigit)] += 1;
  arrayDigits[arrayDigits.indexOf(maxDigit)] -= 1;

  return getBalancedNumber(Number(arrayDigits.join('')));
};

const game = () => {
  const unBalancedNumber = getRandomNumber(1, 1000);

  return {
    question: unBalancedNumber,
    answer: getBalancedNumber(unBalancedNumber),
  };
};

export default () => {
  const description = 'Balance the given number.';
  startGamesProcess(description, game);
};
