let alumno = prompt("ingrese el nombre del alumno/a regular").toUpperCase()

let alumno1 = "LAURA NUÑEZ"
let alumno2 = "RAMIRO GOMEZ"
let alumno3 = "MAXI LOPEZ"

const finalizar = "FINALIZAR"


function mostrarNota() {
    while (alumno != finalizar) {
        switch (alumno) {
            case alumno1:
                alert(`${alumno1} aprobado satisfactoriamente`)
                break;
            case alumno2:
                alert(`${alumno2} desaprobado`)
                break;
            case alumno3:
                alert(`${alumno3} desaprobado`)
                break;
            default:
                alert("El nombre ingresado es incorrecto")
                break;
        }
        alumno = prompt("ingrese el nombre del alumno/a regular o escriba FINALIZAR para finalizar el proceso").toUpperCase()
    }
}

mostrarNota(alumno)

