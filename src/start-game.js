import readlineSync from 'readline-sync';

const countTrueAnswer = 3;

const getUserName = () => {
  const clientName = readlineSync.question('May I have you name ? ');
  console.log(`Hello, ${clientName} \n`);
  return clientName;
};

let countTrueClientAnswer = 0;

const answerIteration = (game) => {
  console.log(`Question: ${game('getQuestion')()}`);

  const clientAnswer = readlineSync.question('Your answer: ');

  const isWin = game('checkAnswer')(clientAnswer);

  if (isWin) {
    countTrueClientAnswer += 1;
    console.log('Correct!');
  } else {
    console.log('Icorrect!');
  }

  return countTrueClientAnswer < countTrueAnswer
    ? answerIteration(game)
    : 0;
};

export default (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(game('getWelcome')());
  const clientName = getUserName();

  answerIteration(game);

  console.log(`Congratulations, ${clientName}!`);
};
