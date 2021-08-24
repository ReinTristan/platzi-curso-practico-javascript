
function calcularModa(lista) {
    const listaCount = {}

    lista.forEach(elemento => {
        listaCount[elemento] ? listaCount[elemento] += 1 : listaCount[elemento] = 1
    })
    const listaArray = Object.entries(listaCount).sort((a, b) =>a[1] - b[1])
    const lastElementIndex = listaArray.length - 1

    const lastElement = listaArray[lastElementIndex][1]
    const moda = listaArray.filter((elemento) => elemento[1] === lastElement)
    
    return moda
}
console.log(calcularModa([1,1,1,2,2,2,3,4,5,5,5,6,7]))


