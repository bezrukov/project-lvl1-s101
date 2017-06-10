import startGamesProcess from '../games-process';
import getRandomNumber from '../random-number';

const description = 'Answer "yes" if number prime otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const question = getRandomNumber();

  return {
    question: String(question),
    answer: isPrime(question) ? 'yes' : 'no',
  };
};

export default () => {
  startGamesProcess(description, game);
};
