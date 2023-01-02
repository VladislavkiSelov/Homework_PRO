// let a = 10;
// if (a === 10) { console.log('Yes') }
// else { console.log('No') }

// let sss = 59;
// if (sss >= 0 && sss <= 14) { console.log('1') }
// if (sss >= 15 && sss <= 30) { console.log('2') }
// if (sss >= 31 && sss <= 45) { console.log('3') }
// if (sss >= 46 && sss <= 60) { console.log('4') }


// let lang = 'ru'
// if (lang === 'ru') {
//     let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
//     console.log(arr)
// }
// if (lang === 'en') {
//     let arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']
//     console.log(arr)
// }

// let a = 3;
// if (a === 0){console.log('верно')}
// else{console.log('неверно')}


// let a = 0;
// if (a > 0){console.log('верно')}
// else{console.log('неверно')}


// let a = -3;
// if (a < 0){console.log('верно')}
// else{console.log('неверно')}



// let a = 0;
// if (a >= 0){console.log('верно')}
// else{console.log('неверно')}


// let a = 0;
// if (a <= 0){console.log('верно')}
// else{console.log('неверно')}




// let a = 0;
// if (a === 0){console.log('верно')}
// else{console.log('неверно')}



// let a = 'test';
// if (a === 'test'){console.log('верно')}
// else{console.log('неверно')}


// let a = '1';
// if (a === 1 && typeof 'string'){console.log('верно')}
// else{console.log('неверно')}

// let test = false;
// if(test === true){console.log('верно')}
// else{console.log('неверно')}


// let test = true;
// if(test !== true){console.log('верно')}
// else{console.log('неверно')}


// let a = 2;
// if (a>0 && a<5 ){console.log('верно')}
// else{console.log('неверно')}



// let a = 10;
// if (a === 0 || a === 2){a+=7}
// else{a/=10 }
// alert(a)



// let a = 3;
// let b = 5;
// if (a<=1 && b>=3){console.log(a+=b)}
// else{console.log(a-=b)}

// let a = 3;
// let b = 6;
// if (a>2 && a<11 || b>=6 && b<14){console.log('верно')}
// else{console.log('неверно')}


// let sss = 7;
// if (sss>0 && sss<10){console.log('1')}
// if (sss>11 && sss<20){console.log('2')}

// if (sss>21 && sss<31){console.log('3')}


// let month = 12;
// if (month === 12|| month === 1 || month === 2){console.log('Зима')}
// if (month>=3 && month<6){console.log('Весна')}
// if (month>=6 && month<=8){console.log('Лето')}
// if (month>=9 && month<12){console.log('Осень')}


// let  aaa = 'abcde';
// if(aaa[0] === 'a'){
//     console.log('YES')
// }else{ console.log('NO')}


// let  aaa = '12345';
// if(aaa[0] >= '1' && aaa[0] <= '3'){
//     console.log('YES')
// }else{ console.log('NO')}


// let str = '123';
// let sum = 0;
// for (let i = 0; i < str.length; i++) {
// sum +=+str[i];
// }
// console.log(sum)

// let str = '123123';
// let sum = 0;
// let sum2 = 0;
// for (let i = 0; i < str.length/2; i++) {
// sum +=+str[i];
// sum2 += +str[i + str.length / 2];
// }
// console.log(sum)
// console.log(sum2)

// if(sum === sum2){console.log('yes')
// }else{console.log('no')}

//--------------------------------------------------------------------- ЦЫКЛЫ----------------------------------------------------------------------------------------

// 1) Выведите столбец чисел от 1 до 100.

// for (let i=1;i<=100;i++){
//     console.log(i)
// }

// 2) Выведите столбец чисел от 11 до 33.

// for (let i=11;i<=33;i++){
//     console.log(i)
// }

// 3)  Выведите столбец четных чисел в промежутке от 0 до 100.
// for (let i = 0; i <= 100; i += 2) {
//     console.log(i)
// }

// 4) С помощью цикла найдите сумму чисел от 1 до 100.
// let y = 0;
// for(let i = 0; i <= 100; i++){
//     y+=i
// }
// console.log(y)

// 5) Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

// let yyy = [1, 2, 3, 4, 5];
// for (i = 0;i<yyy.length;i++){
//     console.log(yyy[i])
// }

// 6) Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
// let yyy = [1, 2, 3, 4, 5];
// let result = 0;
// for (i = 0; i < yyy.length; i++) {
//     result += yyy[i]
// }
// console.log(result)

// 7)  Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
// let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}
// for(let key in obj){ console.log(`${key} => ${obj[key]}`)}

// 8) Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.
// let a = {Коля: '200', Вася: '300', Петя: '200'};
// for(let i in a){console.log(`${i} зарплата ${a[i]} долларов`)}

// 9) Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
// let masf =[2, 5, 9, 15, 0, 4]
// for(i=0;i<masf.length;i++){
//     if (masf[i]>=3 && masf[i]<=10 ){
//         console.log(masf[i])
//     }
// }


// 10) Дан массив с числами.Числа могут быть положительными и отрицательными.Найдите сумму положительных элементов массива.
// let masf = [2, 5, -9, 15, 6, -4]
// let res = 0;
// for (i = 0; i < masf.length; i++) {
//     if (masf[i] > 0) {
//         res+=masf[i]}
// }

// console.log(res)

// 11) Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 
// 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// let masf = [ 1, 2, 5, 9, 4, 13, 4, 10]
// for(i = 0; i < masf.length; i++){
// if (masf[i]===4){
//     console.log('Есть!');
//     break;
// }
// }


// 12) Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let masf = [10, 20, 30, 50, 235, 3000];
// for(i = 0; i < masf.length; i++){
//     let o = String(masf[i])
//     let g = o[0] 
//     if(g == 1 || g == 2 || g == 5){
//         console.log(o)
//     }
// }

// 13)  Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-
// let masf= [1, 2, 3, 4, 5, 6, 7, 8, 9.]
// let r = '-';
// for(i = 0; i < masf.length; i++){
//    r+=masf[i]+'-'
// }
// console.log(r)
