function spiral(input) {
  if (Array.isArray(input)) {
    const arr = [];
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        arr.push(input[i][j]);
      }
    }
  }
}
