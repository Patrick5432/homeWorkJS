//Дан массив с числами. Найдите среднее арифметическое его элементов.
const count = () => {
    let i = 10
    let a = i
    let array = 0
    while (i >= 0) {
        array = array + i / a
        i--
    }
    console.log(array)
    return i
}
count()