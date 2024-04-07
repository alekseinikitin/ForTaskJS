//todo: Определить, является ли строка полиндромом. Палиндром - это число или слова, читающиеся одинаково в обоих направлениях. 

function isPonindrom(x) {

    let remoSpace = x.split(" ").join("").toLowerCase();;
        
        let length = remoSpace.length;
        var midle = Math.floor(length/2);
    
        for ( var i = 0; i < midle; i++ ) {
            if (remoSpace[i] !== remoSpace[length - 1 - i]) {
                return false;
            }
        }
    
        return true;
    }
     
    console.log(isPonindrom('потоп'));
    console.log(isPonindrom('мадам'));
    console.log(isPonindrom('комок'));
    console.log(isPonindrom('Уж истово вот сижу'));