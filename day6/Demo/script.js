//*                     output
//! alert()
// window.alert("hello from external")

//! document.write()
// document.write("<h1>Hello World!</h1>")

//! console.log(x)
// var x = 10

// console.log(x)

// console.log("hello from console")


//* declaration
// var x = 10

//* redeclaration
// var x = true

//* reassign
// x = '20'

// console.log(x);


//*                     Datatype

//! primitive datatype (string, number, boolean, null, undefined, symbol, bigint)

//@ 1- string

// var str = ""
// var str = ''

// console.log(typeof str);

//@ 2- number

// var num = 20.5

// console.log(typeof num);


//@ 3- boolean

// var isFired = false

// console.log(typeof isFired);


//@ 4- null


// var x = null

// console.log(x);
// console.log(typeof x);


//@ 5- undefined

// var x;
// var x = undefined;

// console.log(x);
// console.log(typeof x);


//@ 6- symbol()

// var x = Symbol()
// var y = Symbol()

// console.log(x == y);
// console.log(x);
// console.log(typeof x);


//? == ask for equality (value)
// console.log(x == y);
//? === ask for equality (value, type)
// console.log(x === y);


//@ bigint

// var x = 11n

// console.log(x);
// console.log(typeof x);



//*                   concat

var myName = "Muhammad"

// document.write("Welcome " + myName)
// document.write("Welcome " + myName + " in my js file")

//! template literal `${var}`

// 1- ``
// 2- {}
// 3- $

// document.write(`Welcome ${myName} in my js file`)

//*                         type coersion / convertion

// console.log(1 + "6");

//! emplicit casting
// console.log(10 - "6");
// console.log(2 * "6");
// console.log(4/'2');

// console.log(1 + true);
// console.log(1 + false);

// console.log('1' + false);

// console.log(1 + '1' + 2);
// console.log(1 + 2 + '2');

// console.log(1 + null);

// console.log(1 + undefined);

// console.log(undefined + undefined);

// console.log(undefined + "1");

// console.log('10' + undefined);


// console.log(typeof NaN);

//! explicit casting => string to number

// console.log(1 + +"6m");

// console.log(1 + Number("6m"));

// console.log(1 + parseInt("6.5m"));

// console.log(1 + parseFloat("6.5m"));


//*                   declaration function

// var x = 4
// console.log(x);


// function test(x = 1, y = 1) { //default parameter
//     console.log(x + y)
// }

// test(2, 3) // arguments
// test(1,6)
// test("test", 2)
// test(4, 2, 6)
// test(4)
// test("4")
// test()
// test(5,6)
// test(5)


// var x = function test(x = 1, y = 1) { //default parameter
//     console.log(x + y)
// }

// x(2, 3)


// function test(x = 1, y = 1) { //default parameter
//     // console.log(x + y)
// }

// var x = test(2, 3)

// console.log(x);


// function test(x = 1, y = 1) { //default parameter
//     return x + y
// }

// var x = test(2, 3)

// console.log(x);


//*                        var , let , const

//! initialization

// var x;

// let y;

// const z;              //error

//! reassign

// var x = 10
// x = ""

// let y = 10
// y = 20

// const z = 10          //error
// z = 20

//! redeclration

// var x = 10
// var x = "str"

// let y = 10            //error
// let y = ""

// const z = 10             //error
// const z = 20

//! hoisting

//! scope








