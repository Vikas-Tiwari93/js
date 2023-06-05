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

//2a2b3a

function twoa(input) {
  let output = '';
  let count = 1;
  for (let i = 1; i < input.length; i++) {
    // a(0)===a(1) for i=1 ..a2
    if (input[i - 1] === input[i]) {
      console.log(input[i]);
      count += 1;
    } else {
      output = output + input[i - 1] + count;
      count = 1;
    }
    if (i === input.length - 1) {
      output = output + input[i] + count;
    }
  }
  return output;
}
console.log(twoa('aabbaaabbbccc'));
