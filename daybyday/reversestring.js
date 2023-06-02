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
