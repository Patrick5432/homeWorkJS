//Дан массив с числами. Найдите среднее арифметическое его элементов.
array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = 0
for (let i = 0; i <= array.length - 1; i++) {
  result = result + array[i] / array.length
}
console.log(result)