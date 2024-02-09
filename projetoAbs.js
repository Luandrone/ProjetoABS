const readline = require('readline');

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

    pergunta('Escolha sua bebida, Refrigerantes: Coca, Guaraná, Suco de Uva ou Suco de Laranja: ', (bebida) => {

        if (bebida != 'Coca' && bebida != 'Guaraná' && bebida != 'Suco de Uva' && bebida != 'Suco de Laranja') {
            console.log('Digite novamente')
            escolherBebidas()
        }

        else if (bebida === 'Coca' || bebida === 'Guaraná') {

            console.log(`Sua bebida Refrigerante ${bebida} será servida no copo de papel.`)
            bebidaEscolhida.bebida = bebida
            bebidaEscolhida.copo = 'papel'
            pedrasDeGelo(6)

        } else {

            console.log(`Sua bebida Suco de ${bebida} será servida no copo de plástico.`)
            bebidaEscolhida.bebida = bebida
            bebidaEscolhida.copo = 'plástico'

            pedrasDeGelo(12)

        }

    }
    )

}

function pedrasDeGelo(pedras) {
    pergunta('Você gostaria de pedras de gelo, Sim ou Não ? ', (resposta) => {

        if (resposta != 'Sim' && resposta != 'Não') {
            console.log('Digite novamente')
            pedrasDeGelo(pedras)
        }

        else if (resposta === 'Sim') {
            console.log(`Você recebeu ${pedras} pedras de gelo`)
            bebidaEscolhida.gelo = pedras
        } else {
            console.log('Você optou por beber sem gelo')
            bebidaEscolhida.gelo = '0'
        }

        tamanhoDoCopo()
    })
}

function tamanhoDoCopo() {
    pergunta('Escolha o tamanho do copo, 300ml, 500ml, 700ml: ', (tamanhoMl) => {
        if(tamanhoMl != '300ml' && tamanhoMl != '500ml' && tamanhoMl != '700ml'){
            console.log('Digite novamente')
            tamanhoDoCopo()
        } else {
            
            console.log(`Seu tamanho foi de ${tamanhoMl}`)
            bebidaEscolhida.tamanho = tamanhoMl
        }

        formaDeEntrega()
    })
}

function formaDeEntrega() {
    pergunta('Escolha sua forma de entrega, delivery ou comer no local: ', (entrega) => {

        if (entrega != 'delivery' && entrega != 'local'){
            console.log('Digite novamente')
        }
        if (entrega === 'delivery') {
            bebidaEscolhida.tampa = 'tampa sem furo'
        } else {
            bebidaEscolhida.tampa = 'tampa com furo'
        }

        console.log(`Você escolheu a entrega por ${entrega}`)
        bebidaEscolhida.entrega = entrega

        console.log(`Seu pedido foi a bebida ${bebidaEscolhida.bebida}, no copo de ${bebidaEscolhida.copo}, com ${bebidaEscolhida.gelo} pedras de gelo, no copo tamanho de ${bebidaEscolhida.tamanho}, com a entrega sendo feita em ${bebidaEscolhida.entrega}, com a ${bebidaEscolhida.tampa}. `)
        rl.close()
    })
}

function pergunta(frase, escolha) {
    rl.question(frase, escolha)
}

