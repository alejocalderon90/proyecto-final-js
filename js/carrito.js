
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

const carritoArray = JSON.parse(localStorage.getItem("carritoStorage")) || []

function renderPeliculas() {
    const divPeliculas = document.querySelector("#contenedorDePelis")
    divPeliculas.innerHTML = ""
    peliculas.forEach((pelicula) => {
        const contenedorPelicula = document.createElement("div")
        contenedorPelicula.classList.add("slider__img__container")
        contenedorPelicula.innerHTML = `
            <img src="${pelicula.imagen}">
            <p>${pelicula.nombre}</p>
            <p>${pelicula.precio}</p>
            <button class="slider__link" onclick="peliAgregada(${pelicula.id})">+</button>
            `
        divPeliculas.appendChild(contenedorPelicula)
    })
}



function peliAgregada(id) {
    const peliculaSeleccionada = peliculas.find(pelicula => pelicula.id === id)
    carritoArray.push(peliculaSeleccionada)
    localStorage.setItem("carritoStorage", JSON.stringify(carritoArray))
    renderCarrito()
}

function renderCarrito() {
    const carrito = document.querySelector("#cart")
    carrito.innerHTML = ""

    carritoArray.forEach((pelicula, index) => {
        const carritoDiv = document.createElement("div")
        carritoDiv.classList.add("items__carrito")
        carritoDiv.innerHTML = `
        <img src="${pelicula.imagen}">
        <p>${pelicula.nombre}</p>
        <p>${pelicula.precio}</p>
        <button class="btn btn-danger" onclick="eliminarPelicula(${index})">+</button>
        `
        carrito.appendChild(carritoDiv)
    })
    totalCarrito()
}

function totalCarrito() {
    let total = 0
    const totalCarrito = document.querySelector("#total")

    carritoArray.forEach((pelicula) => {
        const preciosPelicula = Number(pelicula.precio.replace("AR$", ""))
        total += preciosPelicula

        totalCarrito.innerHTML = `
        <p>Total AR$ ${total}</p>
        <button class="btn__comprar" onclick="realizarCompra()">Comprar</button>
        `
    })
}

function eliminarPelicula(index) {
    carritoArray.splice(index, 1)
    localStorage.setItem("carritoStorage", JSON.stringify(carritoArray))
    renderCarrito()
    totalCarrito()
}

function realizarCompra() {
    localStorage.removeItem("carritoStorage")
    carritoArray.length = 0
    renderCarrito()
    totalCarrito()
}

document.addEventListener("DOMContentLoaded", () => {
    renderPeliculas()
    renderCarrito()
})

