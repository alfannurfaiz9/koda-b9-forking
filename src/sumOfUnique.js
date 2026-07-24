export const sumOfUnique = function (nums) {
  const obj = {};
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1;
  }

  console.log(obj);

  for (const key in obj) {
    if (obj[key] === 1) {
      result += Number(key);
    }
  }

  return result;
};
