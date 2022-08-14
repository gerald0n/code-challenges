const ARRAY_ALPHABET = [
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

const encryptWord = (word, key) => {
    let fragmentedWord = word.split('')
    let encryptArr = new Array()

    for (let word in fragmentedWord)
        encryptArr.push(ARRAY_ALPHABET[ARRAY_ALPHABET.indexOf(fragmentedWord[word]) + key])
    
    return encryptArr.join('')
}

// Inicio do teste.
// Test start.

const { performance } = require('perf_hooks')

let startTest = performance.now()

console.log(`Palavra criptografada: ${encryptWord('gato', 3)}`)

let endTest = performance.now()

console.log(
    `a função demorou ${(endTest - startTest).toFixed(
        2
    )} ms para ser executada`
)
// SAIDA: a função demorou 2.53 ms para ser executada
// OUTPUT: the function took 2.53 ms to execute

// Fim do teste.
// End of test.