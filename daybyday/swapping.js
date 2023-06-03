//by third variable
function swap(a, b) {
  let a1 = a;
  let b1 = b;
  let c = b1;
  b1 = a1;
  a1 = c;
  return console.log(a1, b1);
}
swap(10, 20);
// by nothird variable
function swap1(a, b) {
  [a, b] = [b, a];
  return a;
}
console.log(swap1(10, 20));
