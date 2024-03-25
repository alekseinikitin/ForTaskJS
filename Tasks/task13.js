//todo: В массиве размерности 10, найти минимальный и максимальный элементы, поменять их местами.
let array = ['18', '32', '657', '782', '118', '312', '6157', '7182', '98', '11'];

array.sort(function (a, b) {
    return a - b;
});

let x = (array.slice('0','1'));
console.log(x);

array.sort(function (a, b) {
    return b - a;
});

let y =  (array.slice('0','1'));
console.log(y);

temp = x;
x = y;
y = temp

console.log(x,y);