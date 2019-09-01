const minMax = (array) => {
  let min = array[0], max = array[0];
  for (let i = 0; i <= array.length - 1; i++) {
    min = array[i] < min ? array[i] : min;
    max = array[i] > max ? array[i] : max;
  }
  return {min, max}
}

console.log(minMax([5, 3, 34, 56, 2, 99, 11, 123, 17]));
console.log(minMax([-5, 3, 34, 56, 2.3, 99, 11, 123, 170, 40, 4.3]));
console.log(minMax([3, 2.3, 100, 40, 100.1]));
