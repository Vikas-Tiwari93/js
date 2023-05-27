function reverse(input) {
  if (Math.abs(input) > 2 ** 31 || input === -1) {
    return 0;
  }
  const a = String(input);

  let newstring = '';
  for (let i = 0; i < a.length; i++) {
    newstring += a[a.length - i - 1];
  }
  return newstring;
}
console.log(reverse(45548786));
