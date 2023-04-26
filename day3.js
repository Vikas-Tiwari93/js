// triangle star
function trianglestar(n) {
  let a = n;
  for (let i = 1; i <= n; i++) {
    let b = ' ';
    let c = '*';
    let final = '';
    for (let j = 1; j <= a; j++) {
      if (j <= n - i) {
        final += b;
      } else {
        final += c;
      }
    }
    console.log(final);
    a += 1;
  }
}
trianglestar(6);

// rev triangle
function revtrianglestar(n) {
  let a = 2 * n - 1;
  for (let i = 1; i <= n; i++) {
    let b = ' ';
    let c = '*';
    let final = '';
    for (let j = 1; j <= a; j++) {
      if (j <= i - 1) {
        final += b;
      } else {
        final += c;
      }
    }
    console.log(final);
    a -= 1;
  }
}
revtrianglestar(6);

// hollow triangle
function hollowtriangle(n) {
  let a = n;
  let final2 = '';
  let c = '*';
  for (let i = 1; i < n; i++) {
    let b = ' ';

    let final = '';

    for (let j = 1; j <= a; j++) {
      if (j == n - i + 1 || j == a) {
        final += c;
      } else {
        final += b;
      }
    }
    console.log(final);
    a += 1;
  }
  for (let j = 1; j <= a; j++) {
    final2 += c;
  }
  console.log(final2);
}
hollowtriangle(6);

// right angle triangle

function rightangle(n) {
  const a = '*';
  const b = ' ';
  let c = n + 1;

  for (let i = 1; i <= n; i++) {
    let final = '';
    for (let j = 1; j <= n; j++) {
      if (j <= c - i) {
        final += a;
      } else {
        final += b;
      }
    }
    console.log(final);
  }
}
rightangle(6);

function rightanglerev(n) {
  const a = '*';
  const b = ' ';
  let c = n + 1;

  for (let i = 1; i <= n; i++) {
    let final = '';
    for (let j = 1; j <= n; j++) {
      if (j <= c - i) {
        final += a;
      } else {
        final += b;
      }
    }
    console.log(final);
  }
}
rightanglerev(6);
