// 1:-check if argument is a number
// 2:-check if number is >1
// 3:-if number%3===0 && number%5===0, print fizzbuzz
// 4:-if number%3===0 , print fizz
// 5:- number%5===0, print buzz
// 6:- else print number
import ab from './fetch_function.js';

console.log(ab);

function print(a) {
  if (typeof a !== 'number' || Number.isNaN(a)) {
    console.log('give a valid number');
  }
  if (a <= 1) {
    console.log('given number greater than 1');
  }
  for (let i = 1; i <= a; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

print(30);
