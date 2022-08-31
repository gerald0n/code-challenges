const array1 = [3, 5, 1, 4]
const array2 = [9, 4, 5, 7, 1]
const array3 = [2, 4]
const array4 = [7, 4, 5, 8, 2, 1, 6, 9, 8]
const teste = ['Geraldo', 'Gomes']

const calcNumberQuad = arr => {
    arr = typeof arr === 'number' ? String(arr) : arr
    return arr.split('').map(index => index ** 2).join('')

    console.log(numberQuad)
}

console.log(calcNumberQuad(3514))
//retorna: [1, 3, 4, 5, 6, 7]
//REST coloca valores passados por parâmetro dentro de um array
