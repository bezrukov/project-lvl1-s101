import readlineSync from 'readline-sync';
import getUserName from './get-user-name';

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';
const COUNT_TRUE_ANSWER = 3;
const NUMBERS = [15, 6, 7, 34, 13];

const isEven = number => number % 2 === 0;

const checkAnswer = (clientAnswer, number) => {
  const systemAnswer = isEven(number) ? ANSWER_YES : ANSWER_NO;

  return clientAnswer === systemAnswer;
};

const getQuestion = () => {
  let countTrueAnswer = 0;

  for (let i = 0; i < NUMBERS.length; i += 1) {
    const number = NUMBERS[i];
    console.log(`Question: ${number}`);
    const clientAnswer = readlineSync.question('Your answer: ');
    const resultAnswer = checkAnswer(clientAnswer, number);
    console.log(
      resultAnswer ? 'Correct!' : 'Incorrect!',
    );

    if (resultAnswer) {
      countTrueAnswer += 1;
      if (countTrueAnswer === COUNT_TRUE_ANSWER) {
        break;
      }
    }
  }

  if (countTrueAnswer !== COUNT_TRUE_ANSWER) {
    getQuestion();
  }
};

export default () => {
  console.log('Answer "yes" if number even otherwise answer "no". \n');
  const clientName = getUserName();
  console.log('\n');

  getQuestion();

  console.log(`Congratulations, ${clientName}!`);
};
