let productSec = document.querySelector('.products-sec');


let products = [
    {
        img: "https://picsum.photos/300/300",
        title: "lorem ipsum 1",
        description: "xyz 1",
        price: "10$"
    },
    {
        img: "https://picsum.photos/300/300",
        title: "lorem ipsum 2",
        description: "xyz 2",
        price: "20$"
    },
    {
        img: "https://picsum.photos/300/300",
        title: "lorem ipsum 3",
        description: "xyz 3",
        price: "30$"
    },
    {
        img: "https://picsum.photos/300/300",
        title: "lorem ipsum 4",
        description: "xyz 4",
        price: "40$"
    },
    {
        img: "https://picsum.photos/300/300",
        title: "lorem ipsum 5",
        description: "xyz 5",
        price: "50$"
    },
    {
        img: "https://picsum.photos/300/300",
        title: "lorem ipsum 6",
        description: "xyz 6",
        price: "60$"
    },
    {
        img: "https://picsum.photos/300/300",
        title: "lorem ipsum 7",
        description: "xyz 7",
        price: "70$"
    },
    {
        img: "https://picsum.photos/300/300",
        title: "lorem ipsum 8",
        description: "xyz 8",
        price: "80$"
    },
    {
        img: "https://picsum.photos/300/300",
        title: "lorem ipsum 9",
        description: "xyz 9",
        price: "90$"
    },
    {
        img: "https://picsum.photos/300/300",
        title: "lorem ipsum 10",
        description: "xyz 10",
        price: "100$"
    },
    {
        img: "https://picsum.photos/300/300",
        title: "lorem ipsum 11",
        description: "xyz 11",
        price: "110$"
    },
    {
        img: "https://picsum.photos/300/300",
        title: "lorem ipsum 12",
        description: "xyz 12",
        price: "120$"
    }
]




for (let i = 0; i < products.length; i++) {

    let product = products[i];

    let newDiv = document.createElement("div");
    newDiv.classList.add("product-card");
    productSec.appendChild(newDiv);

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("product-img");
    newDiv.appendChild(imgDiv);

    let productImg = document.createElement("img");
    productImg.src = products[i].img;
    imgDiv.appendChild(productImg);

    let detailsDiv = document.createElement("div");
    detailsDiv.classList.add("details");
    newDiv.appendChild(detailsDiv);

    let title = document.createElement("h3");
    title.textContent = products[i].title;
    detailsDiv.appendChild(title);

    let desc = document.createElement("p");
    desc.textContent = products[i].description;
    detailsDiv.appendChild(desc);

    let price = document.createElement("h4");
    price.textContent = products[i].price;
    detailsDiv.appendChild(price);

}




















