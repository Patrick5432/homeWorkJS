////Выведите с помощью цикла столбец чисел от 1 до 100.
const count = () => {
    let i = 0
    while (i <= 100) {
        console.log(i)
        ++i
    }
    return i
}
count()