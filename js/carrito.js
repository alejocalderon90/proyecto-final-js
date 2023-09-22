const avengers = document.getElementById("avengers");
const avengersUltron = document.getElementById("avengersUltron");
const avengersInfinity = document.getElementById("avengersInfinity");
const avengersEnd = document.getElementById("avengersEnd");

let avengersImg = document.getElementById("avengersImg");
let avengersTitle = document.getElementById("avengersTitle");
let avengersPrice = document.getElementById("avengersPirce");


const agregarProductosAca = document.getElementById("cart");
const elementosCart = [];


let infoAvengers = [avengersImg, avengersTitle, avengersPrice];

avengers.addEventListener("click", () => {
    infoAvengers.forEach(info => {
        const enCarrito = document.createElement("div");
        enCarrito.innerHTML = info;
        elementosCart.push(enCarrito);
    })
    agregarProductosAca.append(...elementosCart);
});

