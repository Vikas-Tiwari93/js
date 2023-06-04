// firstpair []
function pair(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      if (input[j] + input[i] === 0) {
        return [input[i], input[j]];
      }
    }
  }
}
console.log(pair([1, 2, 3, 4, 2, -1, -2, 3, 4, 0]));

// by object(check)
function pairmap(input) {
  const sum = 0;
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    let req = sum - input[i];
    if (!obj.hasOwnProperty(req)) {
      obj[req] = true;
    } else {
      return [sum - input[i], input[i]];
    }
  }
}

console.log(pairmap([-1, -2, 3, 4, -1, -2, 3, 4, 0]));
// closest pairs
function pairclose(input) {}

// input[1,2,3,7,8,7,9,12]
//      0,1,2,3,4,5,6,7
// input[0]+1 ===input[1]
// let variable=input[3]+1!...var!==input[4] ....newarr.push()...newarr=[5]...input[3]=var..i--
//
function series(input, k) {
  const inputnew = [...input];
  const arr = [];
  let missing;
  for (let i = 1; i < inputnew.length; i++) {
    missing = inputnew[i - 1] + 1;
    if (inputnew[i] - inputnew[i - 1] !== 1) {
      arr.push(missing);
      inputnew[i - 1] = missing;
      console.log(inputnew);
      i--;
    }
  }
  return arr[k - 1];
}
console.log(series([1, 2, 3, 7, 8, 9, 12], 3));
