fetch("https://dummyjson.com/products/search?q=phone")
    .then((res) => {
        return res.json()
    }).then((res) => {
        console.log(res.products);
        for (const prd of res.products) {
            document.getElementsByTagName("div")[0].innerHTML += `
                <div class="child" onclick="navigate(${prd.id})">
                    <div><img src='${prd.images[0]}' style="width : 70px"></div>
                    <div>${prd.title}</div>
                </div>
            `
        }
    })
    .catch((err) => {
        console.log(err);
    });

function navigate(id) {
    // console.log(id);
    location.assign(`./details.html?id=${id}`)
}