// by reverse method.
function pallen(input) {
  const arr = input.split('');
  console.log(arr);
  const arr2 = input.split('').reverse();
  let a = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      a = false;
      break;
    }
  }
  if (a === true) {
    return 'pallendrome';
  }
  return 'not pallendrome';
}

console.log(pallen('madam'));

// by array original
function pallen1(input) {
  const arr = input.split('');
  const newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[arr.length - 1 - i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== newarr[i]) {
      return 'not a pallendrome';
    }
  }
  return 'pallendrome';
}
console.log(pallen1('racecar'));
// longestword

function longestword(input) {
  const arr = input.split(' ');
  let word = arr[0];
  const newarr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > word.length) {
      word = arr[i];
    }
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length >= word.length) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
console.log(longestword('i am a good good boy tood'));
