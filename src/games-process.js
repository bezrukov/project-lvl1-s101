import readlineSync from 'readline-sync';

const countTrueAnswer = 3;

const answerIteration = (game, count = 0) => {
  if (count === countTrueAnswer) {
    return true;
  }

  const gameQuestionAndAnswer = game();
  console.log(`Question: ${gameQuestionAndAnswer.question}`);
  const clientAnswer = readlineSync.question('Your answer: ');
  if (clientAnswer === gameQuestionAndAnswer.answer) {
    console.log('Correct!');
  } else {
    console.log(`'${clientAnswer}' is wrong answer ;(. Correct answer was '${gameQuestionAndAnswer.answer}'.`);
    return false;
  }

  return answerIteration(game, count + 1);
};

export default (desc, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${desc}\n`);

  const clientName = readlineSync.question('May I have you name ? ');
  console.log(`Hello, ${clientName} \n`);

  if (answerIteration(game)) {
    console.log(`Congratulations, ${clientName}!`);
  } else {
    console.log(`Let's try again, ${clientName}!!`);
  }
};
