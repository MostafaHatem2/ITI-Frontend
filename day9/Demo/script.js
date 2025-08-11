// console.log(window);
// console.log(screen);
// console.log(history);
// console.log(navigator);
// console.log(location);
// console.log(event);




// function test(e) {
//     if (e.button == 0) {
//         alert("left click")
//     } else if (e.button == 1) {
//         alert("wheel click")
//     } else if (e.button == 2) {
//         alert("right click")
//     }
// }

// function test(e) {
//     // console.log(e.target);
//     if (e.key == "w" && e.altKey == true) {
//         e.target.style.backgroundColor = "green"
//     }
// }

//*                   event handler

// //! 1- element attribute

// function test(e) {
//     // console.log(e);
//     console.log("test1");

// }


// //! 2- object prop.

// var button = document.getElementById("test")

// button.onclick = function (e) {
//     // console.log(e);
//     console.log("test2");

// }

// //! 3- object method => addEventListener()

// button.addEventListener("click", function (e) {
//     // console.log(e);
//     console.log("test3");
// })

// function test4 (e) {
//     // console.log(e);
//     console.log("test4");
// }

// button.addEventListener("click", test4 )

// button.removeEventListener('click', test4 )



// var button = {
//     id: 1,
//     onclick : "test1",
//     onclick : "test2",
//     addEventListener : function (x) {
//         console.log(x);
//     }
// }

// console.log(button.onclick);

// button.addEventListener("test3")
// button.addEventListener("test4")


//* --------------------------------------------

// document.getElementById("red").addEventListener('click', function (e) {
//     alert("i am red")
//     e.stopPropagation()
// })
// document.getElementById("blue").addEventListener('click', function (e) {
//     alert("i am blue")
//     e.stopPropagation()
// })
// document.getElementById("green").addEventListener('click', function (e) {
//     alert("i am green")
//     e.stopPropagation()
// })


//----------------------------------------------------------

