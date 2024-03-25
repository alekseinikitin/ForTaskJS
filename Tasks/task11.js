//todo: Задан произвольный url необходимо получить router, action и id

router: context
action: detail
id: 19677670

let url = "http://www.ozon.ru/context/detail/id/19677670/";
let url2 = url.split ('/');
console.log(url2);
console.log(url2.slice(3,4));
console.log(url2.slice(4,5));
console.log(url2.slice(6,7));