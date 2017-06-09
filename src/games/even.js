import startGamesProcess from '../games-process';
import getRandomNumber from '../random-number';

const description = 'Answer "yes" if number even otherwise answer "no".';
const answerYes = 'yes';
const answerNo = 'no';
const isEven = number => number % 2 === 0;

const game = () => {
  const question = getRandomNumber();

  return {
    question,
    answer: isEven(question) ? answerYes : answerNo,
  };
};

export default () => {
  startGamesProcess(description, game);
};
