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
arr1.unshift(4,5,6);
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
let arr6 = arr5.slice(0,3);
console.log(arr6);
//8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
arr6 = arr5.slice(3);
console.log(arr6);

//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
arr6 = [1, 2, 3, 4, 5];
arr6.splice(1,2);
console.log(arr6);
//10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
arr6 = [1, 2, 3, 4, 5];
arr7 = arr6.splice(1,3);
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