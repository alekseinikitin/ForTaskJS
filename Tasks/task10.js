//todo:  Задан произвольный url необходимо получить его домен.

Пеример:
var url = "http://www.ozon.ru/context/detail/id/19677670/"

let url2 = url.split ('/');
console.log(url2);
console.log(url2.slice(2,3));
