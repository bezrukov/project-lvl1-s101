import readlineSync from 'readline-sync';

export default () => {
  const clientName = readlineSync.question('May I have you name ? ');
  console.log(`Hello, ${clientName}`);
};
