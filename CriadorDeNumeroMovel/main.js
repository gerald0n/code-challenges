const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
const DDDcomPrefixo = [
    '(11) 9',
    '(12) 9',
    '(13) 9',
    '(14) 9',
    '(15) 9',
    '(16) 9',
    '(17) 9',
    '(18) 9',
    '(19) 9',
    '(21) 9',
    '(22) 9',
    '(24) 9',
    '(27) 9',
    '(28) 9',
    '(31) 9',
    '(32) 9',
    '(33) 9',
    '(34) 9',
    '(35) 9',
    '(37) 9',
    '(38) 9',
    '(41) 9',
    '(42) 9',
    '(43) 9',
    '(44) 9',
    '(45) 9',
    '(46) 9',
    '(47) 9',
    '(48) 9',
    '(49) 9',
    '(51) 9',
    '(53) 9',
    '(54) 9',
    '(55) 9',
    '(61) 9',
    '(62) 9',
    '(63) 9',
    '(64) 9',
    '(65) 9',
    '(66) 9',
    '(67) 9',
    '(68) 9',
    '(69) 9',
    '(71) 9',
    '(73) 9',
    '(74) 9',
    '(75) 9',
    '(77) 9',
    '(79) 9',
    '(81) 9',
    '(82) 9',
    '(83) 9',
    '(84) 9',
    '(85) 9',
    '(86) 9',
    '(87) 9',
    '(88) 9',
    '(89) 9',
    '(91) 9',
    '(92) 9',
    '(93) 9',
    '(94) 9',
    '(95) 9',
    '(96) 9',
    '(97) 9',
    '(98) 9',
    '(99) 9'
]
const operadoras = [
    '67',
    '71',
    '72',
    '95',
    '96',
    '97',
    '98',
    '99',
    '68',
    '73',
    '74',
    '75',
    '76',
    '91',
    '92',
    '93',
    '94',
    '69',
    '79',
    '80',
    '81',
    '82',
    '83',
    '84',
    '85',
    '86',
    '87',
    '88',
    '89'
]

const criarNumeroMovel = () => {
    let numeroCompleto = []

    for (let i = 0; i < 6; i++) {
        numeroCompleto.push(numbers[Math.floor(Math.random() * numbers.length)])
        if (i == 1) numeroCompleto.push('-')
    }

    numeroCompleto = numeroCompleto.join('')

    return `${DDDcomPrefixo[Math.floor(Math.random() * DDDcomPrefixo.length)]}${
        operadoras[Math.floor(Math.random() * operadoras.length)]
    }${numeroCompleto}`
}

const arrMovel = []

for (let i = 0; i < 5238; i++) {
    arrMovel.push(criarNumeroMovel())
}

for (let movel of arrMovel) console.log(movel)
