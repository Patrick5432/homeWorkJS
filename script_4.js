//Заполните массив 10-ю иксами с помощью цикла.
const count = () => {
    let array = []
    let i = 0
    while (i <= 10) {
        i++
        array.push('x')
    }
    console.log(array)
    return i
}
count ()