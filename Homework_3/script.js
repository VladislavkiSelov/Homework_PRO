// Задание №1
const amount = 4;
const valueToFill = 'hello';
function fillArray(amount, valueToFill) {
  let add = []
  for (let i = 0; i < amount; i++) {
    add.push(valueToFill)
  }
  return add
}
console.log(fillArray(amount, valueToFill))



let obj = {
  width: 10,
  height: 5,
  title: 'Test Array',
  count: 4
}

function multiplyNumeric() {
  for (let yyy in obj){
  if (typeof obj[yyy] === 'number'){obj[yyy] **= 2}}
}
multiplyNumeric(obj)
console.log(obj)


