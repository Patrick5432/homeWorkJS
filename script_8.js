//Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
const count = () => {
    let i = 10
    let massive = 0
    while (i >= 0) {
        massive = massive + i
        i--
    }
    console.log(massive)
    return i
}
count()