//todo: Написать функцию анаграммы

function isAnagram(x, y) {
    if (x.length !== y.length) { return false; }

   let str1 = x.split('').sort().join('');
   let str2 = y.split('').sort().join('');
   let result = (str1 === str2);
   return result;
}

console.log(isAnagram('finder', 'friend'));
console.log(isAnagram('test', 'sets'));
console.log(isAnagram('abc', 'aaa'));
console.log(isAnagram('abb', 'aab'));
// 'finder', 'friend' === true
// 'test', 'sets' === false
// 'abc', 'aaa' === false
// 'abb', 'aab' === false