//Дан массив с числами. Найдите среднее арифметическое его элементов.
const count = () => {
    let i = 10
    let a = i
    let massive = 0
    while (i >= 0) {
        massive = massive + i / a
        i--
    }
    console.log(massive)
    return i
}
count()