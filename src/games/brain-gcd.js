const getRandomNumber = (minValue = 1, maxValue = 50) =>
  parseInt(Math.random() * ((maxValue - minValue) + minValue), 10);

const gcd = (firstOperand, secondOperand) => {
  return !secondOperand
    ? firstOperand
    : gcd(secondOperand, firstOperand % secondOperand);
};

let firstOperand = 0;
let secondOperand = 0;

const getWelcome = () =>
  'Find the greatest common divisor of given numbers. \n';

const getQuestion = () => {
  firstOperand = getRandomNumber();
  secondOperand = getRandomNumber();

  return `${firstOperand} ${secondOperand}`;
};

const checkAnswer = answer =>
  parseInt(answer, 10) === gcd(firstOperand, secondOperand);

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
