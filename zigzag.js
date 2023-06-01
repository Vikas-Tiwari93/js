// string ="ABCDEFGHIJK" n=3  output=["AEI","BDFHJ","CGK"]

function zigzag(input, rows) {
  const temp = [];
  let direction = 1;
  let I = 2;
  for (let i = 0; i < rows; i++) {
    temp[i] = input[i];
  }
  for (let i = rows; i < input.length; i++) {
    if (I === 0 || I === rows - 1) {
      direction = -direction;
      I += direction;
      temp[I] += input[i];

      console.log(temp);
    } else {
      I += direction;
      temp[I] += input[i];
      console.log(temp);
    }
  }
}
zigzag('ABCDEFGHIJK', 3); //// string ="ABCDEFGHIJK" n=3  output=["AEI","BDFHJ","CGK"]
