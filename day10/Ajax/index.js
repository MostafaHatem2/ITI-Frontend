// function second() {
// setInterval(function() {
//     console.log("iam second");
// }, 2000);}

// function first() {
//     console.log("iam first");
//     second()
//     console.log("iam third");
// }

// first()
// console.log("iam fouth");

// var x;
// setTimeout(function (params) {
//     x= 10
// },2000)
// console.log(x);



// function one(params) {
//     console.log("one");
// }
// function two(params) {
//     one()
//     console.log("two");
// }
// function three(params) {
//     two()
//     console.log("three");
// }
// three()

// console.log("first");
// console.log("two");
// console.log("three");

// console.log("first");
// setTimeout(function (params) {
//     console.log("after 2 sec");
// },2000)
// setTimeout(function (params) {
//     console.log("after 0 sec");
// },0)
// setTimeout(function (params) {
//     console.log("after 1 sec");
// },1000)
// console.log("second");


////////////////////////////////////////////
//* Ajax
// var xhr = new XMLHttpRequest //0
// console.log(xhr);
// xhr.open("GET","https://fakestoreapi.com/users"); //1
// xhr.send(); //2

// // setTimeout(function (params) {
// //     console.log(xhr.responseText);
// // },1000)

// xhr.addEventListener("readystatechange",function () {
//     if (xhr.readyState == 4 && xhr.status == 200) { //4
//     // console.log(xhr.responseText);
//     var users = JSON.parse(xhr.responseText)
//     // console.log(users);
//     // for (const user of users) {
//     //     console.log(user.username);
//     // }
//     users.forEach(function (user) {
//         console.log(user);
//     });
// }
// })

// console.log(JSON.parse('{"id":1, "name":"ali"}'));
// JSON.stringify({id: 1, name: 'ali'})


// var xhr = new XMLHttpRequest
// xhr.open("GET", "https://fakestoreapi.com/products")
// xhr.send()
// xhr.addEventListener("readystatechange", function (params) {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         var products = JSON.parse(xhr.responseText)
//         // console.log(products);
//         products.forEach(function (product) {
//             console.log(product);
//             var table = document.getElementsByTagName("table")[0]
//             table.innerHTML += `
//             <tr>
//             <td>${product.id}</td>
//             <td>${product.title}</td>
//             <td>${product.price}</td>
//             <td><img src="${product.image}" style="width:100px"></td>
//             </tr>
//             `
//         });
//     }
// })

// var xhr = new XMLHttpRequest
// xhr.open("GET","./test.txt")
// xhr.send()
// xhr.addEventListener("readystatechange",function (params) {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         console.log(xhr.responseText);
//     }
// })
/////////////////////////////////////////////////////////////////////////
// var name = localStorage.setItem("name","ali")
// var email = localStorage.setItem("email","ali@yahoo.com")
// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("email"));
// localStorage.removeItem("name")
// localStorage.removeItem("email")
// localStorage.clear()

var date =new Date()
date.setMonth(date.getMonth() + 2)
document.cookie = "name= mona;expires="+date


console.log(document.cookie.split("=")[1]);
localStorage.cookie ="name=;expires="
