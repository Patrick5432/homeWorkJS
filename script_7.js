//Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
const count = () => {
    let i = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    let y = 0
    while (y >= 0){
        if (i[y] == 5) {
            console.log('True')
            return y
        }
        else {
            console.log('False')
            y++
        }
    }
    return y
}
count()