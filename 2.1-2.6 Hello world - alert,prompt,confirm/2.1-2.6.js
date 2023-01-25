// ========= 2.1 ===============

// Привет, мир!
//alert('Я джаваскрипт')



// ==========2.2 ==============
// Структура кода

// alert('Привет (inline)'); alert('Мир (inline)');
//
// alert('Привет');
// alert('Мир');


// alert(3 +
//     1
//     + 2);


// alert('Hello');
//
// [1, 2].forEach(alert);


// alert('Hello')
//
//     [1, 2].forEach(alert);


//alert('Hello');[1, 2].forEach(alert);


/* Закомментировали код
alert('Привет');
*/
//alert('Мир');


// ========= 2.3 ==============
// Строгий режим — "use strict"


//alert("some code");
// "use strict" ниже игнорируется - он должен быть в первой строке

//"use strict";

// строгий режим не активирован


// ========= 2.4 ==============
// Переменные

let message;
message = 'Hello!';
//alert(message); // показывает содержимое переменной

//---------
let someOtherMessage = 'Hello!'; // определяем переменную и присваиваем ей значение
//alert(someOtherMessage); // Hello!

//---------
let user = 'John';
let age = 25;
let ageMessage = 'Hello';

//---------
let anotherMessage;
anotherMessage = 'Hello!';
anotherMessage = 'World!'; // значение изменено
//alert(anotherMessage);



//---------
let hello = 'Hello world!';
let newMessage;

// копируем значение 'Hello world' из переменной hello в переменную message
newMessage = hello;

// теперь две переменные содержат одинаковые данные
//alert(hello); // Hello world!
//alert(newMessage); // Hello world!


//---------
// Имя переменной должно содержать только буквы, цифры или символы $ и _.
//     Первый символ не должен быть цифрой.

let $ = 1;
let _ = 2;

//alert($ + _); // 3

//--------
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";


let color = COLOR_ORANGE;
//alert(color);


//--------- Задачи --------
let admin;
let name;

name = "Джон";
admin = name;
//alert( admin );

//---------
let planetName = 'Earth'
let currentUser = ''

//---------
const BIRTHDAY = '18.04.1982';

//const age = someCode(BIRTHDAY);
//alert(age);