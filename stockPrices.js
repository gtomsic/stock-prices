const best = (arr) => {
  const maxValue = Math.max(...arr);
  if (arr.length <= 1) {
    if (arr[0] / 1 === arr[0]) {
      return 0;
    }
  } else {
    return maxValue === arr[0] ? 0 : maxValue;
  }
};
console.log(best([4, 7, 9, 23]));
