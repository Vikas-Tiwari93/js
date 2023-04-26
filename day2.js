// 1:check if a is number
// 2:check if a >0
//

export function invertedtriangle(a) {
  if (typeof a !== 'number' || a < 1) {
    console.log('enter a valid number');
  } else {
    for (let i = a; i >= 1; i--) {
      let b = '';
      let lines = document.createElement('p');
      let me = document.getElementById('me');

      for (let j = 1; j <= i; j++) {
        b += '*';
      }
      lines.innerText = b;
      me.appendChild(lines);
    }

    a -= 1;
  }
}

export function square(a) {
  if (typeof a !== 'number' || a < 1) {
    console.log('enter a valid number');
  } else {
    for (let i = 1; i <= a; i++) {
      let lines = document.createElement('p');
      let me = document.getElementById('me');
      let b = '';

      for (let j = 1; j <= a; j++) {
        b += '*';
      }
      lines.innerText = b;
      me.appendChild(lines);
    }
  }
}

export function invertedtrianglenum(a) {
  if (typeof a !== 'number' || a < 1) {
    console.log('enter a valid number');
  } else {
    let c = 0;
    for (let i = a; i >= 1; i--) {
      let b = '';
      c = c + 1;
      console.log('i am c', c);

      let lines = document.createElement('p');
      let me = document.getElementById('me');

      for (let j = c; j <= a; j++) {
        b += String(j);
        console;
      }

      lines.innerText = b;
      me.appendChild(lines);
    }

    a -= 1;
  }
}
