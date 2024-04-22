const user = {
    id: 7,
    name: 'Bob',
    token: 12343423
};
const userLogPass = {
    login: 'Bobby',
    password: 'Bobby123',
  
};
//todo 9.1 Получите из объекта user значение id и разместите его в константу userId не используя выражение user.id.
const {id: identificator} = user
console.log(identificator)
//todo 9.2 Создайте новый объект на базе объекта user без свойства token через деструктуризацию объекта
let {token, ...userTokenLess} = user
console.log(userTokenLess)
//todo 9.3 Заморозьте объект user, так чтобы в него нельзя было добавить свойства.
Object.freeze(user)
user.id = 8;
console.log(user)
//todo 9.4 Создайте на базе объекта user новый объкт с доп. полями login и password
const userPlus = Object.assign(userLogPass, user)
console.log(userPlus)
//todo 9.5 Добавьте к объекту user метод getId который возвращает свойство id
user.getId = function() { return user.id }
//todo 9.6 Добавьте к объекту user метод setId который утанавливает свойство id
user.setId = function(_id) { user.id = _id }
//todo 9.7 Проитерируйте объект user так чтобы при итерации можно было получить его ключ и значение.
for (let key in userPlus) {
console.log(key + ' - ' + userPlus[key])
}
//todo 9.8 Сериализуйте объект в json
let json = JSON.stringify(user)
console.log(json);
//todo 9.8 Преобразуйте объект в ассоциативный массив.
let newArr = JSON.parse(json)
console.log(newArr)




