let condicao = true

const listaDeVagas = [
    {
        nome: 'Desenvolvedor Front-end Júnior',
        descricao:
            'Vaga destinada para pessoa programadora júnior com contrato PJ, salário de R$ 3.000,00 inicial e benefícios.',
        dataLimite: '22/12/2022',
        qtdDeCandidatosInscritos: 0,
        listaDeCandidatos: []
    },
    {
        nome: 'Desenvolvedor Front-end Pleno',
        descricao:
            'Vaga destinada para pessoa programadora pleno com contrato PJ, salário de R$ 5.000,00 inicial e benefícios.',
        dataLimite: '22/12/2022',
        qtdDeCandidatosInscritos: 0,
        listaDeCandidatos: []
    },
    {
        nome: 'Desenvolvedor Front-end Sênior',
        descricao:
            'Vaga destinada para pessoa programadora sênior com contrato PJ, salário de R$ 8.000,00 inicial e benefícios.',
        dataLimite: '22/12/2022',
        qtdDeCandidatosInscritos: 0,
        listaDeCandidatos: []
    }
]

const listarVagas = vagas => {
    console.log('\n VAGAS DISPONÍVEIS \n')
    vagas.forEach((vaga, indice) => {
        console.log(`
        Indice da vaga: ${indice}
        Nome da vaga: ${vaga.nome}
        ${vaga.qtdDeCandidatosInscritos} inscritos até o momento.`)
    })
}

const mostrarVagaIndividual = indice => {
    console.log(`
VAGA índice ${indice}:
nome: ${listaDeVagas[indice].nome}
descrição: ${listaDeVagas[indice].descricao}
Disponível até: ${listaDeVagas[indice].dataLimite}
${listaDeVagas[indice].qtdDeCandidatosInscritos} inscritos:
${listaDeVagas[indice].listaDeCandidatos}`)
}
const adicionarNovaVaga = (
    nome,
    descricao,
    tempoLimite,
    qtdDeCandidatosInscritos = 0,
    listaDeCandidatos = []
) => {
    return {
        nome,
        descricao,
        tempoLimite,
        qtdDeCandidatosInscritos,
        listaDeCandidatos
    }
}

do {
    let opcao = Number(
        prompt(`----------------------------------- MENU -----------------------------------
  1 - Listar vagas disponíveis
  2 - Criar uma nova vaga
  3 - Visualizar uma vaga
  4 - Inscrever um candidato em uma vaga
  5 - Excluir uma vaga
  6 - Sair`)
    )

    switch (opcao) {
        case 1:
            listarVagas(listaDeVagas)
            break
        case 2:
            let nome = prompt('Nome da vaga: ')
            let descricao = prompt('Descreva a vaga brevemente: ')
            let dataLimite = prompt('A vaga ficará disponível até a data: ')
            listaDeVagas.push(adicionarNovaVaga(nome, descricao, dataLimite))
            break
        case 3:
            listarVagas(listaDeVagas)
            let selectDeVaga = prompt(
                'digite o índice da vaga que deseja ver: '
            )
            mostrarVagaIndividual(selectDeVaga)
            break
        case 4:
            let nomeDoNovoCandidato = prompt('Nome do novo candidato: ')
            listarVagas(listaDeVagas)
            let indiceDaVaga = prompt(
                'Digite o índice da vaga que deseja se candidatar: '
            )
            let confirmacao = confirm(
                `${nomeDoNovoCandidato} está se candidatando à vaga ${listaDeVagas[indiceDaVaga].nome}. Confirma?`
            )
            if (confirmacao) {
                listaDeVagas[indiceDaVaga].listaDeCandidatos.push(
                    nomeDoNovoCandidato
                )
                listaDeVagas[indiceDaVaga].qtdDeCandidatosInscritos++
            } else {
                alert('Operação Cancelada!')
            }
            break
        case 5:
            break
        case 6:
            condicao = false
            break

        default:
            break
    }
} while (condicao)
