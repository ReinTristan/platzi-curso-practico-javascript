//Codigo cuadrado
console.group("Cuadrado")
const roundToTwo = value => Math.round(value * 100) / 100
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
function alturaTriangulo(lado1,base) {
    const altura = Math.sqrt((lado1 ** 2 - (base / 2) ** 2))
    return roundToTwo(altura)
}
function areaTriangulo(lado1,lado2,base) {
    const semiP = perimetroTriangulo(lado1,lado2,base) / 2
    const semiP2 = Math.sqrt(semiP * (semiP - lado1) * (semiP - lado2) * (semiP - base))
    return roundToTwo(semiP2)

}

console.groupEnd()

//Circulo
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
    return roundToTwo(diametro * pi)
}
//Area
const areaCirculo = radio => roundToTwo((radio * radio) * pi)

console.groupEnd()

function calcularPerimetroCuadrado() {
    const input = document.querySelector('#inputCuadrado')
    const value = input.value
    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}
function calcularAreaCuadrado() {
    const input = document.querySelector('#inputCuadrado')
    const value = input.value
    const area = areaCuadrado(value)
    alert(area)
}
function calcularPerimetroTriangulo() {
    const inputLado1 = document.querySelector('#inputTriangulo1')
    const inputLado2 = document.querySelector('#inputTriangulo2')
    const inputBase = document.querySelector('#inputTriangulo3')

    const valueLado1 = Number(inputLado1.value)
    const valueLado2 = Number(inputLado2.value)
    const valueBase = Number(inputBase.value)
    const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase)
    alert(perimetro)
}
function calcularAreaTriangulo() {
    const inputLado1 = document.querySelector('#inputTriangulo1')
    const inputLado2 = document.querySelector('#inputTriangulo2')
    const inputBase = document.querySelector('#inputTriangulo3')

    const valueLado1 = Number(inputLado1.value)
    const valueLado2 = Number(inputLado2.value)
    const valueBase = Number(inputBase.value)

    const area = areaTriangulo(valueLado1, valueLado2, valueBase)
    alert(area)
}
function calcularAlturaTriangulo() {
    const inputLado1 = document.querySelector('#inputTriangulo1')
    const inputLado2 = document.querySelector('#inputTriangulo2')
    const inputBase = document.querySelector('#inputTriangulo3')

    const valueLado1 = Number(inputLado1.value)
    const valueLado2 = Number(inputLado2.value)
    const valueBase = Number(inputBase.value)
    if(valueLado1 === valueLado2) {
        const altura= alturaTriangulo(valueLado1, valueBase)
        alert(altura)
    } else {
        alert('Esta funcion solo funciona para triangulos isoceles (ambos lados iguales) ')
    }


}
function calcularPerimetroCirculo() {
    const inputRadio = document.querySelector('#inputCirculo')
    const valueRadio = Number(inputRadio.value)

    const perimeto = perimetroCirculo(valueRadio)
    alert(perimeto)
}
function calcularAreaCirculo() {
    const inputRadio = document.querySelector('#inputCirculo')
    const valueRadio = Number(inputRadio.value)

    const area = areaCirculo(valueRadio)
    alert(area)
}
