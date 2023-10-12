const carritoArray = JSON.parse(localStorage.getItem("carritoStorage")) || []
const buscador = document.getElementById("buscador")

async function traerProductos() {
    const resp = await fetch("./peliculas.json")
    const peliculas = await resp.json()
    renderPeliculas(peliculas)
}

function renderPeliculas(peliculas) {
    const divPeliculas = document.querySelector("#contenedorDePelis")
    divPeliculas.innerHTML = ""
    peliculas.forEach((pelicula) => {
        const contenedorPelicula = document.createElement("div")
        contenedorPelicula.classList.add("slider__img__container")
        contenedorPelicula.innerHTML = `
            <img src="${pelicula.imagen}">
            <p>${pelicula.nombre}</p>
            <p>AR$ ${pelicula.precio}</p>
            <button class="slider__link" id="${pelicula.id}">+</button>
            `
        divPeliculas.appendChild(contenedorPelicula)
        const btnAgregar = document.getElementById(`${pelicula.id}`)
        btnAgregar.addEventListener("click", () => {
            peliAgregada(peliculas, pelicula.id)
        })
    })
}



function peliAgregada(peliculas, id) {
    const peliculaSeleccionada = peliculas.find(pelicula => pelicula.id === id)
    carritoArray.push(peliculaSeleccionada)
    localStorage.setItem("carritoStorage", JSON.stringify(carritoArray))

    Swal.fire({
        icon: 'success',
        text: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500
    })
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
        <p>AR$ ${pelicula.precio}</p>
        <button class="btn btn-danger" onclick="eliminarPelicula(${index})">+</button>
        `
        carrito.appendChild(carritoDiv)

    })
    totalCarrito()
}

function totalCarrito() {
    let total = 0
    const totalCarrito = document.getElementById("total")

    carritoArray.forEach((pelicula) => {
        const preciosPelicula = Number(pelicula.precio)
        total = total + preciosPelicula


    })
    totalCarrito.innerHTML = `
        <p>Total AR$ ${total}</p>
        <button class="btn__comprar" onclick="realizarCompra()">Comprar</button>
        `
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
    Swal.fire({
        icon: 'success',
        title: 'Su pedido fue procesado',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
    renderCarrito()
    totalCarrito()
}

buscador.addEventListener(("input"), () => {
    const inputValue = buscador.value.toUpperCase()
    if (inputValue == "") {
        traerProductos()
    } else {
        fetch("./peliculas.json")
            .then(resp => resp.json())
            .then(peliculas => {
                const pelisFiltradas = peliculas.filter(pelicula => pelicula.nombre.includes(inputValue))
                if (pelisFiltradas.length > 0) {
                    renderPeliculas(pelisFiltradas)
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'La pelicula no existe',
                    })
                }
            })
    }
})

document.addEventListener("DOMContentLoaded", () => {
    traerProductos()
    renderCarrito()
})


