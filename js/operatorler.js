// ARITMATIK OPERATORLER

var a = 5
var b = 10
var c = '2'
// + toplama operatoru
console.log(a+b)
console.log(b+c)
// - cikarma operatoru
console.log(a-b)
// * carpma operatoru
console.log(a*b)
// / Bölme operatörü
console.log(b/a)
// % Mod operatörü
console.log(a%b)


// Unary Operatorler

// + pozitif sayı operatoru
// - negatif sayı operatoru
// ++ 1 artırma operatoru
// -- 1 azaltma operatoru
// ! Mantıksal tümleyen

var a = 5;

a += 1
console.log(a)
a -=2
console.log(a)
a++;
console.log(a)
a--;
console.log(a)


// Eşitlik ve İlişkisel Operatorler

// === Denktir
// == Eşittir
// != Eşit değildir
// > Büyüktür
// >= Büyük eşittir
// < Küçüktür
// <= Küçük eşittir

var a = "Türkiye"
var b = "Türkiye"

var c = 123
var d = "123"

var e = 5
var f = 7

console.log(a === b)
console.log(c === d)
console.log(c == d)

console.log(e > f)
console.log(e < f)


// Koşulsal Operatorler

// && AND (VE) 
// || OR (VEYA)
// ?:

var a = 5
var b = 4

console.log( a>b && b>a)
console.log( a>b || b>a)

console.log(a>b ? 'Evet büyüktür':'Hayır küçüktür')