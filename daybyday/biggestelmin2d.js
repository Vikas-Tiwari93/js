function biggestelm(input) {
  let output = input[0][0];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] > output) {
        output = input[i][j];
        console.log(output);
      }
    }
  }
  return output;
}

console.log(
  biggestelm([
    [1, 2, 3, 4],
    [5, 16, 7, 8],
    [11, 12, 13, 14],
    [21, 32, 43, 24],
  ])
);
//new method
