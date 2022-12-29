// Задание №1
const amount = 4;
const valueToFill = 'hello';
function fillArray(amount, valueToFill){
let add=[]
for(let i = 0;i<amount;i++){
    add.push(valueToFill)
}
return[add]
}
console.log(fillArray(amount, valueToFill))


// // Задание №2 (НЕ ПОНИМАЮ ЧТО Я ДЕЛАЮ НЕ ТАК, ПРОГРАММА НЕ РАБОТАЕТ, МОЖНО РЕШЕНИЕ?)
let obj = {
  width: 10, 
  height: 5,
  title: 'Test Array',
  count: 4
}


function multiplyNumeric(){
  let values = Object.values(obj)
  values.forEach(value => {
    if (typeof value === 'number'){'number'**2}})
    // if(typeof multiplyNumeric()=== "object"){
    //   console.log('Yes')
    //  }else{
    //   console.log('No')}
  return  values}

  let result = multiplyNumeric(obj)

console.log(result)



// function multiplyNumeric(obj){
//   let values = Object.values(obj)
//   values.forEach(value => {
//     if (typeof value === 'number'){'number'**2}})
//     return  values}

// console.log(multiplyNumeric(obj))

// let a = 1;
// let b = 2;

// function sum(a ,b){
//   let ppp = a + b;
//   result=ppp
// }

//  let rrr= sum()

// console.log(rrr)