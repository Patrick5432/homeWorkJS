//Заполните массив 10-ю иксами с помощью цикла.
const count = () => {
    let massive = 0
    let char = 'x'
    while (massive <= 10) {
        ++massive
    }
    console.log(char.repeat(massive))
    return
}
count ()