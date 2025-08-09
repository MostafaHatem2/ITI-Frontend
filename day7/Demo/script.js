//*                     var, let, const

//! 1- initialization

// var x;

// let y;

// const z;             //error

//! 2- reassign

// var x = 10
// x = 20


// let y = 10
// y = 20

// const z = 10         //error
// z = 20

//! 3- redeclaration

// var x  = 10
// var x = ""

// let y = 10           //error
// let y = ""

//! 4- hoisting (var, declaration function)

// console.log(x);

// var x = 10

// console.log(x);



// function test() {
//     var x = 10
//     console.log(x);
// }

// test()



// console.log(x);

// let x = 10

//! 5- scope (global, local, block) => lexical scope
//? 1- where?
//? 2- with what?

//@ global (on the fly) => var, let, const

// var x = 10
// let y = 10
// const z = 10

// function test() {
//     console.log(z);
// }

// test()


//@ local (functional scope) => var, let, const

// function sum() {
//     var x  = 10
//     let y = 20
//     const z = 10
// }

// sum()

// console.log(y);


// let x;

// function test() {
//     let x = 10
// }

// test()

// console.log(x);


//@ block {} => let, const

// {
//     var x = 10
//     let y = 20
// }

// console.log(y);
// console.log(x);

// for (let i = 0; i <= 4; i++) {
//     // console.log(i);
// }

// console.log(i);

// let x;

// function test() {
//     x = 10
// }

// test()

// console.log(x);


//*                     strict mode

// 'use strict'

// x = 10

// console.log(x);


// function test() {
//     'use strict'
//     x = 10
// }

// test()

// console.log(x);

'use strict'

// var interface = 10

// console.log(interface);

//*                      input => prompt()

// var phone = prompt("please enter your phone")

// if (isNaN(phone) == true) {
//     alert("invalid number")
// } else {
//     alert("your phone is " + phone)
// }

// if (isNaN(phone)) {
//     alert("invalid number")
// } else {
//     alert("your phone is " + phone)
// }

// if (isNaN(phone) == false) {
//     alert("your phone is " + phone)
// } else {
//     alert("invalid number")
// }

// if (!isNaN(phone)) {
//     alert("your phone is " + phone)
// } else {
//     alert("invalid number")
// }


// var phone = prompt("please enter your phone")

// while (isNaN(phone) || phone == null || phone == "") {
//     phone = prompt("please enter your phone again")
// }

// alert("your phone number is " + phone)

//---------------------------------------------------

//*  non-primitive datatype (object)


// key: value,
// var obj = {
//     myName: "Muhammad",
//     age: 29,
//     salary: 2000,
//     test: function test() {
//         console.log("test");
//     },
//     sum: function sum(x = 1, y = 1) {
//         return x + y
//     },
// }
//! access (dot notation, bracket notatin)

// console.log(obj.myName);

// obj.test()

// console.log(obj.sum(2));

// console.log(obj['myName']);


// obj['test']()

// console.log(obj['sum'](2,3));

//! loop on object => for in

// for (const key in obj) {
//     // console.log(key);
//     console.log(obj[key]);
// }










