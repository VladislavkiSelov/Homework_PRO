let num = [3, 5, 11, 22, 55]
for(let i =0; i<num.length; i++){
    console.log(num[i]**2)
};

let country = {
Kiev: `Ukraine`,
London: `England`,
Tallinn: `Estonia`
};

for(let key in country){
    console.log(`${key} is ${country[key]}`)
};

let arr = [2, 6, 5, 9, 15, 0, 10, 4];

for(let i=0; i<arr.length; i++){
    if( arr[i]>4 && arr[i]<11)
    console.log(arr[i])
};