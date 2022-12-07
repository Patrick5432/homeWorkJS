//Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
const count = () => {
    let i = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let y = 0
    let j = 0
    let array = []
    const a = `${i.length - 1}`
    while (y <= a) {
      j = j + i[y]
      y++
    }
    array.push(j)
    console.log (array)
    return y
  }
  count()