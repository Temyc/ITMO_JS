
// Домашнее задание ко второму занятию

// var a = 5;
// var b = 7;
// var c = 2;
// if (a < b && a < c) {
//     alert(a);
// } else if (b < c && b < a) {
//     alert(b);
// } else if (c < a && c < b) {
//     alert(c);
// } else {
//     alert ('все числа одинаковы');
// }

// var num = +prompt ('Введите число от -999 до 999','');
// if (num < 0 && num > -10) {
//     alert ('отрицательное однозначное число');
// } else if (num < -9 && num > -100) {
//     alert ('отрицательное двузначное число');
// } else if (num < -99 && num > -1000) {
//     alert ('отрицательное трёхзначное число');    
// } else if (num === 0) {
//     alert ('Нулевое число')
// } else if (num > 0 && num < 10) {
//     alert ('Положительное однозначное число')
// } else if (num > 9 && num < 100) {
//     alert ('Положительное двузначное число')
// } else if (num > 99 && num < 1000) {
//     alert ('Положительное трёхзначное число')
// }

// var num = +prompt ('Введите целое число от 1 до 9','');
// (num === 0)? alert('ноль'):
// (num === 1)? alert('один'):
// (num === 2)? alert('два'):
// (num === 3)? alert('три'):
// (num === 4)? alert('четыре'):
// (num === 5)? alert('пять'):
// (num === 6)? alert('шесть'):
// (num === 7)? alert('семь'):
// (num === 8)? alert('восемь'):alert('девять');

// var num = +prompt ('Введите целое число от 1 до 5','');
// (num === 1)? alert('плохо'):
// (num === 2)? alert('неуд'):
// (num === 3)? alert('уд'):
// (num === 4)? alert('хорошо'):alert('отлично');

// var a = +prompt('введите первое число','');
// var b = +prompt('введите второе число','');
// var c = +prompt('введите третье число','');
// if (a===b || a===c || b===c) {
//     alert('true');
// } else {
//     alert('false');
// }



// //ДОМАШНЕЕ ЗАДАНИЕ К ТРЕТЬЕМУ ЗАНЯТИЮ

// //№1
// var x = prompt ('Введите число x','');
// var y = prompt ('Введите ещё одно число y','');
// if (x < y) {
//     alert(x);
// } else {
//     var z;
//     z = x;
//     x = y;
//     y = z;
//     alert('число x ='+ x);
//     alert('число y =' +y);
// }


// //№2 Пока не сделал.

// //№3
// //Вопрос по задаче - почему достаточно ввести только № месяца, и не нужно прописывать весь месяц целиком?
// // var months = prompt('Введите номер месяца:\n1-Январь;\n2-Февраль;\n3-Март;\n4-Апрель;\n5-Май;\n6-Июнь;\n7-Июль;\n8-Август;\n9-Сентябрь;\n10-Октябрь;\n11-Ноябрь;\n12-Декабрь.');

// switch (months) {
//     case '1':
//     case '2':
//     case '12':
//         alert('Зима!');
//         break;
//     case '3':
//     case '4':
//     case '5':
//         alert('Весна!');
//         break;
//     case '6':
//     case '7':
//     case '8':
//         alert('Лето!');
//         break;
//     case '9':
//     case '10':
//     case '11':
//         alert('Осень!');
//         break;
// }


// //№4
// // var year = prompt('Выберите единицу длины:\n1-дециметр;\n2-километр;\n3-метр;\n4-миллиметр;\n5-сантиметр.');
// // var L = +prompt('Введите длину отрезка в выбранных единицах');

// switch (year) {
//     case '1':
//     alert('Длина в метрах = '+ L*0.1);
//     break;
//     case '2':
//     alert('Длина в метрах = '+ L*1000);
//     break;
//     case '3':
//     alert('Длина в метрах = '+ L);
//     break;
//     case '4':
//     alert('Длина в метрах = '+ L*0.001);
//     break;
//     case '5':
//     alert('Длина в метрах = '+ L*0.01);
//     break;
// }

/*№5 Пользователь вводит строку, необходимо определить 
является ли она палиндромом. (Палиндром - это текст, 
    который читается одинаково и слева, и справа. 
    Примеры для тестирования: 
    1) '49094' – это строка палиндром
    2) 'Я бы изменил мир, но бог не дает исходники' – это строка не палиндром
    3) 'Сел в озере березов лес' – это строка палиндром*/


// var string = prompt('Напишите паллиндром','');
// var pallindrom = string.replace(/\s+/g,'').toLowerCase();
// console.log(pallindrom);//проверка
// var newPallindrom = pallindrom.split("").reverse().join("");
// console.log(string);//проверка
// if (pallindrom === newPallindrom) {
//     alert("это паллиндром");
// } else {
//     alert("попробуйте ещё раз");
// }




// // №6
// //Пользователь вводит год, необходимо определить 
// //является ли он високосным. Примеры данных для тестирования:
//1) '2000' – високосный год
//2) '1800' – не високосный год
// var year = prompt ('Введите любой год от Р.Х.','');
// if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
//     alert ('Введёный вами год ' + year + ' является високосным');
// } else if (year % 4 === 0 && year % 100 !== 0) {
//     alert ('Введёный вами год ' + year + ' является високосным');
// }
//   else  {
//     alert ('Введёный вами год ' + year + ' не високосный');
// }

//№7
//Пользователь вводит количество тарелок и количество 
// моющего средства. Моющее средство расходуется из расчета 0.5 
// на одну тарелку. Вымыть тарелки в цикле. Вывести на экран:
// 1) сколько тарелок осталось, если моющее средство закончилось: 
// 'Моющее средство закончилось. Осталось N тарелок' 
// (где N – заменить на число оставшихся тарелок)
// 2) сколько осталось моющего средства, если тарелки закончились:
// 'Все тарелки вымыты. Осталось N ед. моющего средства' 
// (где N – заменить на число оставшегося моющего средства)
// 3) если мы помыли все тарелки и моющее средство закончилось, 
// то вывести: 'Все тарелки вымыты, моющее средство закончилось'

// var plate = prompt ('Введите количество тарелок','');
// var cleaner = prompt ('Введите количество моющего средства','');
// while (plate > 0 && cleaner > 0) {
//     plate = plate - 1;
//     cleaner = cleaner - 0.5;
//     console.log(plate);
//     console.log(cleaner);
    
// }
// if (plate <= 0 && cleaner <= 0) {
//     alert ('Все тарелки вымыты и моющее средство закончилось');
// }else if (plate === 0 && cleaner > 0) {
//     alert('Тарелки вымыты, но осталось ' + cleaner.toFixed(1) + ' единиц моющего средство');
// }else if (plate > 0 && cleaner <= 0) {
//     alert('осталось ' + plate + ' тарелок, моющее средство закончилось');
// }



//ДОМАШНЕЕ ЗАДАНИЕ К 3.05.2018 (ЧЕТВЕРТОМУ ЗАНЯТИЮ)

// №1
// Дана строка, изображающая целое число. Вывести сумму цифр этого числа.
// var str = prompt('Введите целое число','');
// var arr = str.split('');
// console.log(arr);
// var summ = 0;
// for(var i=0;i<arr.length;i++) {    
//     summ = summ + +arr[i];
//     console.log(summ);
// } alert('Сумма цифр введённого числа = '+ summ);

//№2
// Дана строка S и символ C. Удвоить каждое вхождение символа C в строку S.
// var str = prompt('Введите строку содержащую буквы с','');
// var str1 = str.replace(/с/g,"cc");
// alert(str1);

//№3 ВОПРОС - как исключить пробел в данном выражении.
// Проверить что введенный пароль удовлетворяет 
// следующим условиям сложности:
// 	- длинна от 9 символов;
// 	- содержит обязательно английские буквы верхнего 
// 	и нижнего регистра;
// 	- содержит более двух цифр;
// 	- содержит обязательно один из неалфавитных 
// 	символов (например, !, $, #, %).

// var password = prompt ('Введите пароль содержащий маленькие и большие буквы латинского алфавита,более 2х цифр и символы !,$,#,%','');
// var reg = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!$#%]).{9,})/g;
// console.log(password.match(reg));
// if (password.match(reg)!==null) {
//     alert ('Пароль введён корректно');
// } else {
//     alert ('Попробуйте ещё раз!');
// }





//упражнения для циклов

// for (i=2;i<=10;i++) {
//     if (i%2==0) alert(i);
// }

// var i = 0;
// while (i<3) {
//     alert ("номер " + i + "!" );
//     i++;
// }

//Не совсем правильный вариант
// var num = +prompt('Введите число больше 100','');
// while (num<100){
//     num = +prompt('Введите число больше 100','');
// } 

//Правильный вариант
// var num;
// do {
//     num = prompt('Введите число больше 100','');
// } while (num <= 100 && num != null);


// nextPrime:
//   for (var i = 2; i <= 10; i++) {
//       for (var j = 2; j < i; j++) {
//           if( i % j == 0) continue nextPrime;           
//       } alert(i);
//     } 

 
// var a = +prompt('a?', '');
// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert(2 + 'или' + 3);
//         break;
// }


// var sum = 0;
// var i = 1;
// while (i<=100) {
//     sum = sum + i;
//     i++;
// }
// alert(sum);


// var num = prompt('input a number','');
// if (num>0) {
//     alert(1);
// } else if (num<0) {
//     alert(-1);
// } else { 
//     alert(0);
// }

// var name = prompt('Who are you?', '');
// if (name == 'Admin') {
//     var pass = prompt ('input password',''); 
//     if (pass =='Dark master') {
//         alert ('Welcome!');
//     } else if (pass == null) {
//         alert ('Вход отменен');
//     } else {
//         alert ('Пароль неверен');
//     }
// }   else if (name == null) {
//     alert ('Ввод отменён');
// }   else {
//     alert ('я вас не знаю!');
// }

// result = (a + b < 4) ?  'Мало': 'Много';

// var message = (login == 'Вася') ? 'Привет' :
//     (login == 'Директор') ? 'Здравствуйте' :
//     (login == '') ? 'нет логина' : ''





