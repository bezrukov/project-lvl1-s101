import startGamesProcess from '../games-process';
import getRandomNumber from '../random-number';

const description = 'What number is missing in this progression?';

const minNumStart = 1;
const maxNumStart = 100;
const lengthProgression = 10;

const getProgression = () => {
  const fistElement = getRandomNumber(minNumStart, maxNumStart);
  const stepProgression = getRandomNumber(minNumStart, maxNumStart);

  const iter = (progressionElement, progression) => {
    if (progression.length === lengthProgression) {
      return progression;
    }
    progression.push(progressionElement);
    return iter(progressionElement + stepProgression, progression);
  };

  return iter(fistElement, []);
};

const prepareProgression = (progression) => {
  const copyProgression = progression.slice();
  const shadowIndex = getRandomNumber(1, lengthProgression - 1);
  const shadowElement = progression[shadowIndex];
  copyProgression[shadowIndex] = '..';
  return {
    shadowElement,
    progression: copyProgression.join(' '),
  };
};

const game = () => {
  const preparedProgression = prepareProgression(getProgression());

  return {
    question: preparedProgression.progression,
    answer: String(preparedProgression.shadowElement),
  };
};

export default () => {
  startGamesProcess(description, game);
};
