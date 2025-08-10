//*                    costum object

// // key, value

// var name = "Muhammad"

// var obj = {
//     name : "Muhammad",
//     test : function () {
//         console.log("test");
//     }
// }


//*                    built-in object
//*                      1-   String

//! literal creation
var str = "Hello World!"

//! constructor creation
// var str = new String("Hello World!")

//! prop.
// console.log(str.length);

//! method

// console.log(str.charAt(0));
// console.log(str.indexOf("l"));
// console.log(str.lastIndexOf("l"));

// console.log(str.replace("l", "*"));
// console.log(str.replaceAll("l", "*"));

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// console.log(str.split("o"));
// console.log(str.split(" "));
// console.log(str.split("W"));
// console.log(str.split(""));
// console.log(str.split());

// console.log(str.slice(3));
// console.log(str.slice(3,8));

// console.log(str.padEnd(20, "*"));
// console.log(str.padStart(20, "*"));



//*                   2-   Array

var myName = "Muhammad"
var age = 29
var salary = 2000
function test() {
    console.log("test");

}

function sum(x, y) {
    return x + y
}

var obj = {
    id: 1,
    name: "ali"
}

// index, values
var arr = [
    "Muhammad",
    29,
    2000,
    function test() {
        console.log("test");
    },
    function sum(x, y) {
        return x + y
    },
    {
        id: 1,
        name: "ali"
    },
    [1, 2, 3]
]


//! access (bracket notation)

// console.log(arr[3]());
// console.log(a[]);

// console.log(arr[5]['name']);
// console.log(arr[5].name);

// console.log(arr[6][2]);


//! loop on array (forof)

// for (const element of arr) {
//     console.log(element);
// }


// console.log(typeof arr);
//! prop
// console.log(arr.length);

//! method

var names = ["Youssef", "Muhammad", "Omnia", "Rehab", "Sara"]

// names.push("Ahmed")
// names.pop()
// names.pop()
// names.pop()


// names.unshift("Ali")
// names.shift()
// names.shift()

// names.splice(start, delete or not , add or not)
// names.splice(1,2, "Youmna")

// console.log(names.join(" * "));

// console.log(names.reverse());




// console.log(names);


//*                  3-   Math
//! prop
// console.log(Math.PI);

//! method

// console.log(Math.min(10,20,30,40,100));
// console.log(Math.max(10,20,30,40,100));

// console.log(Math.floor(10.9));
// console.log(Math.ceil(10.4));

// console.log(Math.round(10.4));
// console.log(Math.round(10.6));

// var r = Math.round(Math.random()*255)
// var g = Math.round(Math.random()*255)
// var b = Math.round(Math.random()*255)


// document.write(`<h1 style="color: rgb(${r},${g}, ${b});">test</h1>`)


//*                    4-   Date

var d = new Date()

// console.log(d);

//! get
// console.log(d.getFullYear());

//! set
// console.log(d.setFullYear(2030));
//! to

// console.log(d.toLocaleDateString());

//*                 5- Regular Expression

// var phoneRegex = /^01(0|1|2|5)[0-9]{8}$/

// console.log(phoneRegex.test("01280389393"));


// var phone = prompt("please enter your phone")

// console.log(phoneRegex.test(phone));

// while (!phoneRegex.test(phone)) {
//     phone = prompt("please enter your phone again")
// }

// alert("your phone number is " + phone)



// -----------------------------------------------
//*                   BOM => Browser Object Model

// console.log(window);

// console.log(window.age);

// window.test()

//! prop

// console.log(window.innerWidth);
// console.log(window.outerWidth);

// console.log(window.innerHeight);
// console.log(window.outerHeight);


//! method

//?                   open close

// var newWin;

// function openWin() {
//     newWin = window.open("https://www.linkedin.com/feed/", "_blank", "width=400; height=400; screenX=400; screenY=400")
// }

// function closeWin() {
//     newWin.close()
// }

//?                   setTimeOut

//@ setTimeout(function(){}, time)
// var time = setTimeout(function () { //callback function
//     alert("time out")
// }, 3000)

// function stopTime() {

//     clearTimeout(time)
// }

//?                  setInterval
var interval;

function startTime() {
    interval = setInterval(function () {
        alert("interval")
    }, 3000)
}

function stopTime() {
    clearInterval(interval)
}









