let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, null, 'joker', 9, 10];
function NumFuncEvenOdd(arr) {
   let Even = 0;
   let Odd = 0;
   let Another = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
            Another++;
        }   
            else {
                if (arr[i] % 2 === 0){
                    Even++;
                }
                    else {
                        Odd++;
                    }
            }
    }
    return [Even, Odd, Another];
}
let result = NumFuncEvenOdd(arrNum);
console.log('Чётных чисел ' + result[0]);
console.log('Нечётных чисел ' + result[1]);
console.log('Других типов ' + result[2]);