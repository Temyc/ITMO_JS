
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
// //var pass = password.replace(/ /g,"");
// var reg = /((?!.*\s)(?=.*\d{3,})(?=.*[a-z])(?=.*[A-Z])(?=.*[!$#%])(?=.*\S).{9,})/g;
// console.log(password.match(reg));
// if (password.match(reg)!==null) {
//     alert ('Пароль введён корректно');
// } else {
//     alert ('Попробуйте ещё раз!');
// }


//ДОМАШНЕЕ ЗАДАНИЕ К 5.05.2018 (ПЯТОМУ ЗАНЯТИЮ):
//№1
// Заданы два массива A = [ 12, 4, 3, 10, 1, 20 ]  B = [-3, -7, -100, -33] 
// необходимо их объединить в один массив C добавив массив B в конец(в начало) A.

// var a = [ 12, 4, 3, 10, 1, 20 ];
// var b = [-3, -7, -100, -33];
// var c = a.concat(b); // var c = b.concat(a);
// console.log (c); 
// alert (c);

// №2
// Одномерным массивом задана доска 3 на 3 var area = [ null, null, null, null, null, null, null, null, null ]
// Необходимо сформировать игровое поле состоящее из квадратов для крестиков-ноликов  в HTML.
// При появлении в массиве 0-ля рисовать нолик , 1-цы крестик.
// Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.


// // №3 
// // Задан массив  - [12,4,3,10,1,20]. Удалить из него наименьшее и наибольшее значение.
// var arr = [12,4,3,10,1,20];
// var min = arr[0];
// var max = arr[0];
// for (i=0;i<arr.length;i++) {
//     if (arr[i] < min) { 
//         min = arr[i];        
//     }    
//     if (arr[i]>max) { 
//         max = arr[i];
//     }
// }
// min = arr.indexOf(min); // либо var min = arr.indexOf(Math.min(...arr));
// arr.splice(min, 1);
// max = arr.indexOf(max); // либо var max = arr.indexOf(Math.max(...arr));
// arr.splice(max, 1);
// console.log(arr);

// №4 
//Задан массив - [12,4,3,10,1,20]. Необходимо отсортировать его в порядке возрастания, при этом не использовать 
//готовый метод sort и методы разобранные на занятии. Снабдите комментариями каждую строку.
// var arr = [12,4,3,10,1,20];

//    for (var i=0;i<arr.length;i++) {
//     for (var j=0;j<arr.length;j++) {
//         if (arr[i] < arr[j]) {        //сравниваем попарно элементы массива, сначала arr[0], т.е.arr[i] со всеми 
//             var sort = arr[i];        //элементами массива т.е. с arr[j]. Затем arr[1] со всеми элементами и т.д.
//             arr[i] = arr[j];          //если arr[i] меньше arr[j], меняем их местами.
//             arr[j] = sort;
//             console.log(arr);
//         } 
//     }
//    }   
//   //console.log(arr);



//ДОМАШНЕЕ ЗАДАНИЕ К 8.05.2018 ШЕСТОМУ ЗАНЯТИЮ)

// // № 1
// // Построить объект студент со свойствами: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
// // Написать отдельную функцию, которой передается объект студент, а она выводит его содержимое. 
//
// var student = {
//     name: 'Вася',
//     surname: "Ivanov",
//     age: 19,
//     interests: ['sport', 'reading', 'walking', 'talking'],
//     university: 'SPbSU'
// } 
// function showStudentsItems (object) {
//     for (var key in object) {
//         if ( typeof  object[key] === 'object' && object[key] instanceof Object) {            
//             for (i=0;i<object[key].length;i++){
//                 console.log('Свойство студента ' + key + ' содержит ' + object[key][i]);
//             }
//         } else {
//             console.log("Свойство студента " + key + " содержит " + object[key]);
//         }          
//     }      
// }
// showStudentsItems (student);

// № 2 Заданы два массива A и B необходимо их объединить в один массив C так, чтобы в массиве остались уникальные 
// (неповторяющиеся) элементы. Например: A = [1,2], B = [2,3] получим С = [1, 2, 3].

// a = [1,2,3,2]; 
// b = [2,3];
// c = a.concat(b);
// console.log(c);
// for(i=0;i<c.length;i++) {
//     for(j=i+1;j<c.length;j++){
//         if (c[i]===c[j]){
//             c.splice(j,1);
//             j--;
//         } 
//     }
// }console.log(c);

// № 3
// Написать отдельную функцию, которая выводит пользователю заданное число чисел Фибоначчи. 
// (например, первых 8 чисел Фибоначчи:  1, 1, 2, 3, 5, 8, 13, 21). Заданное число передается функции
// в качестве аргумента. 
// function fib(n) {
//     mass = [1,1];    
//     var a = 1;
//     var b = 1;
//     if (n<=1){
//        return n;
//     } else {
//         for (var i=3;i<=n;i++) {        
//         var c = a + b;
//         mass.push(c);
//         a = b;    
//         b = c;          
//         }
//     return mass;
//     }
// }
// alert( fib(0) ); // 1,1,2
// alert( fib(8) ); // 1,1,2,3,5,8,13,21


// № 4 

// ДОМАШНЕЕ ЗАДАНИЕ К 10.05.2018 (СЕДЬМОМУ ЗАНЯТИЮ)
// № 1 Построить объект студент:   
//    - свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
//    - метод выводящий в консоль биографическую справку в виде, например: 
//      «Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО.

// var student = {
//     name: 'Иван',
//     surname: "Петров",
//     age: 21,
//     interests: ['программирование', 'музыка', 'анимэ',],
//     university: 'ITMO',
//     biography: function() {
//         console.log(this.name +' '+ this.surname +' '+ this.age +' год. Интересы: '+ this.interests +'. Учится в '+ this.university);                 
//         }

// }
// student.biography();


// № 2 Написать функцию вычисляющую факториал числа с использованием рекурсии.
// Факториал числа - это число, умноженное на себя минус один, затем на себя минус два и так далее, до единицы.
//  Обозначается n! Определение факториала можно записать как: 
// n! = n * (n - 1) * (n - 2) * ...*1
// 2! = 2 * 1
// 3! = 3 * 2 * 1

// function factorial (n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         var fac;
//         fac = n * factorial(n-1);
//         return fac;
//     }
// }
// console.log(factorial (6));


// № 3 Сделайте функцию, каждый вызов который будет генерировать случайное число от 1 до 100, 
// но так, чтобы оно не повторялось, пока не будут перебраны все числа из этого промежутка. 
// Решите задачу через замыкания - в замыкании должен храниться массив чисел, которые уже были сгенерированы функцией.  

// function getRandom(min, max) {
//     var arr = [];
//     return function () {
//         var num;
//         while(arr.length < max) {
//             num = Math.floor(Math.random() * (max - min)) + min;      
//             if (arr.indexOf(num) === -1) {
//                 arr.push(num);
//                 return num;
//             }
//         }

//     }
// }
// var rand = getRandom(0,100);
// console.log(rand());



//// ДОМАШНЕЕ ЗАДАНИЕ К 15.05.2018 (ДЕВЯТОМУ ЗАНЯТИЮ)

//// №1 
//// Создать функцию которая выводит время в html и обновляет значения каждую секунду. 
//// Время выводить в формате чч:мм:cc, при этом часы, минуты и секунды отобразить разными цветами.

// var  date = document.getElementById('time');

// var dateHrs = document.createElement('span');
// dateHrs.style.color = "green";
// date.appendChild(dateHrs);

// var dateMin = document.createElement('span');
// dateMin.style.color = "blue";
// date.appendChild(dateMin);

// var dateSec = document.createElement('span');
// dateSec.style.color = "brown";
// date.appendChild(dateSec);

// function alertTime() {
//     var now = new Date();    
//     var nowHrs = now.getHours();
//     var nowMin = now.getMinutes();
//     var nowSec = now.getSeconds();
//     if (nowHrs <= 9) {
//         nowHrs = '0'+ nowHrs;
//     };
//     if (nowMin <= 9) {
//         nowMin = '0' + nowMin; 
//     };
//     if (nowSec <= 9) {
//         nowSec = '0' + nowSec;
//     };
//     dateHrs.textContent = nowHrs + ':';
//     dateMin.textContent = nowMin + ':';
//     dateSec.textContent = nowSec;     
//     setTimeout(alertTime, 1000);    
// }
// alertTime();


// № 2 
// Создать объект «Товар» включающий: - свойства, такие как фото, артикул, описание и т.п.;
// - метод, которому при вызове передается id пустого div элемента и в этот html элемент данный метод создаст и внесёт 
// все необходимые html элементы, стили, и содержание для отображения всей информации хранящихся в свойствах 
// объекта о данном товаре. Дизайн оформления информации в html о товаре – это ваше творчество.

// var product = {
//     photo: 'Pontiac.jpg',
//     name: 'Pontiac',
//     articul: 21345,
//     description: 'пожиратель топлива',
//     getInfo: function (goodsItem) {
//         var goods = document.getElementById(goodsItem);
//         var p = document.createElement('p');
//         p.textContent = this.name;
//         var p1 = document.createElement('p');
//         p1.textContent = this.articul;
//         var p2 = document.createElement('p');
//         p2.textContent = this.description;
//         var img = document.createElement('img');
//         img.setAttribute('src', this.photo);
//         img.style.width = '25%';
//         goods.appendChild(p);
//         goods.appendChild(p1);
//         goods.appendChild(p2);
//         goods.appendChild(img);

//     }
// }
// product.getInfo('goodsItem');

// № 3
// Создать светофор (красный, желтый, зелёный). 
// Переключать цвет у светофора через каждые 2 сек сверху вниз и снизу вверх.

// function showRed(){
//     var red = document.getElementById('redLight');
//     red.style.backgroundColor = 'red';
//     var yellow = document.getElementById('yellowLight');
//     yellow.style.backgroundColor = 'white';
//     var green = document.getElementById('greenLight');
//     green.style.backgroundColor = 'white';
// }
// function showYellow(){
//     var red = document.getElementById('redLight');
//     red.style.backgroundColor = 'white';
//     var yellow = document.getElementById('yellowLight');
//     yellow.style.backgroundColor = 'yellow';
//     var green = document.getElementById('greenLight');
//     green.style.backgroundColor = 'white';
// }
// function showGreen(){
//     var red = document.getElementById('redLight');
//     red.style.backgroundColor = 'white';
//     var yellow = document.getElementById('yellowLight');
//     yellow.style.backgroundColor = 'white';
//     var green = document.getElementById('greenLight');
//     green.style.backgroundColor = 'green';
// }
// function changeLights () {
//     setTimeout(showRed, 2000);
//     setTimeout(showYellow, 4000);
//     setTimeout(showGreen, 6000);
//     setTimeout(showYellow, 8000);    
// }
// changeLights ();
// setInterval(changeLights, 8000);






  

  
   








