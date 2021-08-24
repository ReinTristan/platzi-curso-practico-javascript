const lista1 = [100,200,300,500]

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0
    
    // for(let i = 0; i < lista.length; i++) {
    //     sumaLista += lista[i]
    // }
    const sumaLista = lista.reduce((acc, elem) => acc += elem, 0)

    const promedio = sumaLista / lista.length
    return promedio
}
console.log(calcularMediaAritmetica(lista1))