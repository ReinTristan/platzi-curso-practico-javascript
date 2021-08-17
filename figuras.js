//Codigo cuadrado
console.group("Cuadrado")

const ladoCuadrado = 5
console.log(`Lados del cuadrado miden: ${ladoCuadrado}c,`)

const perimetroCuadrado = ladoCuadrado * 4
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`)

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log(`El area del cuadrado es: ${areaCuadrado}cm2`) 

console.groupEnd()

//Codigo triangulo
console.group("Triangulo")

const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
console.log(`Lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`)

const alturaTriangulo = 5.5
console.log(`La altura del triangulo es de: ${alturaTriangulo}cm`)

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log(`El perimetro del triangulo es: ${perimetroTriangulo}cm`)

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log(`El area del triangulo es: ${areaTriangulo}cm2`)

console.groupEnd()

//Ciruculo
console.group("Circulo")

//radio
const radioCirculo = 4
console.log(`El radio del circulo es: ${radioCirculo}cm`)

//Diametro
const diametroCirculo = radioCirculo * 2
console.log(`El diametro del circulo es: ${diametroCirculo}cm`)

//Pi
const pi = Math.PI
console.log(`Pi es: ${pi}`)

//Circuferencia
const perimetroCirculo = diametroCirculo * pi
console.log(`El perimetro del circulo es: ${perimetroCirculo}cm`)

//Area
const areaCirculo = (radioCirculo * radioCirculo) * pi
console.log(`El area del circulo es: ${areaCirculo}cm2`)

console.groupEnd()

