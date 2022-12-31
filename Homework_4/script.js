function sum(){
let res = 0;
return function (y){
    res += y;  return  res;
}
}

let add = sum();
console.log(add(3))
console.log(add(5))
console.log(add(20))


const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array){
  return array.splice(4,1)
}
removeElement(array)
console.log(array)



