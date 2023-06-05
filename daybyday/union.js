// union for unique elements
function union(input1, input2) {
  let newarr = [...input1, ...input2];
  let output = [];
  new Set(newarr).forEach((e) => {
    output.push(e);
  });
  return output;
}
console.log(union([1, 2, 3, 3, 4, 5], [3, 3, 4, 5, 6, 7])); //[1,2,3,4,5,6,7]

// intersection
function intersection(input1, input2) {
  let output = [];
  for (let i = 0; i < input1.length; i++) {
    for (let j = 0; j < input2.length; j++) {
      if (input1[i] === input2[j]) {
        output.push(input1[i]);
        break;
      }
    }
  }
  return output;
}
console.log(intersection([1, 2, 3, 3, 4, 5], [3, 3, 4, 5, 6, 7])); //[3,3,4,5]//try with filter and includes

//
