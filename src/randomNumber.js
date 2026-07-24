function getRandomNumber(minNumber, maxNumber) {
  const range = maxNumber - minNumber;
  const rand = Math.random();
  return (minNumber + range * rand).toFixed(3);
}

export default getRandomNumber