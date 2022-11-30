//Заполните массив числами от 1 до 10 с помощью цикла.
const count = () => {
    let i = 0
    let massive = ''
    while (i < 10) {
      massive = `${massive} ${++i}`
    }
     console.log(massive)
    return massive
  }
  count()