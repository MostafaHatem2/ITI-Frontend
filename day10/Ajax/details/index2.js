//* 1
const params = new URLSearchParams(location.search);
const productId = params.get("id");

//* 2
var id = location.search.split("=")[1]


fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => {
        return res.json()
    }).then((res) => {
        console.log(res);
        document.getElementsByTagName("div")[0].innerHTML += `
                <div class="child">
                    <div><img src='${res.images[0]}' style="width : 200px"></div>
                    <div>${res.title}</div>
                    <div>${res.price}</div>
                </div>
            `
    })
    .catch((err) => {
        console.log(err);
    });