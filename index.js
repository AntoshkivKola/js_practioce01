//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
arr1.reverse();
console.log(arr1);

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
arr1.reverse();
arr1.push(4, 5, 6);
console.log(arr1);

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
arr1.unshift(4,5,6);
console.log(arr1);