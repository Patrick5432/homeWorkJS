//Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
const count = () => {
    let i = 100
    let massive = ''
    while (i > 0) {
        i--
        if (i <= 10) {
            massive = `${i} ${massive}`
        }
    }
    console.log(massive)
    return i
  }
  count()