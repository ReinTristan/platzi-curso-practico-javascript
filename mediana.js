function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce((acc, elem) => acc += elem, 0)

    const promedio = sumaLista / lista.length
    return promedio
}

const isEven = number => number % 2 === 0

function calcularMediana(lista) {
    let mediana
    lista.sort((a, b) => a - b)
    const mitadlista = parseInt(lista.length / 2)
    if(isEven(lista.length)) {
        const elemento1 = lista[mitadlista]
        const elemento2 = lista[mitadlista - 1]
        const promedio = calcularMediaAritmetica([elemento1, elemento2])
        mediana = promedio
    
    } else {
        mediana = lista[mitadlista]
    }
    return mediana
}

console.group("Mediana")
console.log(calcularMediana([1,1,1,2,2,2,3,4,5,5,5,6,7]))
console.groupEnd()

