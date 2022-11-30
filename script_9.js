//Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
const count = () => {
    let i = 10
    let massive = 0
    while (i >= 0) {
        massive = massive + i**2
        i--
    }
    console.log(massive)
    return i
}
count()