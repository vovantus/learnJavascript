// ========= 2.7 ==============
// Преобразование типов

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


// ========= 2.7 ==============
// Базовые операторы, математика

console.log("========= 2.7 ==============")

let x = 1;
x = -x;
console.log(x);

let z = 1, y = 3;
console.log( y - z )

console.log( 5 % 2 );
console.log( 8 % 3 );
console.log( 8 % 4 );

console.log( 2 ** 2 );
console.log( 2 ** 3 );
console.log( 2 ** 4 );

console.log( 4 ** (1/2) );
console.log( 8 ** (1/3) );

let s = "моя" + "строка";
console.log(s);

console.log( '1' + 2 );
console.log( 2 + '1' );

console.log(2 + 2 + '1' );

console.log( 6 - '2' );
console.log( '6' / '2' );

let x1 = 1;
console.log( +x1 ); // 1

let y1 = -2;
console.log( +y1 ); // -2

// Преобразует не числа в числа
console.log( +true ); // 1
console.log( +"" );   // 0

let apples = "2";
let oranges = "3";

console.log( apples + oranges );
console.log( +apples + +oranges );

let x2 = 2 * 2 + 1;
console.log( x2 );

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
console.log( a );
console.log( c );

let a1, b1, c1;
a1 = b1 = c1 = 2 + 2;
console.log( a1 );
console.log( b1 );
console.log( c1 );

let n = 2;
n += 5;
n *= 2;
console.log( n );

let n1 = 2;
n1 *= 3 + 5;
console.log( n1 );

let counter = 2;
counter++;
console.log( counter );

let counter1 = 2;
counter1--;
console.log( counter1 );

let counter2 = 1;
let a2 = ++counter2; // (*)
console.log(a2);

let counter3 = 1;
let a3 = counter3++; // (*) меняем ++counter на counter++

console.log(a3);
console.log(counter3);

let counter4 = 1;
console.log( 2 * ++counter4 );

let counter5 = 1;
console.log( 2 * counter5++ );

let a4 = (1 + 2, 3 + 4);
console.log( a4 );

//======= Примеры =========
let a5 = 1, b5 = 1;
let c5 = ++a5; // 2
let d5 = b5++; // 1
console.log(c5,d5);

let a6 = 2;
let x6 = 1 + (a6 *= 2);
console.log(a6, x6); // 4 5

console.log("" + 1 + 0) // 10
console.log("" - 1 + 0) // -1
console.log(true + false) // 1
console.log(6 / "3") // 2
console.log("2" * "3") // 6
console.log(4 + 5 + "px") // 9px
console.log("$" + 4 + 5) // $45
console.log("4" - 2) // 2
console.log("4px" - 2) // Nan
console.log("  -9  " + 5) // " -9 5"
console.log("  -9  " - 5) // -14
console.log(null + 1) // 1
console.log(undefined + 1) // NaN
console.log(" \t \n" - 2) // -2

let a7 = prompt("Первое число?", 1);
let b7 = prompt("Второе число?", 2);

console.log(+a7 + +b7); // 12