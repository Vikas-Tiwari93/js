// arra.reverse()

function reverse(input) {
  let inputarr = input.split(' ');
  return inputarr.reverse().join(' ');
}

console.log(reverse('i am a good boy'));
// without inbuilt

function reverse1(input) {
  let inputarr = input.split(' ');
  let arr = [];
  for (let i = 0; i < inputarr.length; i++) {
    arr.push(inputarr[inputarr.length - 1 - i]);
  }
  return arr.join(' ');
}
console.log(reverse1('i am a good boy'));
// anagram

function ana(input1, input2) {
  if (input1.length === input2.length) {
    const obj1 = {};
    const obj2 = {};
    let count = 1;
    for (let i = 0; i < input1.length; i++) {
      if (!obj1.hasOwnProperty(input1[i])) {
        count = 1;
        obj1[input1[i]] = count;
      } else {
        obj1[input1[i]] += 1;
      }
      if (!obj2.hasOwnProperty(input2[i])) {
        count = 1;
        obj2[input2[i]] = count;
      } else {
        obj2[input2[i]] += 1;
      }
    }
    const keysobj1 = Object.keys(obj1);
    let a = false;
    for (let i = 0; i < keysobj1.length; i++) {
      if (obj2[keysobj1[i]] === obj1[keysobj1[i]]) {
        a = true;
      } else {
        a = false;
        break;
      }
    }
    if (a === true) {
      return 'anagram';
    }
    return 'not an anagram';
  }
  return 'not an anagram';
}
console.log(ana('sdder', 'dsder'));
