function occurance(input) {
  let count = 1;
  const obj = {};
  for (let i = 0; i < input.length; i++) {
    if (!obj.hasOwnProperty(input[i])) {
      count = 1;
      obj[input[i]] = count;
    } else {
      obj[input[i]] += 1;
    }
  }
  return obj;
}
console.log(occurance('asdfgfdaasdfgnodno'));
