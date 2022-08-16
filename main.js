alert("Bienvenido a BurguerWorld")

function calcularTotal(precio) {
    const combo = 100;
    return precio * combo;
}

let repetir = true,
    pregunta

do {
    let comboIngresado = parseFloat(prompt("Ingresa la cantidad de combos que desee"))

    if (isNaN(comboIngresado)) {
        alert("Escriba un número por favor")
        continue
    }

    let resultado = calcularTotal(comboIngresado)

    alert(resultado)

    do {
        pregunta = prompt("¿Desea continuar? SI/NO").toLowerCase()
    }

    while (pregunta != "si" && pregunta != "no")

    if (pregunta == "no") {
        repetir = false
    }
} while (repetir)
    alert("Gracias por su compra <3 Hasta luego!");



    
