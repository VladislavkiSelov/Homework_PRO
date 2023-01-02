// Задание №1
const amount = 4;
const valueToFill = 'hello';
function fillArray(amount, valueToFill){
let add=[]
for(let i = 0;i<amount;i++){
    add.push(valueToFill)
}
return add
}
console.log(fillArray(amount, valueToFill))


// // // Задание №2 (НЕ ПОНИМАЮ ЧТО Я ДЕЛАЮ НЕ ТАК, ПРОГРАММА НЕ РАБОТАЕТ, МОЖНО РЕШЕНИЕ?)
// let obj = {
//   width: 10, 
//   height: 5,
//   title: 'Test Array',
//   count: 4
// }


// function multiplyNumeric(){
//   let values = Object.values(obj)
//   values.forEach(function(item){
//     if (typeof item  === 'number'){'number'**2}})
//   return  values
// }

//  multiplyNumeric(obj)
//   console.log(obj)



// // Задание №2 (НЕ ПОНИМАЮ ЧТО Я ДЕЛАЮ НЕ ТАК, ПРОГРАММА НЕ РАБОТАЕТ, МОЖНО РЕШЕНИЕ?)
let obj = {
  width: 10, 
  height: 5,
  title: 'Test Array',
  count: 4
}


function multiplyNumeric(){
  let obj_final={}
  let keys = Object.keys(obj)
  for(let key = 0;key<keys.length; key++){
  
 }
  let values = Object.values(obj)
  for(let key = 0;key<values.length; key++){
    
 }

 console.log(obj_final)
 return obj_final
}
 multiplyNumeric(obj)
  console.log(obj)


