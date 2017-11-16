let FnTa = [];
for (let b = 1; b <= 10; b++) {
    const x = Number(prompt('Номер варіанту 15-30\n'+'Введіть значення:' + b + '\n(Якщо десяткове число то через КРАПКУ!)'));
    FnTa.push(x);
}
let wk = Math.PI/2;
let N = 1;
let A = 0, j = 0, B = 0;
function truhinometriaA(N) {
    for (let i = 0; i <= 9; i++) {

        A = A + FnTa[i] * Math.cos(N * wk * j);
        j = j + 0.1;
    }
    return A;
}
function truhinometriaB(N) {
    for (let i = 0; i <= 9; i++) {

        B = B + FnTa[i] * Math.sin(N * wk * j);
        j = j + 0.1;
    }
    return B;
}
function rez() {
    return Math.sqrt(Math.pow(A, 2) + Math.pow(B, 2));
}
for (N = 1; N <= 9; N++) {
    document.write(N + '<br>');
    document.write('A=' + truhinometriaA(N) + '<br>');
    document.write('B=' + truhinometriaB(N) + '<br>');
    document.write('<b> REZ=' + rez() + '</b>' + '<br>' + '<br>' + '<br>');
}
