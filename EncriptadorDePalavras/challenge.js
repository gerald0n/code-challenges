function encriptarPalavra(palavra, chave) {
    let alfabeto = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
    ]

    let arrayPalavra = palavra.split('')
    let arrCriptografado = []

    for (let i = 0; i < arrayPalavra.length; i++) {
        for (let x = 0; x < alfabeto.length; x++) {
            if (arrayPalavra[i] === alfabeto[x]) {
                arrCriptografado.push(alfabeto[x + chave])
            }
        }
    }

    return arrCriptografado.join('')
}

// Inicio do teste.
// Test start.

const { performance } = require('perf_hooks')

let inicioTeste = performance.now()

console.log(`Palavra criptografada: ${encriptarPalavra('gato', 3)}`)

let fimTeste = performance.now()
console.log(
    `a função demorou ${(fimTeste - inicioTeste).toFixed(
        2
    )} ms para ser executada`
)
// SAIDA: a função demorou 3.21 ms para ser executada
// OUTPUT: the function took 3.21 ms to execute

// Fim do teste.
// End of test.
