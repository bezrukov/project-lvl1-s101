import readlineSync from 'readline-sync';

const countTrueAnswer = 3;

const getRandomNumber = (minValue = 1, maxValue = 100) =>
  parseInt(Math.random() * ((maxValue - minValue) + minValue), 10);

const getUserName = () => {
  const clientName = readlineSync.question('May I have you name ? ');
  console.log(`Hello, ${clientName} \n`);
  return clientName;
};

let countTrueClientAnswer = 0;

const answerIteration = (game) => {
  const gameQuestionAndAnswer = game('getQuestion')(getRandomNumber);
  console.log(`Question: ${gameQuestionAndAnswer.question}`);

  const clientAnswer = readlineSync.question('Your answer: ');

  const isWin = clientAnswer === gameQuestionAndAnswer.answer.toString();

  if (isWin) {
    countTrueClientAnswer += 1;
    console.log('Correct!');
  } else {
    console.log(`'${clientAnswer}' is wrong answer ;(. Correct answer was '${gameQuestionAndAnswer.answer.toString()}'.`);
    return false;
  }

  return countTrueClientAnswer < countTrueAnswer
    ? answerIteration(game)
    : true;
};

export default (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(game('getWelcome'));
  const clientName = getUserName();

  if (answerIteration(game)) {
    console.log(`Congratulations, ${clientName}!`);
  } else {
    console.log(`Let's try again, ${clientName}!!`);
  }
};
