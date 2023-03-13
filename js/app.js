let sonlar = [75, 85, 90];
let yigindi = 0;
for (let i = 0; i < sonlar.length; i++) {
  yigindi += sonlar[i];
}
let orta_arifmetik = yigindi / sonlar.length;

console.log(orta_arifmetik.toFixed(2));

function arifmetikProgressiya(a1, d, n) {
  let an = a1 + (n - 1) * d;
  return an;
}

let a5 = arifmetikProgressiya(2, 3, 5);
console.log(a5);

function geometrikProgressiya(a1, r, n) {
  let an = a1 * Math.pow(r, n - 1);
  return an;
}

let a4 = geometrikProgressiya(2, 3, 4);
console.log(a4);

function uchburchakPerimetri(a, b, c) {
  if (a === c && a === b && c === b) {
    let perimetri = a + b + c;
    return perimetri;
  }
  if (a === c || a === b || c === b) {
    let perimetri = a + b + c;
    return perimetri;
  }
  if (a !== c && a !== b && c !== b) {
    let perimetri = a + b + c;
    return perimetri;
  }

  console.log(perimetri);
}
