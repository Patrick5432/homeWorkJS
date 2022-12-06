//Заполните массив числами от 1 до 10 с помощью цикла.
const count = () => {
  let i = 0
  let array = []
  while (i < 10) {
      i++
      array.push(i)
  }
   console.log(array)
  return i
}
count()