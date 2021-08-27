//helpers

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce((acc, elem) => acc += elem, 0)

    const promedio = sumaLista / lista.length
    return promedio
}
const isEven = number => number % 2 === 0

//calculadora de medianas
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2)
    
    if(isEven(lista.length)) {
        const personitaMitad1 = lista[mitad]
        const personitaMitad2 = lista[mitad - 1]
        const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2])
        return mediana
    } else {
        const personitaMitad = lista[mitad]
        return personitaMitad
    }
}


// Mediana general
const salariosCol = colombia.map((personita) => personita.salary)

const salariosColSorted = salariosCol.sort((salaryA, salaryB) => salaryA - salaryB)

//mediana top 10%
const sliceStart = salariosColSorted.length * 0.9
const sliceCount = salariosColSorted.length 
const salariosColTop10 = salariosColSorted.slice(sliceStart, sliceCount)

const medianaGeneralCol = medianaSalarios(salariosColSorted)
const medianaTop10Col = medianaSalarios(salariosColTop10)

console.log({
    medianaGeneralCol,
    medianaTop10Col
})