// ========= 2.7 ==============

console.log("========= 2.7 ==============")

//======= Строкове ==========

let value = true;
console.log(value);
console.log(typeof value);

value = String(value);
console.log(value);
console.log(typeof value);


//======= Численное ==========

console.log( "6" / "2" );

let str = "123";
console.log(str);
console.log(typeof str);
let num = Number(str);
console.log(num);
console.log(typeof num);

let age = Number("Любая строка вместо числа");
console.log(age);

console.log( Number("   123   ") );
console.log( Number("123z") );
console.log( Number(true) );
console.log( Number(false) );


//======= Логическое ==========

console.log( Boolean(1) );
console.log( Boolean(0) );

console.log( Boolean("Привет!") );
console.log( Boolean("") );

console.log( Boolean("0") );
console.log( Boolean(" ") );