const numJewelsInStones = function (jewels, stones) {
  let output = 0
  if (typeof jewels === "string" && typeof stones === "string") {
    for (let i = 0; i < jewels.length; i++) {
      for (let j = 0; j < stones.length; j++) {
        if (jewels[i] === stones[j]) {
          output++
        }
      }
    }
  } else {
    console.log(`${jewels} OR ${stones} is not a string`)
  }
  return output
};

export default numJewelsInStones