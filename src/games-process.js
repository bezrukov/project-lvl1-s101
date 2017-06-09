import readlineSync from 'readline-sync';

const countTrueAnswer = 3;

const getUserName = () => {
  const clientName = readlineSync.question('May I have you name ? ');
  console.log(`Hello, ${clientName} \n`);
  return clientName;
};

let countTrueClientAnswer = 0;

const answerIteration = (game) => {
  const gameQuestionAndAnswer = game();
  console.log(`Question: ${gameQuestionAndAnswer.question}`);

  const clientAnswer = readlineSync.question('Your answer: ');

  const isWin = clientAnswer === gameQuestionAndAnswer.answer;

  if (isWin) {
    countTrueClientAnswer += 1;
    console.log('Correct!');
  } else {
    console.log(`'${clientAnswer}' is wrong answer ;(. Correct answer was '${gameQuestionAndAnswer.answer}'.`);
    return false;
  }

  return countTrueClientAnswer < countTrueAnswer
    ? answerIteration(game)
    : true;
};

export default (desc, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${desc}\n`);

  const clientName = getUserName();

  if (answerIteration(game)) {
    console.log(`Congratulations, ${clientName}!`);
  } else {
    console.log(`Let's try again, ${clientName}!!`);
  }
};
