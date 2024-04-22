// todo: решить Задача 2 см. lesson9.pdf

// исходный код
class Car {
    constructor (f) {
             this.fuel = f
         console.log('Машина готова. Бак заправлен на ' + this.fuel  + ' л.')
    }
    
     trip(km) {
            let fuelConsumption = km / 100 * 13
            let remainingFuel = this.fuel - fuelConsumption
         
            console.log('Пройдено ' + km + ' км.')
       console.log('Остаток в баке ' + remainingFuel + ' л.')
    
    }
    }
    let lexusRx = new Car(100)
    lexusRx.trip(200)