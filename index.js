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
function getMax(mas) {
  let max = 0;
  for (let i = 0; i < mas.length; i++) {
    if (mas[i] > max) {
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
function getMin(mas) {
  let min = 0;
  for (let i = 0; i < mas.length; i++) {
    if (mas[i] < min) {
      min = mas[i];
    }
  }
  return min;
}

console.log(getMax(mas));
console.log(getMin(mas));


// task2 
/*
Дан массив arr. \
Найдите среднее арифметическое его элементов. 
Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
*/
const arr = [12, 15, 20, 25, 59, 79];
/**
 * get average of numbers
 * @param {Array numbers} mas
 * @returns {number}
 */
function getAverage(mas) {
  let average = 0;
  for (let i = 0; i < mas.length; i++) {
    average += mas[i];
  }
  return average / mas.length;
}
console.log(getAverage(arr));


// task3
/*
Выведите на экран случайное целое число от 1 до 100.
Заполните массив 10-ю случайными целыми числами. 
*/

console.log(Math.round(Math.random()*100));