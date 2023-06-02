//by object
function duplicate(input) {
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    if (!obj.hasOwnProperty(input[i])) {
      obj[input[i]] = true;
    }
  }
  return Object.keys(obj).join('');
}
console.log(duplicate('aadgrrtyg'));

//set
function duplicate2(input) {
  let myset = new Set(input);
  let str = '';
  console.log(
    myset.forEach((e) => {
      str += e;
    })
  );
  return str;
}
console.log(duplicate2('aadgrrtyg'));

// big method

function duplicate3(input) {
  let inputarr = input.split('');
  let arr = [];
  for (let i = 0; i < inputarr.length; i++) {
    for (let j = 0; j < inputarr.length; j++) {
      if (inputarr[i] === inputarr[j] && i !== j) {
        arr.push(inputarr[i]);
        inputarr.splice(j, 1);
        j--;
      }
    }
  }
  //   return arr;
  return inputarr.join('');
}
console.log(duplicate3('aadgrrtygyyyy'));

//using filter

function duplicate4(input) {
  let inputarr = input.split('');
  let newarr = inputarr.filter((elm) => {
    for (let i = 0; i < inputarr.length; i++) {
      if (elm === inputarr[i]) {
        delete inputarr[i];
      }
    }
    return elm;
  });

  return newarr.join('');
}
console.log(duplicate4('aassddffgghh'));
