"use strict";
// string
var myName = 'Misa';
// number
var myAge = 28.5;
// bool
var hasHobbies = true;
// assign type any
var myRealAge; // type: any - no compilation check...
myRealAge = 28;
myRealAge = '28'; // does not throw a compile error
// assign types
var realAge;
realAge = 28;
// realAge = 'Misa';
// array
var hobbies = ['reading', 'gaming'];
hobbies = [100];
// hobbies = 100;
/////
// special types comes with TS
/////
// tuples - arrays with mixed types and fixed number of items
var address = ["street", 2];
// enums - make numbers more expressive
// items will receive 0, 1, 2... by default
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Red"] = 101] = "Red";
})(Color || (Color = {}));
var myColor = Color.Gray;
console.log(myColor); // 0
myColor = Color.Red;
console.log(myColor); // 101
// any - try to avoid!!
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void - returns nothing
function sayHello() {
    console.log('hello');
}
sayHello();
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'max'))
console.log(multiply(2, 5));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2, 6));
// objects
var userData = {
    name: 'Misa',
    age: 28
};
// keys need to match as well - as it can't rely on the order of the key/value pair
// userData = {
//     a: 'hey',
//     b: 22
// };
console.log(userData);
var complex = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
console.log(complex);
// union types
var myRealRealAge = 28;
myRealRealAge = '27';
// myRealRealAge = true;
console.log(myRealRealAge);
// check types
var finalVanue = 'a string';
if (typeof finalVanue == 'string') {
    console.log('final value is a string');
}
// never type - put where it should never be reached!
function neverReturns() {
    throw new Error('an error!');
}
// nullable type - be explicit about which valuables can be null or cannot be
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull; // if the variable is undefined, can be null without specifying
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 5;
