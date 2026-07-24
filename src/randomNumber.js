function getRandomNumber(minNumber, maxNumber) {
  const range = maxNumber - minNumber;
  const rand = Math.random();
  return (minNumber + range * rand).toFixed(2);
}

export default getRandomNumber