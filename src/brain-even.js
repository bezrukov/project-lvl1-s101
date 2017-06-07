import readlineSync from 'readline-sync';

const answerYes = 'yes';
const answerNo = 'no';
const countTrueAnswerToWin = 3;

/* насколько я понимаю в данном месте название переменной оправданно */
const isEven = number => number % 2 === 0;

const checkAnswer = (clientAnswer, question) => {
  const systemAnswer = isEven(question) ? answerYes : answerNo;

  return clientAnswer === systemAnswer;
};

const getRandomNumber = () => parseInt(Math.random() * ((100 - 1) + 1), 10);

let countTrueAnswer = 0;

const getQuestion = () => {
  const question = getRandomNumber();
  console.log(`Question: ${question}`);
  const clientAnswer = readlineSync.question('Your answer: ');
  const resultAnswer = checkAnswer(clientAnswer, question);
  console.log(
    resultAnswer ? 'Correct!' : 'Incorrect!',
  );

  if (resultAnswer) {
    countTrueAnswer += 1;
    if (countTrueAnswer === countTrueAnswerToWin) {
      return 0;
    }
  }

  return getQuestion();
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no". \n');
  const clientName = readlineSync.question('May I have you name ? ');
  console.log(`Hello, ${clientName} \n`);

  getQuestion();

  console.log(`Congratulations, ${clientName}!`);
};
