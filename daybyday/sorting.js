// inbuilt

function sorting(input) {
  return input.sort();
}
console.log(sorting(['f', 'c', 'a', 'b', 'd', 'e', 'A', 'B', 1, 2, 3, 4]));
// by my own method

function sorting1(input) {
  const newinput = [...input];

  let swap;
  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      if (newinput[i] > newinput[j]) {
        swap = newinput[i];
        newinput[i] = newinput[j];
        newinput[j] = swap;
        console.log(newinput);
      }
    }
  }
  return newinput;
}

console.log(sorting1([1, 3, 5, 1, 7, 9, 3, 4, 5]));

//prime
function prime(number) {
  for (let i = 2; i < (number + 1) / 2; i++) {
    if (number % i === 0) {
      console.log(i);
      return 'not a prime';
    }
  }
  return 'prime';
}
console.log(prime(53));

// 2 bigest numbers

function twobig(input) {
  let arr = [];
  let number;
  for (let i = 0; i < input.length; i++) {
    number = input[0];
    if (input[i] > number) {
      number = input[i];
    }
  }
  arr.push(number);
  number = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > number && input[i] < arr[0]) {
      number = input[i];
    }
  }
  arr.push(number);
  return arr;
}
console.log(twobig([1, 2, 6, 5, 4, 8, 7, 9]));
