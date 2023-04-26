function palendrome(input) {
  let a;
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    arr.push(input[input.length - 1 - i]);
    console.log(arr[i], input[i]);

    if (arr[i] === input[i]) {
      a = true;
    } else {
      a = false;
      break;
    }
  }
  if (a === true) {
    console.log('its an pallendrome');
  } else {
    console.log('its not an pallendrome');
  }
}

palendrome('level');

function palendromestring(input) {
  if (input.length > 1) {
    let str = '';

    const inputsmall = input.toLowerCase();
    for (let i = 0; i < inputsmall.length; i++) {
      str = inputsmall[i] + str;
    }
    if (str === inputsmall) {
      return str;
    }
  }
}
palendromestring('madam');

let totalPallendrome = (input, callback) => {
  let arr = input.split(' ');
  let pallen = [];
  let pallenlength = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) !== undefined) {
      pallen.push(callback(arr[i]));
      pallenlength.push(callback(arr[i]).length);
    }
  }
  console.log(pallen, pallenlength);
  return pallen;
};

totalPallendrome('i am vikas , madam and i have a racecar', palendromestring);
