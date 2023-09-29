/*const avengers = document.getElementById("avengers");
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
*/
const peliculas = [
    {
        id: 1,
        imagen: "./img/avengers1.jpg",
        nombre: "AVENGERS",
        precio: "AR$ 800"
    },
    {
        id: 2,
        imagen: "./img/avengers2.jpg",
        nombre: "AVENGERS - AGE OF ULTRON",
        precio: "AR$ 1200"
    },
    {
        id: 3,
        imagen: "./img/avengers3.jpg",
        nombre: "AVENGERS - INFINITY WAR",
        precio: "AR$ 2000"
    },
    {
        id: 4,
        imagen: "./img/avengers4.jpg",
        nombre: "AVENGERS - END GAME",
        precio: "AR$ 3000"
    },
]
const divPeliculas = document.querySelector("#contenedorDePelis")

peliculas.forEach((pelicula) => {
    let contenedorPelicula = document.createElement("div")
    contenedorPelicula.classList.add("slider__img__container")
    contenedorPelicula.innerHTML = `
    <img id="peliculaImg" src="${pelicula.imagen}">
    <p id="titulo">${pelicula.nombre}</p>
    <p id="precio">${pelicula.precio}</p>
    <button id="agregarPelicula" class="slider__link">+</button>
    `
    divPeliculas.appendChild(contenedorPelicula)
})



const agregarPelicula = document.querySelectorAll("#agregarPelicula")
let carrito = document.querySelector("#cart")

let carritoArray = []

peliculasLocalStorage()

agregarPelicula.forEach((agregar) => {
    agregar.addEventListener("click", peliAgregada)
})
function peliAgregada(event) {
    const button = event.target
    const pelis = button.closest(".slider__img__container")
    const pelisImagen = pelis.querySelector("#peliculaImg").src
    const pelisTitulo = pelis.querySelector("#titulo").textContent
    const pelisPrecio = pelis.querySelector("#precio").textContent

    const pelisAlArray = { imagen: pelisImagen, titulo: pelisTitulo, precio: pelisPrecio }
    carritoArray.push(pelisAlArray)
    localStorage.setItem("carritoStorage", JSON.stringify(carritoArray))

    agregarPelisItems(pelisImagen, pelisTitulo, pelisPrecio)


    const alertAgregado = document.createElement("div")
    alertAgregado.innerHTML = `<div class="alert alert-success d-flex align-items-center" role="alert">
    <div>
    ¡La pelicula fue agregada con exito!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    </div>`
    divPeliculas.append(alertAgregado)

}



function agregarPelisItems(pelisImagen, pelisTitulo, pelisPrecio) {
    const carritoDiv = document.createElement("div")
    carritoDiv.classList.add("items__carrito")
    carritoDiv.innerHTML = `
    <img id="peliculaImg" src="${pelisImagen}">
    <p id="titulo">${pelisTitulo}</p>
    <p id="precio">${pelisPrecio}</p>
    <button id="eliminarPelicula" class="btn btn-danger buttonDelete" type="button">X</button>
    `
    carrito.append(carritoDiv)

    carritoDiv.querySelector("#eliminarPelicula").addEventListener("click", eliminarPelicula)

    totalCarrito()

    const botonComprar = document.querySelector("#ejecutarCompra")

    botonComprar.addEventListener("click", eliminarCarrito)
}



function totalCarrito() {
    let total = 0
    const totalCarrito = document.querySelector("#total")
    const itemsAgregados = document.querySelectorAll(".items__carrito")

    itemsAgregados.forEach((itemAgregado) => {
        const itemPrecio = itemAgregado.querySelector("#precio")
        const precioPelicula = Number(itemPrecio.textContent.replace("AR$", ""))
        total = total + precioPelicula
    })
    totalCarrito.innerHTML = `
    <p>Total AR$ ${total}</p>
    <button id="ejecutarCompra" class="btn__comprar" type="button">Comprar</button>
    `
}


function eliminarPelicula(event) {
    const buttonDelete = event.target
    buttonDelete.closest(".items__carrito").remove()
    const alertEliminado = document.createElement("div")
    alertEliminado.innerHTML = `<div class="alert alert-success d-flex align-items-center" role="alert">
    <div>
    ¡La pelicula fue eleiminada con exito!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    </div>`
    carrito.append(alertEliminado)
    totalCarrito()
}


function eliminarCarrito() {
    carrito.innerHTML = `<div class="alert alert-success d-flex align-items-center" role="alert">
    <div>
    ¡La compra fue ejecutada con exito!
    Tu solicitud fue enviada.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    </div>`
    totalCarrito()
}

function peliculasLocalStorage() {
    if (JSON.parse(localStorage.getItem("carritoStorage"))) {
        carritoArray = JSON.parse(localStorage.getItem("carritoStorage"))
        agregarPelisItems(carritoArray)
    }
}

