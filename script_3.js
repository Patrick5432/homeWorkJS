////Выведите с помощью цикла столбец четных чисел от 1 до 100.
const count = () => {
    let i = 0
    while (i <= 100) {
        if (i % 2 === 0) {
            console.log(i)
        }
        i++
    }
    return i
}
count()