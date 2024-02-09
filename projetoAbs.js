const readline = require('readline'); // npm install readline

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Bebida {
    constructor(bebida, copo, gelo, tamanho, entrega, tampa) {
        this.bebida = bebida;
        this.copo = copo;
        this.gelo = gelo;
        this.tamanho = tamanho;
        this.entrega = entrega;
        this.entrega = tampa;
    }

}

let bebidaEscolhida = new Bebida

escolherBebidas()


function escolherBebidas() {

    pergunta('Olá bem vindo. Escolha sua bebida desejada , Refrigerantes: Coca, Guaraná, Suco de Uva ou Suco de Laranja: ', (bebida) => {

        if (bebida !== 'Coca' && bebida !== 'Guaraná' && bebida !== 'Suco de Uva' && bebida !== 'Suco de Laranja') {
            mostrarMensagem('Você digitou uma opção inválida! Digite Coca, Guaraná, Suco de Uva ou Suco de Laranja. Digite novamente: ')
            escolherBebidas()
        }

        else if (bebida === 'Coca' || bebida === 'Guaraná') {

            mostrarMensagem(`Sua bebida Refrigerante ${bebida} será servida no copo de papel.`)
            bebidaEscolhida.bebida = bebida
            bebidaEscolhida.copo = 'papel'
            pedrasDeGelo(6)

        }

        else {

            mostrarMensagem(`Sua bebida Suco de ${bebida} será servida no copo de plástico.`)
            bebidaEscolhida.bebida = bebida
            bebidaEscolhida.copo = 'plástico'

            pedrasDeGelo(12)

        }

    }
    )

}

function pedrasDeGelo(pedras) {
    pergunta('Você gostaria de pedras de gelo em sua bebida , Sim ou Não ? ', (resposta) => {

        if (resposta !== 'Sim' && resposta !== 'Não') {
            mostrarMensagem('Você digitou uma opção inválida! Digite Sim ou Não. Digite novamente: ')
            pedrasDeGelo(pedras)
        }

        else if (resposta === 'Sim') {
            mostrarMensagem(`Você recebeu ${pedras} pedras de gelo`)
            bebidaEscolhida.gelo = pedras
        }

        else {
            mostrarMensagem('Você optou por beber sem gelo')
            bebidaEscolhida.gelo = '0'
        }

        tamanhoDoCopo()
    })
}

function tamanhoDoCopo() {
    pergunta('Escolha o tamanho do copo, 300ml, 500ml, 700ml: ', (tamanhoMl) => {

        if (tamanhoMl !== '300ml' && tamanhoMl !== '500ml' && tamanhoMl !== '700ml') {
            mostrarMensagem('Você digitou uma opção inválida! Digite 300ml, 500ml ou 700ml. Digite novamente: ')
            tamanhoDoCopo()
        }

        else {

            mostrarMensagem(`Seu tamanho foi de ${tamanhoMl}`)
            bebidaEscolhida.tamanho = tamanhoMl
        }

        formaDeEntrega()
    })
}

function formaDeEntrega() {
    pergunta('Escolha sua forma de entrega, 1 delivery ou 2 comer no local: ', (entrega) => {
        
        if(entrega != '1' && entrega != '2'){
            mostrarMensagem('Você digitou uma opção inválida')
            formaDeEntrega()
        } else {if (entrega === '1') {
                mostrarMensagem('Você receberá uma tampa sem furo')
                bebidaEscolhida.tampa = 'tampa sem furo'
            }

            else {
                mostrarMensagem('Você receberá uma tampa com furo')
                bebidaEscolhida.tampa = 'tampa com furo'
            }
        

        bebidaEscolhida.entrega = entrega
        mostrarMensagem(`Você escolheu a entrega por ${entrega}`)

        montarBebida()
        }
})
}



function pergunta(frase, escolha) {
    rl.question(frase, escolha)
}

function mostrarMensagem(mensagem) {
    console.log(mensagem)
}

function montarBebida(){
    mostrarMensagem(`Muito obrigado pelo seu pedido. Seu pedido foi a bebida ${bebidaEscolhida.bebida}, no copo de ${bebidaEscolhida.copo}, com ${bebidaEscolhida.gelo} pedras de gelo, no copo tamanho de ${bebidaEscolhida.tamanho}, com a entrega sendo feita em ${bebidaEscolhida.entrega}, com a ${bebidaEscolhida.tampa}. `)
        rl.close()
}
