function sum(x) {
    return function (y){
    return x + y
}
}
let add = sum(0)
console.log(add(3))
console.log(add(5))
console.log(add(20))