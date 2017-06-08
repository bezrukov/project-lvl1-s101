import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const clientName = readlineSync.question('May I have you name ? ');
console.log(`Hello, ${clientName} \n`);
