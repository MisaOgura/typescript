// string
let myName: string = 'Misa';

// number
let myAge: number = 28.5;

// bool
let hasHobbies: boolean = true;

// assign type any
let myRealAge; // type: any - no compilation check...
myRealAge = 28;
myRealAge = '28'; // does not throw a compile error

// assign types
let realAge: number;
realAge = 28;
// realAge = 'Misa';

// array
let hobbies: any[] = ['reading', 'gaming'];
hobbies = [100];
// hobbies = 100;

/////
// special types comes with TS
/////

// tuples - arrays with mixed types and fixed number of items
let address: [string, number] = ["street", 2];

// enums - make numbers more expressive
// items will receive 0, 1, 2... by default
enum Color {
    Gray,
    Green = 100,
    Red
}
let myColor: Color = Color.Gray;
console.log(myColor); // 0
myColor = Color.Red;
console.log(myColor); // 101

// any - try to avoid!!
let car: any = 'BMW';
console.log(car);
car = {brand: 'BMW', series: 3};
console.log(car);

// functions
function returnMyName (): string {
    return myName;
}
console.log(returnMyName())

// void - returns nothing
function sayHello (): void {
    console.log('hello')
}
sayHello()

// argument types
function multiply (value1: number, value2: number): number {
    return value1 * value2
}
// console.log(multiply(2, 'max'))
console.log(multiply(2, 5))

// function types
let myMultiply: (v1: number, v2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2, 6));

// objects
let userData: {name: string, age: number} = {
    name: 'Misa',
    age: 28
};
// keys need to match as well - as it can't rely on the order of the key/value pair
// userData = {
//     a: 'hey',
//     b: 22
// };
console.log(userData);

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]}

let complex: Complex = {
    data: [1, 2, 3],
    output: function (all: boolean) {
        return this.data
    }
};
console.log(complex);

// union types
let myRealRealAge: number | string = 28;
myRealRealAge = '27';
// myRealRealAge = true;
console.log(myRealRealAge);

// check types
let finalVanue = 'a string';
if (typeof finalVanue == 'string') {
    console.log('final value is a string')
}

// never type - put where it should never be reached!
function neverReturns (): never {
    throw new Error('an error!')
}

// nullable type - be explicit about which valuables can be null or cannot be
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull; // if the variable is undefined, can be null without specifying
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 5;
