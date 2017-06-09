const getRandomNumber = (minValue = 1, maxValue = 100) =>
  parseInt(Math.random() * ((maxValue - minValue) + minValue), 10);

export default getRandomNumber;
