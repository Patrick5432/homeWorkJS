//Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
const count = () => {
    let i = 10
    let array = 0
    while (i >= 0) {
        array = array + i
        i--
    }
    console.log(array)
    return i
}
count()