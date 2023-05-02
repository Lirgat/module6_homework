function SimpleNumFunc(num) {
    if ((num < 2) || (num > 1000)) {
        return 'Данные не верны!';
    } else {
        for (i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }   
        return true;
    }
}

let randNum = Math.floor(Math.random()*2000);
let endNum = SimpleNumFunc(randNum);
console.log('Число ' + randNum + ' является простым = ' + endNum);