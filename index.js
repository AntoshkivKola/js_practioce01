//task1
/*
Даны числа 4, -2, 5, 19, -130, 0, 10. 
Найдите минимальное и максимальное число.
*/

const mas = [4, -2, 5, 19, -130, 0, 10];

/**
 * get max element
 * @param {Array numbers} mas
 * @returns {number}
 */
function getMax(mas){
  let max = 0;
 for(let i = 0;i <= mas.length ;i++){
   if(mas[i] > max){
    max = mas[i];
   }
 }
 return max;
}

/**
 * get min element
 * @param {Array numbers} mas
 * @returns {number}
 */
function getMin(mas){
  let min = 0;
 for(let i = 0; i <= mas.length ;i++){
   if(mas[i] < min){
    min = mas[i];
   }
 }
 return min;
}

console.log(getMax(mas));
console.log(getMin(mas));