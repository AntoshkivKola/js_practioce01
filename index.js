//1.Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

//2.Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
arr1.reverse();
console.log(arr1);

//3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
arr1.reverse();
arr1.push(4, 5, 6);
console.log(arr1);
//4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
arr1.unshift(4, 5, 6);
console.log(arr1);

//5.  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
let arr4 = ['js', 'css', 'jq'];
console.log(arr4);
console.log(arr4.shift());
console.log(arr4);
//6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
arr4 = ['js', 'css', 'jq'];
console.log(arr4);
console.log(arr4.pop());
console.log(arr4);

//7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
const arr5 = [1, 2, 3, 4, 5];
let arr6 = arr5.slice(0, 3);
console.log(arr6);
//8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
arr6 = arr5.slice(3);
console.log(arr6);

//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
arr6 = [1, 2, 3, 4, 5];
arr6.splice(1, 2);
console.log(arr6);
//10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
arr6 = [1, 2, 3, 4, 5];
arr7 = arr6.splice(1, 3);
console.log(arr7);
//11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
arr6 = [1, 2, 3, 4, 5];
arr6.splice(3, 0, 'a', 'b', 'c');
console.log(arr6);
//12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
arr6 = [1, 2, 3, 4, 5];
arr6.splice(1, 0, 'a', 'b');
arr6.splice(6, 0, 'c');
arr6.splice(8, 0, 'e');
console.log(arr6);

//13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
arr6 = [3, 4, 1, 2, 7];
arr6.sort();
console.log(arr6);

//14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
obj1 = { js: 'test', jq: 'hello', css: 'world' };
arr6 = Object.keys(obj1);
console.log(arr6);

// advanced 
/* 
необходимо создать функцию hasElem, 
которая параметрами будет принимать массив и строку, 
и возвращать true, если строка есть в массиве, 
и false - если нет
*/

/**
 * function checks if there is such a string in the array
 * @param {Array} arr
 * @param {string} string
 * 
 * @returns {bullean}
*/
function hasElem(arr, string) {
  for (let i = 0; i < arr.length; i++) {
    if (string === arr[i]) {
      return true;
    }
  }
  return false;
}

/* 
Дан массив с числами. 
Проверьте, что в этом массиве есть указанное число. 
Если есть - вернуть true, а если нет - вернуть false.
*/

/**
 * function checks if there is such a number in the array
 * @param {Array numbers}  arr
 * @param {number} number
 * 
 * @returns {bullean}
*/
function hasElemNumber(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (number === arr[i]) {
      return true;
    }
  }
  return false;
}

/* 
Дан массив с числами.
Проверьте, есть ли в нем два одинаковых числа подряд.
Если есть -  вернуть true, а если нет - вернуть false.
*/

/**
 * function checks has two identical numbers in a row
 * @param {Array numbers}  arr
 * 
 * @returns {bullean}
*/
function hasTwoIdenticalNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      return true;
    }
  }
  return false;
}

let arr34 = [1,5.8,4,4,7,9,8];
console.log(hasTwoIdenticalNumbers(arr34));