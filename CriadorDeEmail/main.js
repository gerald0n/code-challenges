// GERADOR DE E-MAIL ALETÓRIO COM BASE NO NOME

const { filter } = require('./modules/arr.js')
const arrs = require('./modules/arr.js')

arrs.names.forEach((value, index, array) => {
    array[index] = arrs.reduceName(value)
}) // Reduzir o nome completo em 3 nomes

arrs.names.forEach((value, index, array) => {
    let teste = value.split(' ')
    if (
        teste[teste.length - 1] == 'da' ||
        teste[teste.length - 1] == 'de' ||
        teste[teste.length - 1] == 'di' ||
        teste[teste.length - 1] == 'do' ||
        teste[teste.length - 1] == 'du' ||
        teste[teste.length - 1] == 'das'
    )
        teste[teste.length - 1] = arrs.apelidos[Math.floor(Math.random() * arrs.apelidos.length)]
    array[index] = teste.join(' ')
}) // Caso o último nome reduzido seja da/de/di/do/du/das, será excluído, ficando apenas 2 nomes

arrs.names.forEach((value, index, array) => {
    array[index] = value
        .toLowerCase() // deixando todas letras em minúsculo
        .split('') //separando as letras para filtrar os espaços
        .map(value => {
            return value == ' '
                ? arrs.char[Math.floor(Math.random() * arrs.char.length)]
                : value
        }) //filtrando espaços e trocando por caracteres especiais
        .join('') //juntando a string
        .concat(
            arrs.domain[Math.floor(Math.random() * arrs.domain.length)]
        ) //concatenando com o dominio do email
    array[index] = arrs.filter(array[index])
})

arrs.mostrarNames()
