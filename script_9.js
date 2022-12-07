//Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = 0
for (let i = 0; i <= array.length - 1; i++) {
  result = array[i]**2 + result
}
console.log(result)