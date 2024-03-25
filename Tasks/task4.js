//todo: Задано число. Проверить на  истинность (true или false) что 
// сумма цифр данного трехзначного числа является четным числом. Числа меняются !
// Пример:

let x = 552;

function toDigit (x) {
    return x.toString().split('').map(Number);
}

let dig = toDigit (x);
console.log ((dig[0] + dig[1]+ dig[2]));

if (((dig[0] + dig[1]+ dig[2])%2) === 1){
  console.log('Число нечетное')
} else {console.log('Число четное')}