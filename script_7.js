//Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
const count = () => {
    let i = 10
    let massive = ''
    while (i >= 0){
        if (i == 5) {
            console.log('True')
            return i
        }
        else {
            console.log('False')
            i--
        }
    }
    return i
}
count()