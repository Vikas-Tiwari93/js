//general series
function fib(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      arr[i] = 0;
    } else if (i <= 2) {
      arr[i] = 1;
    } else {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  return arr;
}
console.log(fib(1000));

//dynamic prog.
