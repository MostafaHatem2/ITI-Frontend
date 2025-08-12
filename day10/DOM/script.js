//*                      DOM
//*                      Get
// //! document
// //? getElementById
// // console.log(document.getElementById("test"));
// //? getElementsByClassName
// // console.log(document.getElementsByClassName("myDiv")[0]);
// //? getElementsByName
// // console.log(document.getElementsByName("fname")[0]);
// //? getElementsByTagName
// // console.log(document.getElementsByTagName("p")[0]);
// //! body & element
// var div1 = document.body.getElementsByClassName("myDiv")[0]
// // console.log(div.getElementsByTagName("span")[0]);

//*                     CSS Selector

//! querySelector
// console.log(document.querySelector("#test"));

//! querySelectorAll
// console.log(document.querySelectorAll(".myDiv")[1]);

// console.log(document.querySelectorAll("[name='fname']")[0]);


//*                   relation

// console.log(document.body.children[0]);

// console.log(div.children[0]);

// console.log(div.previousElementSibling);
// console.log(div.nextElementSibling);

// console.log(document.getElementsByTagName("span")[0].parentElement);

//*                create

// var div2 = document.createElement("div")

// // document.body.appendChild(div2)
// div1.appendChild(div2)

// div2.innerHTML = `
// <h1>Hello1</h1>
// <h1>Hello2</h1>
// `

// div2.innerHTML += "<h1>Hello3</h1>"



//*                    sync vs async

// function one() {
//     setTimeout(function () {
//         console.log("one");
//     }, 0)
// }

// function two() {
//     one()
//     console.log("two");
// }

// function three() {
//     two()
//     console.log("three");
// }

// three()

// console.log("four");
// console.log("five");


// console.log("hello");

// setTimeout(function () {
//     console.log("after 1s");
// }, 1000)

// setTimeout(function () {
//     console.log("after 0s");
// }, 0)

// setTimeout(function () {
//     console.log("after 2s");
// }, 2000)

// console.log("end");



// var x;

// setTimeout(function () {
//     x = 10
// },0)

// console.log(x);
