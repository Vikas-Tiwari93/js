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
