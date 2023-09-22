// let pacientes = [
//     { nombre: "Alejo Calderon", altura: "1.80", peso: 80 },
//     { nombre: "Nicolas Halberg", altura: "1.70", peso: 70 },
//     { nombre: "Maxi Gonzalez", altura: "1.85", peso: 85 },
//     { nombre: "Mariana Gonzalez", altura: "1.70", peso: 60.5 },
//     { nombre: "Florencia Montero", altura: "1.50", peso: 50 },
// ]

// // const infoPaciente = pacientes.forEach(paciente => {
// //     console.log(`El paciente ${paciente.nombre} pesa ${paciente.peso}`)
// // });

// // const infoPaciente = pacientes.find(paciente => paciente.altura == "1.70");
// // console.log(infoPaciente)

// // const infoPaciente = pacientes.find(paciente => paciente.nombre.includes ("Gonzalez"));
// // console.log(infoPaciente)

// const infoPaciente = pacientes.filter(paciente => paciente.altura == "1.70");
// console.log(infoPaciente)

// const infoPaciente = pacientes.some(paciente => paciente.nombre == "Calderon");
// console.log(infoPaciente)

// const pacienteActualizado = pacientes.map(paciente =>{
//     return{
//         nombre: paciente.nombre,
//         altura: paciente.altura,
//         peso: paciente.peso * 1.5
//     }
// })

// console.log(pacienteActualizado)
let productos = [];

function Producto(codigo, descripcion, precio) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.precio = precio;
}

function agregarProducto() {
    let codigo = parseInt(prompt("Ingrese el código del producto"));
    let descripcion = prompt("Ingrese la descripción del producto");
    let precio = parseFloat(prompt("Ingrese el precio del producto. Para indicar decimal utilice '.'"));

    
    let nuevoProducto = new Producto(codigo, descripcion, precio);

    productos.push(nuevoProducto);

    console.log("Nuevo producto agregado:", nuevoProducto);
}


agregarProducto();  
