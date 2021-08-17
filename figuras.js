//Codigo cuadrado
console.group("Cuadrado")

function perimetroCuadrado(lado) {
    return lado * 4
}

function areaCuadrado(lado) {
    return lado * lado
}

console.groupEnd()

//Codigo triangulo
console.group("Triangulo")

function perimetroTriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base
}

function areaTriangulo(base,altura) {
    return base * altura
}

console.groupEnd()

//Ciruculo
console.group("Circulo")


//Diametro
function diametroCirculo(radio) { 
    return radio * 2

}

//Pi
const pi = Math.PI


//Circuferencia
const perimetroCirculo = radio => {
    const diametro = diametroCirculo(radio) 
    return diametro * pi
}
//Area
const areaCirculo = radio => (radio * radio) * pi

console.groupEnd()

